<template>
  <v-btn @click="dialog = false" v-if="isModal" :type="type" :class="classList">
    <span v-if="!isLoading">
      <slot></slot>
      hi
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

<script>
export default {
  name: "cutom-button",
  props: {
    classList: {
      type: String,
      default: () => {
        return "";
      },
    },
    type: {
      type: String,
      default: () => {
        return "";
      },
    },
    isModal: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    // name: {
    //   type: String,
    //   default: () => {
    //     return "";
    //   },
    // },
    isLoading: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
};
</script>

<style></style>
