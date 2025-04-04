import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    cityData: null,
    userToken: null,
  }),
  actions: {
    setCityData(data) {
      this.cityData = data;
    },
    setUserToken(token) {
      this.userToken = token;
    },
  },
});
