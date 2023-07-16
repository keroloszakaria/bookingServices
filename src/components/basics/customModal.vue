<template>
  <v-dialog v-model="dialog" width="auto">
    <template v-slot:activator="{ props }">
      <v-btn type="button" :class="buttonClass" v-bind="props">
        <slot name="button"></slot>
      </v-btn>
    </template>

    <v-card>
      <slot name="content"></slot>
      <v-btn class="icon close" @click="dialog = false">
        <i class="fa fa-times"></i>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, ref } from "vue";
defineProps({
  buttonClass: String,
});
const dialog = ref(false);
</script>

<style></style>
