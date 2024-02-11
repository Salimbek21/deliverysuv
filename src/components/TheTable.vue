<script setup lang="ts">
interface Props {
  data?: unknown[]
  currentPage?: number
  pageSize?: number
  total?: number
  loading?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['size-change', 'page-change'])

const pageSizeRef = ref(props.pageSize)
const currentPageRef = ref(props.currentPage)

const handleSizeChange = (newSize: number) => {
  emit('size-change', newSize)
}

const handleCurrentChange = (newPage: number) => {
  emit('page-change', newPage)
}
</script>
<template>
  <div v-if="props.data">
    <div class="loadingWrapper">
      <div v-show="props.loading" class="loading-indicator">
        <div class="spinner"></div>
      </div>
      <ElTable :data="data" table-layout="fixed" v-bind="$attrs" height="642px">
        <slot />
      </ElTable>
    </div>
    <ElPagination
      hide-on-single-page
      v-model:pageSize="pageSizeRef"
      v-model:currentPage="currentPageRef"
      :page-sizes="[10, 20, 30, 40, 50, 100]"
      layout="sizes, prev, pager, next, total"
      small
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>

  <ElEmpty v-else :image-size="200" description="Нет данных" />
</template>

<style>
.el-table {
  --oq-table-border-color: #f5f5f5;
}
.el-table__row {
  cursor: pointer;
}

.el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell {
  background-color: #fbfbfb;
}

.el-table th.el-table__cell {
  -webkit-user-select: auto;
  user-select: auto;
  font-weight: normal;
  color: #8d8d8d;
  height: 48px;
  border-bottom: 0 !important;
}

.el-table .cell {
  font-size: 16px;
  word-break: unset;
  white-space: nowrap;
}

.el-table td.el-table__cell {
  padding-top: 17px;
  padding-bottom: 17px;
  color: #000000;
  text-transform: capitalize;
}

.loadingWrapper {
  position: relative;
  overflow: hidden;
  margin-bottom: 24px;
}

.loading-indicator {
  position: absolute;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 111;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* pagination */
.el-pagination--small .btn-prev {
  margin-left: auto !important;
}

.el-pagination--small .btn-next {
  margin-right: auto !important;
}
.el-pagination--small .btn-next,
.el-pagination--small .btn-prev,
.el-pagination--small .el-pager li {
  margin: 0;
  border: 1px solid #d4d4d8;
  border-radius: 0;
  font-size: 14px;
}

.el-pagination--small .btn-next,
.el-pagination--small .btn-prev,
.el-pagination--small .el-pager li {
  width: 38px;
  height: 38px;
  flex: 0 0 38px;
  margin-left: -1px;
}

.el-pager li.is-active,
.el-pager li:hover {
  background-color: #000;
  border: 1px solid #000;
  color: #fff;
}

.el-pager li:focus-visible {
  outline: none;
}

.el-pagination--small .btn-prev {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.el-pagination--small .btn-next {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.el-pagination .btn-next .el-icon,
.el-pagination .btn-prev .el-icon {
  color: #71717a;
  font-size: 14px;
  width: initial;
}

.el-pagination button:hover {
  background-color: #000;
}

.el-pagination button:hover .el-icon {
  color: #fff;
}

.el-pagination button:disabled:hover {
  background-color: #f5f5f5;
}

.el-pagination button:disabled:hover .el-icon {
  color: #000;
}

.el-pagination__total {
  font-weight: 500;
  width: 100px;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}
</style>
