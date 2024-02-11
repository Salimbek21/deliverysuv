import { httpGet, httpPut, httpPost, httpDelete } from '~/services'
import type { IStaffsStore } from '~/stores/modules/staffs'

export function apiStaffsList(params: IStaffsStore['params']) {
  return httpGet({
    url: '/staffs/list/',
    params: {
      page: params.page,
      page_size: params.page_size
    }
  })
}

export function apiStaff(id: number) {
  return httpGet({
    url: `/staffs/${id}/detail/`
  })
}

export function apiCreateStaff(form: any) {
  return httpPost({
    url: `/staffs/create/`,
    data: form
  })
}

export function apiUpdateStaff(id: number, form: [{ username: string; role: number[] }]) {
  return httpPut({
    url: `/staffs/${id}/update/`,
    data: form
  })
}

export function apiDeleteStaff(id: number) {
  return httpDelete({
    url: `/staffs/${id}/delete/`
  })
}
