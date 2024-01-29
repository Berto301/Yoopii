<script setup>
import ButtonLeft from "../../../components/icons/ButtonLeft.vue";
import IconNotification from "../../../components/icons/IconNotification.vue";
import IconMessage from "../../../components/icons/IconMessage.vue";
import Menu from "./subCompononents/Menu.vue"
import Notification from "./subCompononents/Notifications.vue"
</script>
<template>
  <div class="flex justify-between items-center px-6 py-7 w-full bg-white rounded-lg shadow-lg">
    <div class="w-10 h-10">
      <ButtonLeft />
    </div>
    <div class="flex items-center justify-between space-x-10">
      
      <Notification/>
      <div class="w-10 h-10">
        <IconMessage />
      </div>
      <Menu/>
    </div>
  </div>
</template>
