<script setup lang="ts">
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const sideBarClose = ref(false)

function toggleSidebar() {
  sideBarClose.value = !sideBarClose.value
  document.body.classList.toggle('sideBarClose')
}

function logOut() {
  ElMessageBox.confirm('Вы действительно хотите выйти из своего аккаунта? ', 'Выйти из аккаунта?', {
    confirmButtonText: 'Выйти',
    cancelButtonText: 'Отменить',
    type: 'warning',
    icon: 'i',
    center: true,
    customClass: 'oq-message-warning-box'
  })
    .then(() => {
      localStorage.clear()
      router.push('/login')
    })
    .catch((e) => {
      console.log(e)
    })
}

// <button class="icon-btn" @click="toggleDark()"> </button>
</script>

<template>
  <aside class="sideBar">
    <div class="sideBarLogo">
      <RouterLink to="/">
        <div class="logo"></div>
      </RouterLink>
      <button class="toggleSidebar" @click="toggleSidebar" />
    </div>
    <TheMenu />
    <button class="logOutBtn" @click="logOut">Выйти</button>
  </aside>
</template>

<style>
.sideBar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 256px;
  background-color: #fff;
  height: 100vh;
  padding: 20px;
  transition: all 0.2s linear;
  border-right: 2px solid #f5f5f5;
  z-index: 11;
}

.sideBarLogo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
}

.sideBarLogo .logo {
  width: 170px;
  height: 36px;
  background: url('/src/assets/logoText.svg') no-repeat center / contain;
}

.toggleSidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  flex: 0 0 24px;
  border-radius: 50%;
  background-color: #f5f5f5;
  transition: all 0.2s linear;
}

.toggleSidebar::before {
  content: '';
  width: 12px;
  height: 12px;
  mask: url('/src/assets/icons/left.svg') no-repeat center;
  -webkit-mask: url('/src/assets/icons/left.svg') no-repeat center;
  background-color: #000000;
  transition: all 0.2s linear;
}

.logOutBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #000000;
  transition: all 0.2s linear;
  margin-top: auto;
}

.logOutBtn::after {
  content: '';
  width: 26px;
  height: 26px;
  flex: 0 0 26px;
  margin-left: 10px;
  background-color: #000;
  -webkit-mask: url('/src/assets/icons/logout.svg') no-repeat center / 24px;
  mask: url('/src/assets/icons/logout.svg') no-repeat center / 24px;
  transition: all 0.2s linear;
}

.logOutBtn:hover {
  color: #fb232c;
  background-color: #f5e0e0;
  border: 1px solid #f5e0e0;
}

.logOutBtn:hover::after {
  background-color: #fb232c !important;
}

body.sideBarClose .sideBar {
  padding: 24px;
}

body.sideBarClose .sideBarLogo {
  flex-direction: column;
}

body.sideBarClose .sideBarLogo .logo {
  width: 36px;
  height: 36px;
  background-image: url('/src/assets/logoBlack.svg');
  margin-bottom: 24px;
}

body.sideBarClose .toggleSidebar::before {
  transform: rotate(180deg);
}

body.sideBarClose .sideBar {
  width: 96px;
  flex: 0 0 96px;
}

body.sideBarClose .logOutBtn {
  font-size: 0;
  padding: 10px;
  border: 0;
}

body.sideBarClose .logOutBtn::after {
  margin-left: 0;
  background-color: #8d8d8d;
}
</style>
