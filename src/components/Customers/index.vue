import { lang } from 'moment';
<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<template>
  <el-card class="box-card">
    <div class="wrapFilter">
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <el-input v-model="input" placeholder="..." />
      <ElButton>Search</ElButton>
    </div>
  </el-card>
  <br />
  <el-card class="box-card">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="КОД" width="180" />
      <el-table-column prop="name" label="Ф.И.О" width="180" />
      <el-table-column prop="address" label="БАЛАНС" />
      <el-table-column prop="address" label="ТЕЛЕФОН РАҚАМ" />
      <el-table-column prop="address" label="OPTION">
        <ElButton>Батафсил</ElButton>
        <ElButton>Учириш</ElButton>
      </el-table-column>
    </el-table>
    <br />

    <el-pagination background layout="prev, pager, next" :total="1000" />
  </el-card>
</template>

<style scoped>
.wrapFilter {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* max-width: 500px; */
  gap: 10px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
