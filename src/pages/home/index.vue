<template>
  <div class="q-pa-sm">

    <q-card class="q-mb-sm q-card-fix">
      <q-card-section class="flex flex-center">
        <div class="q-ma-sm text-center" style="display: grid; width: 80px" v-for="(app,index) of apps" :key="index">
          <q-avatar v-ripple :icon="app.icon" size="80px" :color="app.color" :text-color="app.textColor"/>
          <span>{{ app.label }}</span>
        </div>
      </q-card-section>
    </q-card>

    <q-card v-ripple class="q-mt-sm q-card-fix">
      <q-card-section class="flex flex-center" style="padding: 10px;">
        <q-item clickable style="padding: unset; width: 100%">
          <q-item-section class="text-center" avatar top>
            <q-item-label class="q-mb-sm" lines="1">Shift En cour</q-item-label>
            <q-badge rounded outline color="blue">
              <q-item-label style="font-size: 14px" caption>Magasin 1</q-item-label>
            </q-badge>
          </q-item-section>

          <q-item-section class="text-center">
            <q-item-label class="q-mb-sm" lines="1">commancer à 23:14</q-item-label>
            <q-item-label style="font-size: 17px; font-weight: 900; letter-spacing: 8px" caption>00:10:12</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="navigate_next" color="primary"/>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>

    <q-card v-ripple class="q-mt-sm q-card-fix">
      <q-card-section class="flex flex-center">
          <q-img src="/src/assets/plan.jpg"></q-img>
        <p>Consulter vos horaires de travail, recevez des informations sur votre travail.</p>
      </q-card-section>
    </q-card>

  </div>
</template>

<script setup>
import {ref} from "vue";

const apps = ref([
  {
    label: 'Planning',
    icon: 'calendar_month',
    color: 'primary',
    textColor: 'white'
  },
  {
    label: 'Check In',
    icon: 'schedule',
    color: 'orange',
    textColor: 'white'
  },
  {
    label: 'Forms',
    icon: '',
    color: 'teal',
    textColor: 'white'
  },
])


</script>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>
