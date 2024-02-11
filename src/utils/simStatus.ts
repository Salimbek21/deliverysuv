import SimType from '~/core/enums/simType'

export function setSimColor(status: number) {
  return status === SimType.ESIM ? 'info' : status === SimType.PSIM ? 'info' : ''
}

export function setSimText(status: number) {
  return status === SimType.ESIM ? 'eSIM' : status === SimType.PSIM ? 'pSIM' : 'Неизвестно'
}
