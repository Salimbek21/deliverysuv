<script setup lang="ts">
const props = defineProps<{
  list?: any[]
}>()
</script>

<template>
  <ElRadioGroup class="radioFilter" v-bind="$attrs">
    <ElRadioButton :label="item.value" v-for="(item, index) in props.list" :key="index">
      {{ item.label }}
    </ElRadioButton>
  </ElRadioGroup>
</template>

<style>
.radioFilter {
  display: inline-flex;
  gap: 4px;
  background-color: #f5f5f5;
  height: 40px;
  border-radius: 8px;
  padding: 4px;
}

.radioFilter.light {
  background-color: #fff;
}

.radioFilter .el-radio-button {
  height: 100%;
}

.radioFilter .el-radio-button__inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  height: 100%;
  border: 0 !important;
  border-radius: 8px !important;
  width: 120px;
  color: #8d8d8d;
}

.radioFilter.light .el-radio-button__inner:hover {
  color: #000;
  background-color: #f5f5f5;
}

.radioFilter .el-radio-button__inner:hover {
  color: #000;
  background-color: #fcfcfc;
}

.radioFilter .el-radio-button__original-radio:checked + .el-radio-button__inner {
  color: #000000;
  background-color: #fff;
  border: 0 !important;
  box-shadow: none;
}

.radioFilter.light .el-radio-button__original-radio:checked + .el-radio-button__inner {
  background-color: #f5f5f5;
}
</style>
