<script setup>
import Agent from "@/assets/images/agent.jpg";
import IconCamera from "@/components/icons/IconCamera.vue";
import Input from "@/components/designSystem/Input.vue";
import Licence from "./Licence.vue";
import Profile from "./Profile.vue";
import AccountSettings from "./AccountSettings.vue";
import SocialProfile from "./SocialProfil.vue";
import PortFolio from "./PortFolio.vue";
import Experience from "./Experience.vue";
import Biography from "./Biography.vue";
import Others from "./Others.vue";
</script>
<template>
  <div class="flex flex-col space-y-2">
    <div class="flex w-full space-x-2 bg-white px-2 py-3 rounded-md shadow-lg">
      <div class="w-1/3 flex items-center justify-center">
        <div
          class="w-60 bg-gray-300 h-60 flex items-center justify-center relative"
        >
          <div
            class="w-36 h-36 rounded-full bg-white overflow-hidden border border-solid border-lightbrown"
          >
            <img :src="Agent" class="bg-cover w-full h-full" />
          </div>
          <div class="w-8 h-8 cursor-pointer absolute top-36 right-10">
            <IconCamera />
          </div>
        </div>
      </div>
      <Profile />
    </div>
    <Licence />

    <AccountSettings />

    <SocialProfile />

    <PortFolio />
    <Experience />
    <Biography />
    <Others />
  </div>
</template>
