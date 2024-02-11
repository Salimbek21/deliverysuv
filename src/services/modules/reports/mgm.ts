import { httpGet } from '~/services'

export function apiMgmReportsList(params: any) {
  return httpGet({
    url: 'reports/mgm/list/',
    params: {
      page: params.page,
      page_size: params.page_size,
      start_date: params?.start_date,
      end_date: params?.end_date
    }
  })
}

export function apiDownloadMgmReportsFile(start_date: string, end_date: string) {
  return httpGet({
    url: 'reports/mgm/download/',
    params: {
      start_date: start_date,
      end_date: end_date
    }
  })
}
