import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// Infinite Loading
// import InfiniteLoading from "v3-infinite-loading";

const vuetify = createVuetify({
  components,
  directives,
});
// Import
import VueCookies from "vue-cookies";

// Import Scss
import "@/scss/main.scss";

// Font Awesome Pro
import "@/assets/fontawesome/css/all.css";

//
import "@/js";

// Vue Meta
// import { createMetaManager } from "vue-meta";

// i18n for Multi Languages
import i18n from "./i18n";

const app = createApp(App).use(i18n);
app
  .use(vuetify)
  .use(VueAxios, axios)
  .use(createPinia())
  .use(router)
  .use(VueCookies)
  .mount("#app");
// .use(createMetaManager())
