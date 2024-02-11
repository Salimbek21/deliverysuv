declare interface IUsersList {
  id: number
  first_name: string
  last_name: string
  middle_name: string
  birth_date: string
  gender: number
  pinfl: string
  pass_data: string
  expired_date: string
  country_code: string
  doc_type: number
  issued_date: string
  issued_by: string
  birth_place: string
  permanent_address: string
  register_type: number
  document_front: string
  document_back: string
  selfie: string
  sign: string
  phone_number: string
  status: number
  sim_type: number
  reject_reasons: [
    {
      id: number
      reject_types: number[]
      reason: string
    }
  ]
  active_until: string
  created_at: string
  verified_at: string
  sim_number: string
  lpa_code: string
  plan_id: number | null
  register_workflow_status: number | null
  p_sim_icc_id: string | null
  editor_username: string
  auction: IAuction
}

declare interface IUserDocument {
  doc_number: number
  doc_day: number
  doc_month: number
  doc_year: number
  first_name: string
  last_name: string
  middle_name: string
  birth_day: number
  birth_month: number
  birth_year: number
  pinfl: string
  issued_by: string
  passport_series: string
  passport_number: string
  issued_date: string
  birth_place: string
  icc_id: null
  phone_number: string
  day: number
  month: number
  year: number
}

declare interface IUpdateUserForm {
  first_name: string
  last_name: string
  middle_name: string
  birth_date: string
  pinfl: string
  pass_data: string
  expired_date: string
  issued_date: string
  birth_place: string
  permanent_address: string
}

declare interface IUserLogs {
  user_id: number | null
  user_username: string
  action: string
  details: string
  created_at: string
  client_id: number | null
  is_success: boolean
}

declare interface IUserMyIDLogs {
  id: number | null
  account_id: number | null
  action: string
  details: string
  created_at: string
}
