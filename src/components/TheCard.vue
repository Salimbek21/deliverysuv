<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="mainCard">
    <h1 v-if="props.title" class="font-semibold mb-3">{{ props.title }}</h1>
    <slot />
  </div>
</template>

<style>
.mainCard {
  position: relative;
  background-color: #fff;
  border: 2px solid #f5f5f5;
  border-radius: 10px;
  padding: 20px 12px;
  font-weight: 500;
  color: #000000;
}
</style>
