<template>
  <div class="dropdown" :class="{ collapsed: active }">
    <a @click="toggle" class="nav-link menu-link">
      <span>
        <i :class="dropdownList.icon" class="fa-fw fa-light"></i>
        <span>{{ dropdownList.name }}</span>
      </span>
      <i class="fa-light fa-chevron-right"></i>
    </a>
    <ul class="menu-dropdown">
      <li
        class="dropdown-item"
        v-for="(item, index) in dropdownList.list"
        :key="index"
      >
        <customLink classList="dropdown-link" :to="item.to" :name="item.name" />
      </li>
    </ul>
  </div>
</template>

<script>
import customLink from "@/components/basics/customLink";

export default {
  name: "AppDropdown",
  components: {
    customLink,
  },
  props: {
    dropdownList: {
      type: Object,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

//
<style lang="scss" scoped>
@import "./index.scss";
</style>
