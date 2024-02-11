import type { IManualUsers } from '~/stores/modules/users/manual'
import { httpGet, httpPost } from '~/services'

export function apiManualUsersList(params: IManualUsers['params']) {
  return httpGet({
    url: '/users/list/',
    params: {
      page: params?.page,
      page_size: params?.page_size,
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

export function apiManualUser(id: number) {
  return httpGet({
    url: `/users/${id}/`
  })
}

export function apiChangeSimType(id: number, form: any) {
  return httpPost({
    url: `users/${id}/change-sim-type/`,
    data: form
  })
}

export function apiChangeManualUserStatus(id: number, form: any) {
  return httpPost({
    url: `/users/change-status/${id}/`,
    data: form
  })
}

export function apiUpdateUser(id: number, form: any) {
  return httpPost({
    url: `/users/${id}/update/`,
    data: form
  })
}

export function apiUserImg(fileName: string) {
  return httpGet({
    url: `/users/image/${fileName}/`
  })
}

export function apiStartManualUserReg(id: number) {
  return httpPost({
    url: `/users/${id}/start-registration/`
  })
}

export function apiManualUserWorkflowStatus(id: number) {
  return httpGet({
    url: `/users/${id}/workflow-status`
  })
}

export function apiCheckPayment(id: number) {
  return httpPost({
    url: `users/${id}/check-payment/`,
    params: {
      user_id: id
    }
  })
}

export function apiTakeToWork(id: number) {
  return httpPost({
    url: `users/${id}/take-to-work/`
  })
}

export function apiGetManualUserLogs(id: number, params: any) {
  return httpGet({
    url: `users/${id}/user-logs/`,
    params: {
      page: params.page,
      page_size: params.page_size
    }
  })
}

export function apiUserDocument(id: number) {
  return httpGet({
    url: `/users/${id}/document/`
  })
}
