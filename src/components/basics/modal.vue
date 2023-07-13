<template>
  <v-dialog v-model="dialog" width="auto">
    <template v-slot:activator="{ props }">
      <v-btn class="btn" v-bind="props"> {{ buttonName }} </v-btn>
    </template>

    <v-card>
      <slot></slot>
      <v-btn class="icon close" @click="dialog = false">
        <i class="fa fa-times"></i>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, ref } from "vue";
defineProps({
  buttonName: String,
});
const dialog = ref(false);
</script>

<style></style>
