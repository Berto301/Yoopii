import { defineStore } from 'pinia';
import { toast } from 'vue3-toastify';

export const useNotification = defineStore('message', () => {
    const showSuccess=(message:string)=>  toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    const showError=(message:string)=>  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    });
    return { showSuccess , showError}
  })
  