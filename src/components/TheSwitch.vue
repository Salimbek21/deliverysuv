<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  text: string
  modelValue?: any
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div
    class="flex items-center justify-between border-[2px] border-[#F5F5F5] rounded-[10px] py-[20px] px-[16px]"
  >
    <div class="flex flex-col">
      <div class="text-[16px] mb-[7px] text-[#000] leading-5">{{ props.title }}</div>
      <div class="text-[12px] text-[#8D8D8D] leading-4">{{ props.text }}</div>
    </div>
    <ElSwitch
      v-model="value"
      style="--el-switch-on-color: #34c759; --el-switch-off-color: #e9e9ea"
    />
  </div>
</template>

<style>
.el-switch__core {
  height: 31px;
  min-width: 51px;
  border-radius: 100px;
}

.el-switch__core .el-switch__action {
  width: 27px;
  height: 27px;
}

.el-switch.is-checked .el-switch__core .el-switch__action {
  left: calc(100% - 28px);
}
</style>
