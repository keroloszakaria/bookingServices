<template>
  <v-app-bar
    class="navbar v-toolbar--absolute"
    density="compact"
    :order="order"
  >
    <!-- <v-toolbar-side-icon> </v-toolbar-side-icon> -->
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
    </template> -->

    <v-app-bar-title>
      <v-img
        :width="120"
        aspect-ratio="1/1"
        :src="require('@/assets/logo.png')"
      ></v-img>
    </v-app-bar-title>

    <div class="switch">
      <input
        id="switch"
        class="switch__input"
        @change="toggleTheme()"
        v-model="isDark"
        type="checkbox"
      />
      <label class="switch__label" for="switch"></label>
    </div>
    <!-- 
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template> -->
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    order: 1,
    isDark: true,
  }),
  methods: {
    toggleTheme() {
      let htmlTag = document.documentElement;
      if (this.isDark) htmlTag.setAttribute("data-theme", "dark");
      else htmlTag.setAttribute("data-theme", "light");
    },
  },

  mounted() {
    this.toggleTheme();
  },
};
</script>
<style></style>
