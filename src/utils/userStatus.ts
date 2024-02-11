import UserStatusType from '~/core/enums/userStatusType'
import RegisterWorkflowStatus from '~/core/enums/registerWorkflowStatus'

export function setUserStatusColor(status: number) {
  return status === UserStatusType.WAITING
    ? 'warning'
    : status === UserStatusType.VERIFIED
      ? 'success'
      : status === UserStatusType.ACTIVATED
        ? 'success'
        : status === UserStatusType.REJECT
          ? 'danger'
          : status === UserStatusType.NO_PAY
            ? 'danger'
            : ''
}

export function setUserStatusText(status: number) {
  return status === UserStatusType.WAITING
    ? 'Ожидание'
    : status === UserStatusType.VERIFIED
      ? 'Подтверждено'
      : status === UserStatusType.ACTIVATED
        ? 'Активно'
        : status === UserStatusType.REJECT
          ? 'Отклоненный'
          : status === UserStatusType.NO_PAY
            ? 'Нет оплаты'
            : ''
}

export function setUserMyIDStatusText(status: number) {
  return status === RegisterWorkflowStatus.WAITING
    ? 'WAITING'
    : status === RegisterWorkflowStatus.STAR_DOL_REG
      ? 'STAR_DOL_REG'
      : status === RegisterWorkflowStatus.START_DOL_REG_FAIL
        ? 'START_DOL_REG_FAIL'
        : status === RegisterWorkflowStatus.CHANGE_NUMBER
          ? 'CHANGE_NUMBER'
          : status === RegisterWorkflowStatus.PAYMENT_EXPIRED
            ? 'PAYMENT_EXPIRED'
            : status === RegisterWorkflowStatus.CHANGE_PP
              ? 'CHANGE_PP'
              : status === RegisterWorkflowStatus.CHANGE_PP_FAIL
                ? 'CHANGE_PP_FAIL'
                : status === RegisterWorkflowStatus.CHANGE_SIM
                  ? 'CHANGE_SIM'
                  : status === RegisterWorkflowStatus.CHANGE_SIM_FAIL
                    ? 'CHANGE_SIM_FAIL'
                    : status === RegisterWorkflowStatus.CHECK_STATE
                      ? 'CHECK_STATE'
                      : status === RegisterWorkflowStatus.CHECK_STATE_FAIL
                        ? 'CHECK_STATE_FAIL'
                        : status === RegisterWorkflowStatus.COMPLETED
                          ? 'COMPLETED'
                          : ''
}
