<script setup lang="ts">
// import ToolBar from '../../components/ToolBar.vue'
import Customers from '../../components/Customers/index.vue'
</script>

<template>
   <div class="border-[#f5f5f5] border-b-[2px] mb-[24px] pb-[24px]">
    <div class="flex items-center justify-between">
      <h1 class="text-[24px] font-medium">Мижозлар</h1>
      <elButton class="reservationBtn">+ буюртма кушиш</elButton>
    </div>
  </div>

  <Customers/>
</template>

<style>
 .reservationBtn {
  border-radius: 7px;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  background-color: #6b53f4;
  text-transform: capitalize;

 }


</style>
