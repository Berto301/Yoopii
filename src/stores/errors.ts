import { defineStore } from "pinia";

export const useErrors = defineStore("errors", {
  state: () => ({
    message: null,
    category: null,
    fields: { input: {} },
  }),
});