<template>
  <q-layout view="lHh Lpr lFf" style="background: #f7f7f7;">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          {{pageTitle}}
        </q-toolbar-title>

        <q-btn dense flat color="wight" round icon="notifications">
          <q-badge rounded  color="red" floating>4</q-badge>
        </q-btn>
        <q-btn flat round dense icon="more_vert"  class="q-ml-md" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-img class="absolute-top" src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" style="height: 100px">
        <div class="flex flex-center bg-transparent">
          <q-avatar size="70px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="">
          </q-avatar>
          <div class="q-ml-md" style="display: grid">
            <span>JAMAL SAID</span>
            <small>@admin</small>
          </div>
        </div>
      </q-img>
      <q-scroll-area style="height: calc(100% - 100px); margin-top: 100px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item :to="item.to" exact clickable v-ripple v-for="(item, index) of NavigationList" :key="index">
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>

            <q-item-section>
              {{ item.title }}
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="logout" style="position: absolute;bottom: 0; width: 100%;">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              Se Déconnecter
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>

import {ref, watch} from 'vue'
import {useRouter, useRoute} from "vue-router";
import MenuItems from "src/navigation/MenuItems";
const router = useRouter()
const route = useRoute()

const pageTitle = ref( route.meta.pageTitle ?? '')
const leftDrawerOpen = ref(false)
const NavigationList = ref([...MenuItems])


const logout = () => {
  localStorage.removeItem(('logged'))
  localStorage.removeItem(('username'))
  router.push('/login')
}

watch(route, (rt) => {
  pageTitle.value = rt.meta.pageTitle ?? ''
})


</script>

<script>

export default {
  name: 'MainLayout',
}
</script>
