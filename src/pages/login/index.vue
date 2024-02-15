<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

const store = useLoginStoreWithOut()

interface ILoginForm {
  username: string
  password: string
}

const router = useRouter()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<ILoginForm>({
  username: '',
  password: ''
})

const rules = reactive<FormRules<ILoginForm>>({
  username: [{ required: true, message: 'Логин обязательно', trigger: 'blur' }],
  password: [{ required: true, message: 'Пароль обязательно', trigger: 'change' }]
})

function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      await store.login(ruleForm)
    } else {
      return false
    }
  })
}

function forceLower(event: any) {
  ruleForm.username = event.target.value.toLowerCase()
}

onMounted(() => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) router.push('/')
})
</script>

<template>
  <div class="login">
    <div class="loginLogo" />
    <div class="loginBox">
      <div class="loginBoxWelcome">Добро пожаловать!</div>

      <div class="loginBoxSystemText">Войти в систему</div>

      <ElForm
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-position="top"
        class="w-full max-w-[425px]"
      >
        <ElFormItem class="!mb-[20px]" label="Логин" prop="username">
          <TheInput
            v-model="ruleForm.username"
            class="gray"
            placeholder="admin"
            type="text"
            autocomplete="on"
            @keyup="forceLower"
          />
        </ElFormItem>

        <ElFormItem class="!mb-[30px]" label="Пароль" prop="password">
          <TheInput
            v-model="ruleForm.password"
            class="gray"
            placeholder="••••••••••••"
            type="password"
            autocomplete="on"
            show-password
            @keydown.enter="submitForm(ruleFormRef)"
          />
        </ElFormItem>

        <ElFormItem>
          <TheButton
            class="w-full"
            type="primary"
            @click="submitForm(ruleFormRef)"
            :loading="store.loading"
          >
            Войти
          </TheButton>
        </ElFormItem>
      </ElForm>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.loginLogo {
  background: url('/src/assets/logoText.svg') no-repeat center / 100%;
  width: 250px;
  height: 70px;
  margin-bottom: 100px;
}

.loginBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.loginBoxWelcome {
  color: #000000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 40px;
  line-height: 25px;
}

.loginBoxSystemText {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  margin-bottom: 40px;
}

@media screen and (max-width: 991px) {
  .login {
    padding: 24px;
  }

  .loginLogo {
    margin-bottom: 50px;
  }
}
</style>
