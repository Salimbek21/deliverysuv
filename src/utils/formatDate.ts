import moment from 'moment'

export const formatDate = (date: string): string => moment(date).format('DD-MM-YYYY')
export const formatDateCountDown = (date: string): string =>
  moment(date).format('YYYY-MM-DD HH:mm:ss')
export const formatDateTime = (date: string): string => moment(date).format('DD.MM.YYYY / HH:mm')
