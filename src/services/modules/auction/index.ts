import { httpGet, httpPut, httpPost } from '~/services'
import type { IAuctionNumbersStore } from '~/stores/modules/auction/numbers'

export function apiAuctionNumbersList(params: IAuctionNumbersStore['params']) {
  return httpGet({
    url: `/auction/auction-numbers/list/`,
    params: {
      page: params.page,
      page_size: params.page_size,
      is_linked: params.is_linked,
      is_reserved: params.is_reserved,
      is_purchased: params.is_purchased,
      phone_number: params.phone_number
    }
  })
}

export function apiAuctionList(params: any) {
  return httpGet({
    url: `/auction/list/`,
    params: {
      page: params.page,
      page_size: params.page_size
    }
  })
}

export function apiAuctionDetail(id: number) {
  return httpGet({
    url: `/auction/${id}/detail/`
  })
}

export function apiAuctionUpdate(id: number, form: any) {
  return httpPut({
    url: `/auction/${id}/update/`,
    data: form
  })
}

export function apiAuctionCreate(form: any) {
  return httpPost({
    url: `/auction/create/`,
    data: form
  })
}

export function apiAuctionLogsList(id: number) {
  return httpGet({
    url: `/users/${id}/user-logs/auction/`
  })
}
