export const currentStartDate = new Date(new Date().setUTCHours(0, 0, 0, 0)).toISOString()
export const currentEndDate = new Date(new Date().setUTCHours(23, 59, 59, 0)).toISOString()
export const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59)
])
