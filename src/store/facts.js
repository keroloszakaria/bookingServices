import { defineStore } from "pinia";
import { httpRequest } from "@/services/api";

export const useFactsStore = defineStore("facts", {
  state: () => ({
    isLoading: true,
    facts: [],
  }),
  getters: {},
  actions: {
    async factsList() {
      await httpRequest("system/facts", { method: "GET" })
        .then((data) => {
          this.facts = data;
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
