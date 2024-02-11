import { httpGet } from '~/services'

export function apiSubscriberReportsList(params: any) {
  return httpGet({
    url: 'reports/list/',
    params: {
      page: params.page,
      page_size: params.page_size,
      start_date: params?.start_date,
      end_date: params?.end_date
    }
  })
}

export function apiDownloadSubscriberReportsFile(start_date: string, end_date: string) {
  return httpGet({
    url: 'reports/download/',
    params: {
      start_date: start_date,
      end_date: end_date
    }
  })
}
