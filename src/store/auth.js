import { defineStore } from "pinia";
import { httpRequest } from "@/services/api";
import router from "@/router";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {},
  }),
  getters: {},
  actions: {
    async userLogin(payload) {
      console.log("payload", payload);
      await httpRequest("system/login", { method: "POST", data: payload })
        .then((data) => {
          console.log(data);
          window.$cookies.set("token", data.token);
          this.user = data.profile;
          router.replace("/");
        })
        .catch((error) => {
          console.log("s", error.response);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    async userProfile() {
      await httpRequest("system/auth/profile", { method: "GET" })
        .then((data) => {
          this.user = data;
        })
        .catch((error) => {
          console.log("s", error.response);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
