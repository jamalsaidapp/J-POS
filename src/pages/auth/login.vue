<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <div class="q-pa-sm" style="max-width: 400px">
          <div class="text-center">
            <q-img src="/src/assets/login.jpg"/>
          </div>

          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="phone"
              label="Téléphone"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Merci de saisi Le Numéro Téléphone']"
            />

            <div class="text-center">
              <q-btn outline type="submit" rounded label="Se Connecter" :loading="loading" color="primary" />
            </div>
          </q-form>

        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: 'loginPage'
}
</script>
<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";

const loading = ref(false)
const phone = ref('0600000000')
const router = useRouter()
const onReset = () => {
  console.log('reset')
}

function onSubmit () {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    localStorage.setItem('logged', 'true')
    localStorage.setItem('username', phone.value)
    router.replace('/')
  }, 1000)
}
</script>

<style scoped>

</style>
