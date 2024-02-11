import { httpGet, httpPost } from '~/services'
import type { INumbersStore } from '~/stores/modules/numbers/emptyNumbers'

export function apiEmptyNumbersList(params: INumbersStore['params']) {
  return httpGet({
    url: `/numbers/empty-numbers/list/`,
    params: {
      page: params.page,
      page_size: params.page_size,
      data_type: params.data_type
    }
  })
}

export function apiUploadFile(numberType: string, file: any) {
  return httpPost({
    url: `/numbers/empty-numbers/upload/`,
    params: {
      number_type: numberType
    },
    data: file
  })
}

export function apiConfirmUpload(pk: number) {
  return httpPost({
    url: `/numbers/empty-numbers/upload-confirm/`,
    params: {
      pk: pk
    }
  })
}

export function apiEmptyNumbersCount(numberType: string) {
  return httpGet({
    url: `/numbers/empty-numbers/count/`,
    params: {
      number_type: numberType
    }
  })
}
