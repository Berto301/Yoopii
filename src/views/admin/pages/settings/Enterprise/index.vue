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
import Button from "@/components/designSystem/Button.vue";

import { useAgency, useErrors, useNotification } from "@/stores";
import { onBeforeMount, ref } from "vue";
const authAgency = ref({
  enterpiseName:"",
  enterpiseAdress:"",
  enterpisePhone:"",
  enterpiseEmail:"",
  enterpiseNIF_STAT:"",
  enterpiseDeliveryPlace:"",
  enterpiseDeliveryDate: new Date(),
  "linkedin" : "",
  "facebook" : "",
  "whatsapp" : "",
  services:[
          "vente",
          "location"
        ]
});

const agencyStore =useAgency()
const {showError,showSuccess} = useNotification()
const errors = useErrors()
 onBeforeMount(async()=> {
  if(agencyStore.currentAgency) authAgency.value = agencyStore.currentAgency
 })
 const onUpdateAgency = async()=>{
  errors.$reset();
    await agencyStore.updateAgencyData({
       _id:localStorage.getItem("enterpriseId"),
       enterpiseName:authAgency.value.enterpiseName,
       enterpiseAdress:authAgency.value.enterpiseAdress,
       enterpisePhone:authAgency.value.enterpisePhone,
       enterpiseEmail:authAgency.value.enterpiseEmail,
       enterpiseNIF_STAT:authAgency.value.enterpiseNIF_STAT,
       enterpiseDeliveryPlace:authAgency.value.enterpiseDeliveryPlace,
       enterpiseDeliveryDate:authAgency.value.enterpiseDeliveryDate,
       "linkedin" : authAgency.value.linkedin,
      "facebook" :authAgency.value.facebook,
      "whatsapp" : authAgency.value.whatsapp,
      services: authAgency.value.services || [
      "vente",
      "location"
      ]
      })
     if(errors.fields?.input?.enterpiseName || errors.fields?.input?.enterpiseEmail){
       showError("An error occured!");
     }else{
       showSuccess("Agency updated succesfully");
     }
 }
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
      <Profile :authAgency="authAgency" :errors="errors" @update:authAgency="authAgency = $event" />
    </div>
    <Licence :authAgency="authAgency" @update:authAgency="authAgency = $event"/>
    <SocialProfile :authAgency="authAgency" @update:authAgency="authAgency = $event" />
    <PortFolio />
    <Teams />
    <Biography />
    <Services :authAgency="authAgency" @update:authAgency="authAgency = $event"/>
    <div class=" flex items-center space-x-2"> 
      <Button type="button" color="light" class="w-56 h-14" @click="onUpdateAgency">
          Update
      </Button>
      <Button type="button" color="danger" class="w-56 h-14" @click="onUpdateAuth">
          Delete Agency Account
      </Button>
    </div>
  </div>
</template>
