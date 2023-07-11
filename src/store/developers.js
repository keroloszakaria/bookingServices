import { defineStore } from "pinia";
import { httpRequest } from "@/services/api";
import { successfulAdded, errorAdded } from "@/plugin/sweetAlert";

export const useDevelopersStore = defineStore("developers", {
  state: () => ({
    isLoading: true,
    developers: [],
    hasNext: false,
    dialog: false,
  }),
  getters: {
    getDialog: (state) => state.dialog,
  },
  mutations: {
    SET_ALL_DEVELOPERS: (payload) => {
      let findIndex = this.developers.findIndex(
        (developer) => developer.id == payload
      );
      console.log(findIndex);
    },
  },
  actions: {
    async developersList() {
      this.isLoading = true;
      await httpRequest("system/developers", { method: "GET" })
        .then((data) => {
          this.developers = data.data;
          this.hasNext = data.next;
        })
        .catch((error) => {
          console.log(error.response);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    async loadingMoreDeveloper(payload) {
      await httpRequest(`system/developers?page=${payload}`, {
        method: "GET",
      })
        .then((data) => {
          this.developers.push(...data.data);
          this.hasNext = data.next;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    async addDeveloper(payload) {
      await httpRequest(`system/developers`, {
        method: "POST",

        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((data) => {
          this.developers.push(data.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    async editDeveloper(payload) {
      await httpRequest(`system/developers/${payload.id}`, {
        method: "PUT",
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((data) => {
          // this.developers.push(data);
          console.log(data.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },

    async deleteDeveloper(payload) {
      await httpRequest(`system/developers/${payload}`, {
        method: "DELETE",
      })
        .then((data) => {
          successfulAdded(data.data.message);
          this.developers = this.developers.filter(
            (developer) => developer.id != payload
          );
        })
        .catch((error) => {
          console.log(error.response);
          errorAdded(error.response.data.message);
        });
    },
  },
});
