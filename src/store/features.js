import { defineStore } from "pinia";
import { httpRequest } from "@/services/api";

export const useFeaturesStore = defineStore("features", {
  state: () => ({
    isLoading: true,
    features: [],
  }),
  getters: {},
  actions: {
    async featuresList() {
      await httpRequest("system/features", { method: "GET" })
        .then((data) => {
          this.features = data;
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
