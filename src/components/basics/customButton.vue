<template>
  <v-btn @click="dialog = false" v-if="isModal" :type="type" :class="classList">
    <span v-if="!isLoading">
      <slot></slot>
    </span>
    <span v-else class="loader"></span>
  </v-btn>
  <v-btn v-else :type="type" :class="classList">
    <span v-if="!isLoading">
      <slot></slot>
    </span>
    <span v-else class="loader"></span>
  </v-btn>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  classList: String,
  type: String,
  isLoading: Boolean,
  isModal: Boolean,
});
</script>

<style></style>
