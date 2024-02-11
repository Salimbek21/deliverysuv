import { httpGet, httpPost } from '~/services'
import type { INotificationStore } from '~/stores/modules/notifications'

export function apiNotificationsList(params: INotificationStore['params']) {
  return httpGet({
    url: `/notifications/list/`,
    params: {
      page: params.page,
      page_size: params.page_size
    }
  })
}

export function apiNotification(id: number) {
  return httpGet({
    url: `/notifications/${id}/detail/`
  })
}

export function apiCreateNotifications(form: any) {
  return httpPost({
    url: `/notifications/send-notifications/`,
    data: form
  })
}

export function apiCreateNotificationsByTopic(form: any) {
  return httpPost({
    url: `/notifications/send-notifications-by-topic/`,
    data: form
  })
}

export function apiCreateNotification(form: any, phoneNumber: string) {
  return httpPost({
    url: `/notifications/send-notification/`,
    data: form,
    params: {
      phone_number: phoneNumber
    }
  })
}

export function apiNotificationLanguage(phoneNumber: string) {
  return httpGet({
    url: `/notifications/language/`,
    params: {
      phone_number: phoneNumber
    }
  })
}

export function apiUploadImg(file: any) {
  return httpPost({
    url: `/notifications/upload/`,
    data: file
  })
}

export function apiNotificationTopicList() {
  return httpGet({
    url: `/notifications/topic/list/`
  })
}
