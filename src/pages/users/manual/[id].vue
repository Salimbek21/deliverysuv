<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="flex items-center pb-[18px] border-[#f5f5f5] border-b-[2px]">
    <h1 class="text-[24px] font-medium">Инфо</h1>
  </div>
  <div class="flex justify-between items-center sticky top-[0] bg-[#ffffff] py-[12px] z-30">
    <button class="flex items-center cursor-pointer p-[10px]" @click="router.back()">
      <i class="iconArrow"></i>
      Вернуться назад
    </button>
  </div>
</template>
