import { httpGet, httpPost } from '~/services'

export function apiGetPromoCodeList(params: any) {
  return httpGet({
    url: `/promo-codes/list/`,
    params: {
      page: params.page,
      page_size: params.page_size
    }
  })
}

export function apiGeneratePromoCode(form: any) {
  return httpPost({
    url: `/promo-codes/generate/`,
    data: form
  })
}

export function apiDownloadPromoCodeFile(filename: string) {
  return httpGet({
    url: `/promo-codes/download/`,
    params: {
      filename: filename
    }
  })
}
