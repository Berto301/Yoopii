<script setup>
import Agent from "../../assets/images/agent.jpg";
import Dots from "../../assets/images/dots.png";
import Teams from "../../components/Teams.vue"
defineProps({
  ref: String
})
</script>

<template>
  <div class="py-8 flex" id="#section_about" :ref="ref">
    <div class="w-1/5"></div>
    <div class="w-3/5 px-4">
      <div class="w-full">
        <h1 class="text-black font-semibold text-2xl">About us</h1>
        <h5 class="text-blackgray font-normal text-sm">
          We're developpers from Antsirabe and passionnate all the IT
          Technology.
        </h5>
      </div>
      <div class="flex flex-col space-y-4"> 
        <Teams/>
        <Teams/>
      </div>
     
    </div>
    <div class="w-1/5" :style="{ backgroundImage: 'url(' + Dots + ')' }"></div>
  </div>
</template>
