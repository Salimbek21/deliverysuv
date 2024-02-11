import { baseURL } from '~/core/config/axios'
import { router } from '~/main'

const tryToRefreshToken = async (token: string | null) => {
  ElMessage.warning('Ваш токен обновлен, обновите страницу или отправьте запрос еще раз.')
  const res = await fetch(`${baseURL}core/refresh/?token=${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  const response = await res.json()

  localStorage.setItem('accessToken', response.access_token)
}

const checkToken = async () => {
  const accExp = localStorage.getItem('accessTokenExpiration') as any
  const refExp = localStorage.getItem('refreshTokenExpiration') as any

  const refreshToken = localStorage.getItem('refreshToken')

  if (new Date(+accExp * 1000) < new Date()) {
    if (new Date(+refExp * 1000) < new Date()) {
      localStorage.clear()
      await router.push('/login')
      ElMessage.error('Срок действия вашего токена истек, пожалуйста, перезайдите.')
    } else {
      await tryToRefreshToken(refreshToken)
    }
  }

  return true
}

export const useCheckToken = () => {
  checkToken()
}
