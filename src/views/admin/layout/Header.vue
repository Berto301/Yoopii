<script setup>
import ButtonLeft from "../../../components/icons/ButtonLeft.vue";
import IconNotification from "../../../components/icons/IconNotification.vue";
import IconMessage from "../../../components/icons/IconMessage.vue";
import Menu from "./subCompononents/Menu.vue"
import Notification from "./subCompononents/Notifications.vue"
defineProps({
  isCollapse:Boolean
})
const emit = defineEmits(['onClickCollapse']);
const onClick = ()=> emit("onClickCollapse")
</script>
<template>
  <div class="flex justify-between items-center px-6 py-7 w-full bg-white rounded-lg shadow-lg">
    <div :class="['w-10 h-10 cursor-pointer ', isCollapse ? 'rotate-0': 'rotate-180']"  @click="onClick">
      <ButtonLeft/>
    </div>
    <div class="flex items-center justify-between space-x-10">
      
      <Notification/>
      <router-link to="/admin/customers" class="w-10 h-10 hover:bg-transparent">
        <IconMessage />
      </router-link>
      <Menu/>
    </div>
  </div>
</template>
