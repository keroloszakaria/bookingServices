<template>
  <a v-if="isExternalLink()" :href="props.to" target="_blank">
    <span>{{ props.name }}</span>
  </a>
  <router-link v-else :to="props.to" :class="props.classList">
    <fontAwesomeIcon v-if="props.showIcon" :icon="props.icon" />
    <span>{{ props.name }}</span>
  </router-link>
</template>

<script setup>
import fontAwesomeIcon from "@/components/basics/fontAwesomeIcon";

import { defineProps, ref } from "vue";
const props = defineProps({
  classList: String,
  to: String,
  name: String,
  showIcon: Boolean,
  icon: String,
});

const link = ref(props.to);

const isExternalLink = () => {
  return typeof link.value === "string" && link.value.startsWith("http");
};
</script>

<style></style>
