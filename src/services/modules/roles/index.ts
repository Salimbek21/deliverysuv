import { httpGet, httpPut, httpPost, httpDelete } from '~/services'

export function apiPermissionsList() {
  return httpGet({
    url: '/roles/permissions/'
  })
}

export function apiRolesList() {
  return httpGet({
    url: '/roles/list/'
  })
}

export function apiRole(id: number) {
  return httpGet({
    url: `/roles/${id}/detail`
  })
}

export function apiCreateRole(form: any) {
  return httpPost({
    url: `/roles/create/`,
    data: form
  })
}

export function apiUpdateRole(id: number, form: any) {
  return httpPut({
    url: `/roles/${id}/update/`,
    data: form
  })
}

export function apiDeleteRole(id: number) {
  return httpDelete({
    url: `/roles/${id}/delete/`
  })
}
