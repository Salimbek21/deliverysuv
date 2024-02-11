import { httpGet, httpPost, httpPut, httpDelete } from '~/services'
import type { IBannerStore } from '~/stores/modules/marketing/banners'

export function apiBannersList(params: IBannerStore['params']) {
  return httpGet({
    url: `/banners/list/`,
    params: {
      page: params.page,
      page_size: params.page_size
    }
  })
}

export function apiBanner(id: number) {
  return httpGet({
    url: `/banners/detail/${id}/`
  })
}

export function apiCreateBanner(form: any) {
  return httpPost({
    url: `/banners/create/`,
    data: form
  })
}

export function apiUpdateBanner(id: number, form: any) {
  return httpPut({
    url: `/banners/update/${id}/`,
    data: form
  })
}

export function apiDeleteBanner(id: number) {
  return httpDelete({
    url: `/banners/delete/${id}/`
  })
}

export function apiUploadImg(file: any) {
  return httpPost({
    url: `/banners/upload/`,
    data: file
  })
}

export function apiBannerImg(fileName: string) {
  return httpGet({
    url: `/banners/image/${fileName}/`
  })
}

export function apiBannerCategoriesList() {
  return httpGet({
    url: `/banners/categories/`
  })
}
