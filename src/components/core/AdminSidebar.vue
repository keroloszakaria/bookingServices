<template>
  <v-navigation-drawer rail v-model="drawer">
    <ul class="menu">
      <li class="nav-item" v-for="(link, index) in asideLinks" :key="index">
        <customLink
          :showIcon="true"
          :icon="link.icon"
          classList="nav-link"
          :to="link.to"
        />
      </li>
    </ul>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import customLink from "@/components/basics/customLink";

import { asideLinks } from "@/data/aside";

const drawer = ref(true);
</script>

<style lang="scss" scoped></style>
