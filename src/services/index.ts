import { http } from '~/core/config/axios'

export function httpGet(params: any): Promise<any> {
  return http.request({
    method: 'get',
    ...params
  })
}

export function httpPost(params: any): Promise<any> {
  return http.request({
    method: 'post',
    ...params
  })
}

export function httpPatch(params: any): Promise<any> {
  return http.request({
    method: 'patch',
    ...params
  })
}

export function httpPut(params: any): Promise<any> {
  return http.request({
    method: 'put',
    ...params
  })
}

export function httpDelete(params: any): Promise<any> {
  return http.request({
    method: 'delete',
    ...params
  })
}
