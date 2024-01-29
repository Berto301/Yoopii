<script setup>
import Agent from "../../../../assets/images/agent.jpg";
</script>
<template>
  <div class="w-1/2 bg-white rounded-md shadow-lg p-2">
    <div
      class="bg-gray-300 px-2 py-3 text-lightbrown text-lg font-bold flex items-center justify-start space-x-4 rounded-md"
    >
      <div class="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
        <img :src="Agent" class="bg-cover w-full h-full" />
      </div>
      <div class="flex flex-col space-y-1"> 
        <span>Chat with Roberto</span>
        <span class="font-normal text-xs">1400 messages</span>
      </div>
    </div>
  </div>
</template>
