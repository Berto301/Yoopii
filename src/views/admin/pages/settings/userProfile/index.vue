<script setup>
import Agent from "@/assets/images/agent.jpg";
import IconCamera from "@/components/icons/IconCamera.vue";
import Button from "@/components/designSystem/Button.vue";
import Licence from "./Licence.vue";
import Profile from "./Profile.vue";
import AccountSettings from "./AccountSettings.vue";
import SocialProfile from "./SocialProfil.vue";
import PortFolio from "./PortFolio.vue";
import Experience from "./Experience.vue";
import Biography from "./Biography.vue";
import Others from "./Others.vue";
import { useErrors, useUser,useNotification } from "@/stores";
import { onBeforeMount, ref } from "vue";
import Modal from "@/components/designSystem/Modal.vue";
import Badge from "@/components/designSystem/Badge.vue"
import { useRouter } from "vue-router";

let authData = ref({
      name:"",
      firstname:"",
      type:"",
      profesionnalName:"",
      gender:"",
      adress:"",
      dateOfBirth: new Date(),
      email:"",
      CIN:"",
      phone:"",
      NIF_STAT:"",
      deliveryPlace:"",
      deliveryDate:new Date(),
      googleSynchronisation:"-",
      facebookSynchronisation:"-",
      language:"en",
      "linkedin" : "",
      "facebook" : "",
      "whatsapp" : "",
      "portfolio" : "",
      "siteweb" : "",
      "note" : "",
});

const userStore =useUser()
const {showError,showSuccess} = useNotification()
const openModalDelete = ref(false)
const errors = useErrors()
const router = useRouter();
 onBeforeMount(async()=> {
  if(userStore.currentUser) authData.value = userStore.currentUser 
  errors.$reset();
 })

 const onUpdateAuth = async ()=> {
  try {    
    errors.$reset();
    await userStore.updateUserData({
       _id:localStorage.getItem("authId"),
       enabled:true,
       name:authData.value.name,
       firstname:authData.value.firstname,
       type:authData.value.type,
       profesionnalName:authData.value.profesionnalName,
       gender:authData.value.gender?._id || authData.value.gender || "" ,
       adress:authData.value.adress,
       dateOfBirth:authData.value.dateOfBirth,
       email:authData.value.email,
       CIN:authData.value.CIN,
       phone:authData.value.phone,
       NIF_STAT:authData.value.NIF_STAT,
       deliveryPlace:authData.value.deliveryPlace,
       deliveryPlace:authData.value.deliveryPlace,
       deliveryDate: authData.value.deliveryDate,
       googleSynchronisation:authData.value.googleSynchronisation,
       facebookSynchronisation:authData.value.facebookSynchronisation,
       language:authData.value.language?._id || "en",
       "linkedin" : authData.value.linkedin,
        "facebook" :authData.value.facebook,
        "whatsapp" : authData.value.whatsapp,
        "portfolio" : authData.value.portfolio,
        "siteweb" : authData.value.siteweb,
        "note" : authData.value.note,
        role:authData.value.role || 'Super Admin',
        permissions:authData.value.permissions
      })
     if(errors.fields?.input?.name || errors.fields?.input?.email){
       showError("An error occured!");
     }else{
       showSuccess("User updated succesfully");
     }
  } catch (error) {
    console.log("Error on update auth - Global:",error)
  }
 }

 const onClickDelete = ()=> openModalDelete.value = !openModalDelete.value

 const onDelete = async ()=> {
  try {
    await  userStore.deleteAgent(localStorage.getItem("authId"))
    localStorage.clear()
    router.push("/sign-in")
  } catch (error) {
     console.log(error)
  }
 }
</script>
<template>
  <div class="flex flex-col space-y-2">
    <div class="flex w-full space-x-2 bg-white px-2 py-3 rounded-md shadow-lg">
      <div class="w-1/3 flex items-center justify-center flex-col space-y-4">
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
        <Badge 
              :text="authData.role"
        />
      </div>
      <Profile :authData="authData"  :errors="errors" @update:authData="authData = $event"/>
    </div>
    <Licence :authData="authData"  @update:authData="authData = $event"/>

    <AccountSettings :authData="authData"  @update:authData="authData = $event" />

    <SocialProfile :authData="authData"  @update:authData="authData = $event"/>

    <PortFolio />
    <Experience />
    <Biography />
    <Others :authData="authData"  @update:authData="authData = $event" />
    <div class=" flex items-center space-x-2"> 
      <Button type="button" color="light" class="w-56 h-14" @click="onUpdateAuth">
          Update
      </Button>
      <Button type="button" color="danger" class="w-56 h-14" @click="onClickDelete">
          Delete Account
      </Button>
    </div>
    <Modal
    :isOpen="openModalDelete"
    submitText="Delete"
    submitColor="danger"
    @clickSave="onDelete"
    @clickCancel="onClickDelete"
  >
    <template #forms>
      <div class="text-blackgray text-2xl font-medium p-2"> 
           Are you sure to delete this account? 
      </div>
      <div class="text-blackgray text-base font-normal italic p-2">
        Delete this count, you will delete all informations according to it.
      </div>
    </template>
  </Modal>
  </div>
</template>
