<script setup lang="ts">
const props = defineProps<{
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
  <ElInput class="oq-input" v-model="value" clearable />
</template>

<style>
.el-input.oq-input .el-input__wrapper,
.el-textarea.oq-input .el-textarea__inner {
  padding: 4px 16px;
  height: 40px;
  border-radius: 8px;
  transition: all 0.2s;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px #8d8d8d inset;
  font-size: 14px !important;
}

.el-textarea.oq-input .el-textarea__inner {
  padding-top: 10px;
  height: 100px;
}

.el-input.oq-input .el-input__inner[type='password'] {
  font-size: 18px;
  letter-spacing: 2px;
  padding-bottom: 1px;
}

.el-input.oq-input.gray .el-input__wrapper,
.el-textarea.oq-input.gray .el-textarea__inner {
  background-color: #f5f5f5;
  box-shadow: none;
}

.el-input.oq-input.gray .el-input__wrapper:hover,
.el-textarea.oq-input.gray .el-textarea__inner:hover {
  background-color: #efefef;
  box-shadow: none;
}

.el-form-item.is-error .el-input.oq-input .el-input__wrapper,
.el-form-item.is-error .el-textarea.oq-input .el-textarea__inner {
  background-color: #ffe7e7 !important;
  box-shadow: 0 0 0 1px #f56c6c inset;
}

.el-form-item.is-error .el-input.oq-input .el-input__inner::placeholder {
  color: #f56c6c;
}

.el-input.el-input--small.oq-input .el-input__wrapper {
  height: 32px;
  font-size: 14px !important;
  border-radius: 6px;
  padding: 4px 12px;
}

.el-form-item__label {
  font-size: 12px;
  line-height: 15px !important;
  font-weight: normal;
  color: #8d8d8d;
  margin-bottom: 4px !important;
}

.el-input.oq-input .el-input__count .el-input__count-inner {
  color: var(--el-color-primary-light-3);
}

.el-input.oq-input.is-disabled {
  opacity: 0.3;
}

/*margin-bottom: 4px !important;
line-height: 15px !important;
font-size: 12px;

.el-form-item.is-error .the-input.oq-input.gray .el-input__wrapper,
.el-form-item.is-error .the-input.oq-input.gray .el-textarea__inner {
  background-color: #ffe7e7 !important;
  box-shadow: none !important;
  border: 1px solid #f56c6c;
}

.el-form-item.is-error .the-input .el-input__wrapper .el-input__inner::placeholder,
.el-form-item.is-error .the-input .el-input__wrapper .el-textarea__inner::placeholder {
  color: #f56c6c;
}*/
</style>
