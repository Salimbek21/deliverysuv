<script setup lang="ts">
import { computed } from 'vue'

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
  <ElDatePicker v-model="value" v-bind="$attrs" />
</template>

<style>
.el-date-editor {
  width: 100% !important;
  height: 40px !important;
}

.el-date-editor.el-input__wrapper,
.el-date-editor .el-input__wrapper {
  padding: 4px 13px;
  border-radius: 8px;
  color: var(--el-color-primary);
  transition: all 0.2s;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px #8d8d8d inset;
}

.el-date-editor .el-range-input,
.el-date-editor .el-input__inner {
  font-size: 14px;
  font-weight: 500;
  color: var(--el-color-primary);
  resize: none;
}

.el-date-editor.gray.el-input__wrapper,
.el-date-editor.gray .el-input__wrapper {
  background-color: #f5f5f5;
  box-shadow: none;
}

.el-date-editor.gray.el-input__wrapper:hover,
.el-date-editor.gray .el-input__wrapper:hover {
  background-color: #efefef;
}

.el-date-editor.el-input__wrapper.is-focus {
  background-color: #f2f2f2;
  box-shadow: 0 0 0 1px #d1d1d1 inset;
}

.el-date-table td.today .el-date-table-cell__text {
  color: #000000;
}

.el-date-table td.in-range .el-date-table-cell {
  background-color: #f3f3f3;
}

.el-date-table td.end-date .el-date-table-cell__text,
.el-date-table td.start-date .el-date-table-cell__text {
  background-color: #000000;
}

.el-date-table td.available:hover {
  color: #000000;
  font-weight: bold;
}

.el-date-table td.in-range .el-date-table-cell:hover {
  background-color: #ececec;
}

.el-date-table td.current:not(.disabled) .el-date-table-cell__text {
  background-color: #000000;
}
</style>
