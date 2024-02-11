import axios from 'axios'

import { useCheckToken } from '~/utils/checkToken'

export const baseURL = '__BASE_URL__' //'__BASE_URL__'

export const http = axios.create({
  baseURL: baseURL
})

http.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('accessToken')
    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error: any) => Promise.reject(error)
)

http.interceptors.response.use(
  (response: any) => {
    return response
  },
  ({ response }) => {
    const { status } = response || { status: false } //data

    // if (!response) {
    //   ElMessage({
    //     message: 'Ошибка соединения!',
    //     type: 'error'
    //   })
    //   return console.log('Ошибка соединения!')
    // }

    if (parseInt(status) === 401) {
      useCheckToken()
      // ElMessage({
      //   message: `${data.status_code} ${data.message}`,
      //   type: 'error'
      // })
    }

    // if (parseInt(status) === 400)
    //   ElMessage({
    //     message: `${data.status_code} ${data.message}`,
    //     type: 'error'
    //   })
    //
    // if (parseInt(status) === 403)
    //   ElMessage({
    //     message: `У вас нет доступа`,
    //     type: 'error'
    //   })
    //
    // if (parseInt(status) === 404)
    //   ElMessage({
    //     message: `${data.status_code} ${data.message}`,
    //     type: 'error'
    //   })
    //
    // if (parseInt(status) === 429)
    //   ElMessage({
    //     message:
    //       'Вы делаете слишком много запросов на сервер. Пожалуйста подождите 1 минуту и продолжите.',
    //     type: 'error'
    //   })
    //
    // if (parseInt(status) === 500) {
    //   ElMessage({
    //     message: `${data.status_code} ${data.message}`,
    //     type: 'error'
    //   })
    // }

    // ElMessage({
    //   message: `${parseInt(status)} ${response.statusText}`,
    //   type: 'error'
    // })

    return Promise.reject(response)
  }
)
