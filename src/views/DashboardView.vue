<template>
  <v-layout class="dashboard">
    <AdminSidebar />
    <router-view v-slot="{ Component }">
      <Transition name="scale" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </v-layout>
</template>

<script setup>
import AdminSidebar from "@/components/core/AdminSidebar.vue";

import { onBeforeMount } from "vue";
import { useAuthStore } from "@/store/auth";
const auth = useAuthStore();
console.log(auth.user);
onBeforeMount(() => {
  auth.userProfile();
});
</script>
