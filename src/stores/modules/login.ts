import { defineStore } from 'pinia'
// import { jwtDecode } from 'jwt-decode'
import { apiLogin } from '~/services/modules/login'
import { router } from '~/main'

export interface ILoginStore {
  loading: boolean
  data: {
    access: string
    expiration_date: string
    is_superuser: string
    refresh: string
    regions: []
    username: string
  }
}

export const useLoginStore = defineStore({
  id: 'login',
  state: (): ILoginStore => ({
    loading: false,
    data: {
      access: '',
      expiration_date: '',
      is_superuser: '',
      refresh: '',
      regions: [],
      username: ''
    }
  }),
  getters: {},
  actions: {
    async login(form: any) {
      try {
        this.loading = true
        const res: ILoginStore = await apiLogin(form)
        this.data.access = res.data.access
        this.data.expiration_date = res.data.expiration_date
        this.data.is_superuser = res.data.is_superuser
        this.data.refresh = res.data.refresh
        this.data.regions = res.data.regions
        this.data.username = res.data.username

        // const decodeAccess: any = jwtDecode(this.data.access)
        // const decodeRefresh: any = jwtDecode(this.data.refresh)

        localStorage.setItem('accessToken', this.data.access)
        localStorage.setItem('refreshToken', this.data.refresh)

        await router.push('/')
        ElMessage({
          message: 'Вы успешно авторизовались!',
          type: 'success'
        })
        this.loading = false
      } catch (error: any) {
        ElMessage({
          message: `${error?.data?.status_code} ${error?.data?.message}`,
          type: 'error'
        })
        console.error(error)
      }
    }
  }
})

export function useLoginStoreWithOut() {
  return useLoginStore()
}
