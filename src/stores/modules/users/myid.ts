import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'
import {
  apiMyIdUser,
  apiMyIdUsersList,
  apiChangeSimType,
  apiUpdateUser,
  apiGetMyIdUserLogsList
} from '~/services/modules/users/myid'
import { defaultUsersList, defaultCurrentUser, defaultUserLogs } from '~/core/consts/users'

import RegisterType from '~/core/enums/registerType'

export interface IMyIdUsers {
  loading: boolean
  count: number
  usersList: IUsersList[]
  currentUser: IUsersList
  userLogs: IUserLogs[]
  params: {
    phone_number?: string
    search?: string
    page?: number
    page_size?: number
    start_date?: string
    end_date?: string
    register_type?: number | null
    status?: number | null
    only_fail?: boolean
  }
  currentUserLogs: {
    data: []
    count: number
    loading: boolean
    params: {
      page: number
      page_size: number
    }
  }
}

export const useMyIdUsersStore = defineStore({
  id: 'usersMyId',
  state: (): IMyIdUsers => ({
    loading: false,
    count: 0,
    usersList: cloneDeep(defaultUsersList),
    currentUser: cloneDeep(defaultCurrentUser),
    userLogs: cloneDeep(defaultUserLogs),
    params: {
      phone_number: '',
      search: '',
      page: 1,
      page_size: 20,
      start_date: '',
      end_date: '',
      register_type: RegisterType.MyID,
      status: null,
      only_fail: false
    },
    currentUserLogs: {
      data: [],
      count: 0,
      loading: false,
      params: {
        page: 1,
        page_size: 20
      }
    }
  }),
  getters: {},
  actions: {
    async getMyIdUsersList(): Promise<void> {
      try {
        this.loading = true
        const res = await apiMyIdUsersList(this.params)
        this.usersList = res.data.data
        this.count = res.data.count
        this.loading = false
      } catch (error) {
        this.loading = false
        console.error(error)
      }
    },

    async getMyIdUser(id: number) {
      await apiMyIdUser(id, RegisterType.MyID)
        .then(async (res) => {
          this.currentUser = res.data
        })
        .catch((e: any) => {
          console.log(e)
        })
    },

    async changeSimType(id: number, form: any) {
      await apiChangeSimType(id, form)
        .then((res) => {
          if (res.data.has_error === true) {
            ElMessage({
              message: res.data.message,
              type: 'error'
            })
          } else {
            ElMessage({
              message: 'Тип SIM карты успешно изменен!',
              type: 'success'
            })
          }
        })
        .catch((e: any) => {
          console.log(e)
        })
      await this.getMyIdUser(id)
    },

    async updateUser(id: number, form?: any) {
      await apiUpdateUser(id, form)
        .then(() => {
          ElMessage({
            message: 'Успешно обновлено!',
            type: 'success'
          })
        })
        .catch((e: any) => {
          console.log(e)
        })
      await this.getMyIdUser(id)
    },

    async getMyIdUserLogs(id: number) {
      await apiGetMyIdUserLogsList(id, this.currentUserLogs.params)
        .then((res) => {
          this.currentUserLogs.data = res.data.data
          this.currentUserLogs.count = res.data.count
        })
        .catch((e: any) => {
          console.log(e)
        })
    },

    clearParams() {
      this.params = {
        page: 1,
        page_size: 20,
        phone_number: '',
        search: '',
        start_date: '',
        end_date: '',
        status: null,
        register_type: RegisterType.MyID,
        only_fail: false
      }
    }
  }
})

export function useMyIdUsersStoreWithOut() {
  return useMyIdUsersStore()
}
