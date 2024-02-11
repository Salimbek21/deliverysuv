<script setup lang="ts"></script>

<template>
  <ElButton class="op-button">
    <slot />
  </ElButton>
</template>

<style>
.op-button.el-button {
  border-radius: 8px;
  height: 40px;
  font-size: 16px;
}

.op-button .el-button--large {
  height: 44px;
}

.op-button.el-button--info {
  color: var(--el-color-black);
}

.op-button.el-button--info:hover {
  color: var(--el-color-primary) !important;
  background-color: #efefef !important;
}

.op-button.el-button--info:focus {
  color: var(--el-color-black);
  background-color: #efefef;
}
</style>
