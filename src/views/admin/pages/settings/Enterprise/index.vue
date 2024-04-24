<script setup>
import Home from "@/assets/images/home.jpg";
import IconCamera from "@/components/icons/IconCamera.vue";
import Licence from "./Licence.vue";
import Profile from "./Profile.vue";
import SocialProfile from "./SocialProfil.vue";
import PortFolio from "./PortFolio.vue";
import Teams from "./Teams.vue";
import Biography from "./Biography.vue"
import Services from "./Services.vue"

import { useAgency } from "@/stores";
import { onBeforeMount, ref } from "vue";
const authAgency = ref({
  enterpiseName:"",
  enterpiseAdress:"",
  enterpisePhone:"",
  enterpiseEmail:"",
  enterpiseNIF_STAT:"",
  enterpiseDeliveryPlace:""
});

const agencyStore =useAgency()

 onBeforeMount(async()=> {
  if(agencyStore.currentAgency) authAgency.value = agencyStore.currentAgency
 })
</script>
<template>
  <div class="flex flex-col space-y-2">
    <div class="flex w-full space-x-2 bg-white px-2 py-3 rounded-md shadow-lg">
      <div class="w-1/3 flex items-center justify-center bg-gray-300 p-10">
        <div
          class="w-full  h-44 flex items-center justify-center relative"
        >
            <img :src="Home" class="bg-contain w-full h-full" />
          <div class="w-8 h-8 cursor-pointer absolute top-44 right-0">
            <IconCamera />
          </div>
        </div>
      </div>
      <Profile :authAgency="authAgency" />
    </div>
    <Licence :authAgency="authAgency" />
    <SocialProfile />
    <PortFolio />
    <Teams />
    <Biography />
    <Services/>
  </div>
</template>
