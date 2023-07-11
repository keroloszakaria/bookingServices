import { defineStore } from "pinia";
import { httpRequest } from "@/services/api";

export const useChooseUsStore = defineStore("chooseUs", {
  state: () => ({
    isLoading: true,
    chooseUs: [],
  }),
  getters: {},
  actions: {
    async chooseUsList() {
      await httpRequest("system/choose-us", { method: "GET" })
        .then((data) => {
          this.chooseUs = data;
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
});
