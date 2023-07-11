<template>
  <a v-if="isExternalLink" :href="to" target="_blank">
    <span>{{ name }}</span>
  </a>
  <router-link v-else :to="to" :class="classList">
    <i v-if="showIcon" :class="icon" class="fa-fw fa-light"></i>
    <span>{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: "customLink",
  props: {
    classList: {
      type: String,
      default: () => {
        return "";
      },
    },
    to: {
      type: String,
      default: () => {
        return "";
      },
    },
    name: {
      type: String,
      default: () => {
        return "";
      },
    },
    showIcon: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    icon: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  computed: {
    isExternalLink() {
      return typeof this.to === "string" && this.to.startsWith("http");
    },
  },
};
</script>

<style></style>
