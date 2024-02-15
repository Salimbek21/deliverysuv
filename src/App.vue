<script setup lang="ts">
const router = useRouter()
onBeforeMount(async () => {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    await router.push('/login')
  }
})
</script>

<template>
  <div v-if="router.currentRoute.value.path !== '/login'" class="wrapper">
    <TheSidebar />
    <div class="content">
      <RouterView />
    </div>
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<style>
.wrapper {
  height: 100vh;
}

.content {
  position: relative;
  margin-left: 256px;
  padding: 40px 20px 20px;
  transition: all 0.2s linear;
  z-index: 10;
}

body.sideBarClose .content {
  margin-left: 96px;
}
</style>
