// import { defineStore } from 'pinia'
// import { cloneDeep } from 'lodash-es'
// import {
//   apiManualUsersList,
//   apiManualUser,
//   apiChangeManualUserStatus,
//   apiChangeSimType,
//   apiCheckPayment,
//   apiGetManualUserLogs,
//   apiUpdateUser,
//   apiTakeToWork,
//   apiUserImg,
//   apiUserDocument
// } from '~/services/modules/users/manual'
//
// import {
//   defaultUsersList,
//   defaultCurrentUser,
//   defaultUserLogs,
//   defaultUsersDocument
// } from '~/core/consts/users'
//
// export interface IManualUsers {
//   loading: boolean
//   count: number
//   usersList: IUsersList[]
//   currentUser: IUsersList
//   userLogs: IUserLogs[]
//   userDocument: IUserDocument
//   params: {
//     phone_number?: string
//     search?: string
//     page?: number
//     page_size?: number
//     start_date?: string
//     end_date?: string
//     register_type?: number | null
//     status?: number | null
//     only_fail?: boolean
//   }
//   currentUserLogs: {
//     data: []
//     count: number
//     loading: boolean
//     params: {
//       page: number
//       page_size: number
//     }
//   }
// }
//
// export const useManualUsersStore = defineStore({
//   id: 'usersManual',
//   state: (): IManualUsers => ({
//     loading: false,
//     count: 0,
//     usersList: cloneDeep(defaultUsersList as IUsersList[]),
//     currentUser: cloneDeep(defaultCurrentUser as IUsersList),
//     userLogs: cloneDeep(defaultUserLogs as IUserLogs[]),
//     userDocument: cloneDeep(defaultUsersDocument as IUserDocument),
//     params: {
//       phone_number: '',
//       search: '',
//       page: 1,
//       page_size: 20,
//       start_date: '',
//       end_date: '',
//       register_type: null,
//       status: null,
//       only_fail: false
//     },
//     currentUserLogs: {
//       data: [],
//       count: 0,
//       loading: false,
//       params: {
//         page: 1,
//         page_size: 20
//       }
//     }
//   }),
//   getters: {},
//   actions: {
//     async getManualUsersList(): Promise<void> {
//       try {
//         this.loading = true
//         const res = await apiManualUsersList(this.params)
//         this.usersList = res.data.data
//         this.count = res.data.count
//
//         this.loading = false
//       } catch (error) {
//         this.loading = false
//         console.error(error)
//       }
//     },
//
//     async getManualUser(id: number) {
//       await apiManualUser(id)
//         .then(async (res) => {
//           this.currentUser = res.data
//
//           this.currentUser.document_back = await this.getUserImg(
//             this.currentUser.document_back?.replace('users_service/', '')
//           )
//           this.currentUser.document_front = await this.getUserImg(
//             this.currentUser.document_front?.replace('users_service/', '')
//           )
//           this.currentUser.selfie = await this.getUserImg(
//             this.currentUser.selfie?.replace('users_service/', '')
//           )
//           this.currentUser.sign = await this.getUserImg(
//             this.currentUser.sign?.replace('users_service/', '')
//           )
//         })
//         .catch((e: any) => {
//           console.log(e)
//         })
//     },
//
//     async changeSimType(id: number, form: any) {
//       await apiChangeSimType(id, form)
//         .then((res) => {
//           if (res.data.has_error === true) {
//             ElMessage({
//               message: res.data.message,
//               type: 'error'
//             })
//           } else {
//             ElMessage({
//               message: 'Тип SIM карты успешно изменен!',
//               type: 'success'
//             })
//           }
//         })
//         .catch((e: any) => {
//           console.log(e)
//         })
//       await this.getManualUser(id)
//     },
//
//     async updateUser(id: number, form?: any) {
//       await apiUpdateUser(id, form)
//         .then(() => {
//           ElMessage({
//             message: 'Успешно обновлено!',
//             type: 'success'
//           })
//         })
//         .catch((e: any) => {
//           console.log(e)
//         })
//       await this.getManualUser(id)
//     },
//
//     async checkPayment(id: number) {
//       await apiCheckPayment(id)
//         .then(() => {
//           ElMessage({
//             message: 'Успешно проверка оплаты!',
//             type: 'success'
//           })
//         })
//         .catch((e: any) => {
//           ElMessage({
//             type: 'error',
//             message: `${e.status} ${e.statusText}`
//           })
//           console.log(e)
//         })
//     },
//
//     async changeManualUserStatus(id: number, form?: any) {
//       await apiChangeManualUserStatus(id, form)
//         .then(() => {
//           ElMessage({
//             message: 'Статус изменен!',
//             type: 'success'
//           })
//         })
//         .catch((e: any) => {
//           console.log(e)
//         })
//       await this.getManualUser(id)
//     },
//
//     async getUserImg(fileName: string) {
//       try {
//         const res = await apiUserImg(fileName)
//         return res.data.url
//       } catch (error) {
//         console.error(error)
//       }
//     },
//
//     async takeToWork(id: number) {
//       await apiTakeToWork(id)
//         .then(() => {
//           ElMessage({
//             message: 'Успешно!',
//             type: 'success'
//           })
//         })
//         .catch((e: any) => {
//           console.log(e)
//         })
//     },
//
//     async getManualUserLogs(id: number) {
//       await apiGetManualUserLogs(id, this.currentUserLogs.params)
//         .then((res) => {
//           this.currentUserLogs.data = res.data
//           this.currentUserLogs.count = res.data.length
//         })
//         .catch((e: any) => {
//           console.log(e)
//         })
//     },
//     async getUserDocument(id: number) {
//       await apiUserDocument(id)
//         .then((res) => {
//           this.userDocument = res.data
//         })
//         .catch((e: any) => {
//           console.log(e)
//         })
//     },
//
//     clearParams() {
//       this.params = {
//         page: 1,
//         page_size: 20,
//         phone_number: '',
//         search: '',
//         start_date: '',
//         end_date: '',
//         status: null,
//         only_fail: false
//       }
//     },
//
//     clearLogsParams() {
//       this.currentUserLogs.params = {
//         page: 1,
//         page_size: 20
//       }
//     }
//   }
// })
//
// export function useManualUsersStoreWithOut() {
//   return useManualUsersStore()
// }
