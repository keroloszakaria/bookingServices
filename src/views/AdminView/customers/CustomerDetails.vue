<template>
  <v-main class="dashboard__content">
    <div class="customerDetails">
      <div class="customerDetails__head">
        <div class="customerDetails__head__image">
          <img src="https://via.placeholder.com/350x150" alt="" />
        </div>
        <div class="customerDetails__head__info">
          <h6>kerolos zakaria</h6>
          <p>keroloszakaria2@gmail.com</p>
        </div>
      </div>
    </div>

    <v-card>
      <v-tabs center-active v-model="tab">
        <v-tab value="info">info</v-tab>
        <v-tab value="appointments">appointments</v-tab>
        <v-tab value="gift_certificate">gift certificate</v-tab>
        <v-tab value="payment">payment</v-tab>
        <v-tab value="reviews">reviews</v-tab>
        <v-tab value="journey">journey</v-tab>
        <v-tab value="notes">notes</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="info"> One </v-window-item>
          <v-window-item value="appointments"> Two </v-window-item>
          <v-window-item value="gift_certificate"> Three </v-window-item>
          <v-window-item value="payment"> Three </v-window-item>
          <v-window-item value="reviews"> Three </v-window-item>
          <v-window-item value="journey"> Three </v-window-item>
          <v-window-item value="notes"> Three </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
const tab = ref(null);
</script>

<style lang="scss" scoped></style>
