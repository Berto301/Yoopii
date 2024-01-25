<script setup>
import Agent from "../assets/images/agent.jpg";
import IconLinkedin from "./icons/IconLinkedin.vue"
import IconFacebook from "./icons/IconFacebook.vue"
import IconWhatsApp from "./icons/IconWhatsapp.vue"
defineProps({
  title: String,
  property: String,
});
</script>

<template>
  <div class="flex space-x-8">
    <div class="w-1/6 flex justify-end items-center">
      <div
        class="w-[8.688rem] h-[8.4rem] rounded-full overflow-hidden shadow-lg border border-solid border-lightbrown"
      >
        <img :src="Agent" class="bg-cover w-full h-full" />
      </div>
    </div>
    <div class="w-5/6 pr-[30%]">
      <div class="flex flex-col space-y-4">
        <span class="text-lg font-medium text-lightbrown">
          RATSIMANDRESY Hajatiana Roberto
        </span>
        <span class="text-sm font-normal text-blackgray">
          CEO && Founder && Fullstack Developper
        </span>
        <div class="flex justify-start items-center space-x-4">
          <div class="w-8 h-8">
            <IconLinkedin/>
          </div>

          <div class="w-8 h-8">
           <IconFacebook/>
          </div>

          <div class="w-5 h-5">
            <IconWhatsApp/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
