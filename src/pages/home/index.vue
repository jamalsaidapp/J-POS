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

<!--    <q-card v-ripple class="q-mt-sm q-card-fix">
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
    </q-card>-->
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px"
      icon="explore"
      v-model="isTimerOpen"
      header-class="bg-primary text-white flex justify-between no-q-focus"
      expand-icon-class="text-white"
    >
      <template #header >
          <div class="mt-auto" style="font-size: 18px">
            <q-icon name="alarm_on" size="30px" class="mr-2"></q-icon>
            <span >Shift en Cour</span>
            <span class="ml-4">{{timer.hours}}:{{timer.minutes}}:{{timer.seconds}}</span>
          </div>
      </template>
      <q-card>
        <q-card-section>
          <q-item-label class="q-mb-sm flex justify-between" lines="1">
            <span>Commancer à :</span>
            <q-badge color="secondary">23:14</q-badge>
          </q-item-label>
          <q-item-label class="q-mb-sm flex justify-between" lines="1">
            <span>POS :</span>
            <q-badge color="secondary">MARJANE FES AGDAL</q-badge>
          </q-item-label>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-card v-ripple class="q-mt-sm q-card-fix">
      <q-card-section class="flex flex-center">
          <q-img class="q-mb-sm" src="/src/assets/planning.jpg"></q-img>
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
    icon: 'assignment',
    color: 'teal',
    textColor: 'white'
  },
])

import {  watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';

const time = new Date();
const isTimerOpen = ref(true);
time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
const timer = useTimer(time);
const restartFive = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  timer.restart(time);
}
onMounted(() => {
  watchEffect(async () => {
    if(timer.isExpired.value) {
      console.warn('IsExpired')
    }
  })
})


</script>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>

</style>
