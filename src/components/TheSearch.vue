<script lang="ts" setup>
import { cloneDeep } from 'lodash-es'
import { defaultUsersList } from '~/core/consts/users'

const props = defineProps<{
  disabled: boolean
}>()

const store = useManualUsersStoreWithOut()

const state = ref('')

const emit = defineEmits(['change'])

const handleSearch = async (event: any) => {
  store.params.search = event
  await store.getManualUsersList()
}

const handleSelect = (firstName: string, lastName: string, phoneNumber: string) => {
  store.usersList = cloneDeep(defaultUsersList as IUsersList[])
  state.value = `${lastName} ${firstName} ${phoneNumber}`
  store.params.search = ''
  emit('change', phoneNumber)
}

watch(props, () => {
  if (props.disabled) {
    store.usersList = cloneDeep(defaultUsersList as IUsersList[])
    state.value = ''
    store.params.search = ''
    emit('change', '')
  }
})

watch(state, () => {
  if (!state.value) {
    store.usersList = cloneDeep(defaultUsersList as IUsersList[])
    emit('change', '')
  }
})
</script>

<template>
  <div class="infinite">
    <ElFormItem class="!mb-0" label="CTN Пользователя">
      <TheInput
        :disabled="props.disabled"
        v-model="state"
        placeholder="Номер телефона"
        @input="handleSearch"
      />
    </ElFormItem>

    <ElScrollbar v-show="!!store.params.search" class="infiniteList">
      <li
        class="infiniteListItem"
        v-for="(user, index) in store.usersList"
        :key="index"
        @click="handleSelect(user.first_name, user.last_name, user.phone_number)"
      >
        {{ user.last_name }}
        {{ user.first_name }}
        {{ user.phone_number }}
      </li>
    </ElScrollbar>
  </div>
</template>

<style>
.infinite {
  position: relative;
  width: 100%;
}

.infiniteList {
  position: absolute;
  z-index: 11;
  top: 60px;
  background-color: #fff;
  width: 100%;
  padding: 10px 10px;
  list-style-type: none;
  border-radius: 8px;
  border: 1px solid #f1f1f2;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.03);
  max-height: 250px;
  height: 250px;
  overflow: auto;
}

.infiniteList .infiniteListItem {
  cursor: pointer;
  border-radius: 8px;
  padding: 0 14px;
}

.infiniteList .infiniteListItem:hover {
  background-color: #0000002d;
}
</style>
