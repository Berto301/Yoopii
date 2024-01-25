<script setup>
import Agent from "../assets/images/agent.jpg";
import IconLinkedin from "./icons/IconLinkedin.vue"
import IconFacebook from "./icons/IconFacebook.vue"
import IconWhatsApp from "./icons/IconWhatsapp.vue"
defineProps({
  name: String,
  job: String,
});
</script>

<template>
  <div
    class="w-full shadow-xl bg-white rounded-lg flex flex-col justify-between space-y-4 mb-2 py-8 min-h-96"
  >
    <div
      :style="{ backgroundImage: 'url(' + Agent + ')' }"
      class="min-h-80 bg-cover"
    ></div>

    <div class="flex relative flex-col items-center justify-center space-y-2">
      <div class="absolute -top-8">
        <div class="flex justify-around items-center space-x-4">
          <div class="bg-white rounded-full p-1 shadow-lg">
            <div class="w-8 h-8">
              <IconLinkedin/>
            </div>
          </div>
          <div class="bg-white rounded-full p-1 shadow-lg">
            <div class="w-8 h-8">
              <IconFacebook/>
            </div>
          </div>
          <div class="bg-white rounded-full p-1 shadow-lg">
            <div class="w-5 h-5">
              <IconWhatsApp/>
            </div>
          </div>
        </div>
      </div>
      <span class="text-black text-lg font-medium"> {{ name }} </span>
      <span class="text-blackgray text-sm font-normal">
       {{ job }}
      </span>
    </div>
  </div>
</template>
