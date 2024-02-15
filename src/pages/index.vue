<script setup lang="ts">
// import { apiEmptyNumbers } from '~/services/modules/numbers/emptyNumbers'
//
// const count = ref(null)
//
// const getEmptyNumbers = async () => {
//   try {
//     const res = await apiEmptyNumbers()
//     count.value = res.data.count
//   } catch (error) {
//     console.error(error)
//   }
// }
//
// onMounted(async () => {
//   await getEmptyNumbers()
// })
</script>

<template>
  <div class="border-[#f5f5f5] border-b-[2px] mb-[24px] pb-[24px]">
    <div class="flex items-center justify-between">
      <h1 class="text-[24px] font-medium">Мониторинг</h1>
    </div>
  </div>

  <!--  <ElRow>-->
  <!--    <ElCol :span="6">-->
  <!--      <Card class="!bg-[#F5F5F5] !p-[24px]">-->
  <!--        <i class="iconCard w-[60px] h-[60px] mb-[20px] flex"></i>-->
  <!--        <div class="text-[18px] font-semibold mb-[10px]">Оставшиеся комплекты</div>-->

  <!--        <span class="text-[30px] font-semibold">{{ count }}</span>-->
  <!--      </Card>-->
  <!--    </ElCol>-->
  <!--  </ElRow>-->
</template>

<!--<style scoped>-->
<!--.iconCard {-->
<!--  background: url('../assets/icons/numbers/card.svg') no-repeat center;-->
<!--}-->
<!--</style>-->
