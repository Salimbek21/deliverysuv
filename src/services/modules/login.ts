import { httpPost } from '~/services'

export function apiLogin(data: any): Promise<any> {
  return httpPost({
    url: 'auth/login/',
    data: data
  })
}
