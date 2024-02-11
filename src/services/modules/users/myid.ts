import { httpGet, httpPost } from '~/services'
import type { IMyIdUsers } from '~/stores/modules/users/myid'

export function apiMyIdUsersList(params: IMyIdUsers['params']) {
  return httpGet({
    url: '/users/list/',
    params: {
      page: params.page,
      page_size: params.page_size,
      phone_number: params?.phone_number,
      search: params?.search,
      start_date: params?.start_date,
      end_date: params?.end_date,
      register_type: params?.register_type,
      status: params?.status,
      only_fail: params?.only_fail
    }
  })
}

export function apiMyIdUser(id: number, registerType: number) {
  return httpGet({
    url: `/users/${id}/`,
    params: {
      register_type: registerType
    }
  })
}

export function apiChangeSimType(id: number, form: any) {
  return httpPost({
    url: `users/${id}/change-sim-type/`,
    data: form
  })
}

export function apiUpdateUser(id: number, form: any) {
  return httpPost({
    url: `/users/${id}/update/`,
    data: form
  })
}

export function apiGetMyIdUserLogsList(id: number, params: any) {
  return httpGet({
    url: `users/${id}/logs/`,
    params: {
      page: params.page,
      page_size: params.page_size
    }
  })
}
