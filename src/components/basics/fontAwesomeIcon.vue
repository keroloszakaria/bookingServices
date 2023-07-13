<template>
  <i :class="icon" class="fa-fw fa-light"></i>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  icon: String,
});
</script>

<style lang="scss" scoped></style>
