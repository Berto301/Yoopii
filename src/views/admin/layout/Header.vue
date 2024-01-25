<script setup>
import ButtonLeft from "../../../components/icons/ButtonLeft.vue";
import IconNotification from "../../../components/icons/IconNotification.vue";
import IconMessage from "../../../components/icons/IconMessage.vue";
import Agent from "../../../assets/images/agent.jpg";
</script>
<template>
  <div class="flex justify-between items-center px-6 py-7 w-full bg-[#f7f0ed] rounded-lg shadow-lg">
    <div class="w-10 h-10">
      <ButtonLeft />
    </div>
    <div class="flex items-center justify-between space-x-10">
      <div class="w-10 h-10">
        <IconNotification />
      </div>
      <div class="w-10 h-10">
        <IconMessage />
      </div>
      <div
        class="shrink-0 w-10 h-10 rounded-full overflow-hidden shadow-lg border border-solid border-lightbrown"
      >
        <img :src="Agent" class="bg-cover w-full h-full" />
      </div>
    </div>
  </div>
</template>
