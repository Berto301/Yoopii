<script setup>
import Disclosure from "@/components/Disclosure.vue";
import Label from "@/components/designSystem/Label.vue";
import ListBox from "@/components/designSystem/ListBox.vue";
import Button from "@/components/designSystem/Button.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconGmail from "@/components/icons/IconGmail.vue";
import InputsValidation from "@/components/designSystem/Validation.vue";
import Input from "@/components/designSystem/Input.vue";
import { defineProps, ref, watch, defineEmits, onBeforeMount } from "vue";
import {LANGUAGE} from "@/helpers/_constants"
import { useErrors, useNotification, useUser } from "@/stores";

const props = defineProps({
  authData: Object
});

const emit = defineEmits(['update:authData']);

const userData = ref({});
const data = ref({
  password:"",
  newPassword:"",
  confirmPassword:""
});
const authStore = useUser()
const {showError,showSuccess} = useNotification()
const errors = useErrors()
watch(
  () => props.authData,
  () => {
    Object.assign(userData.value, props.authData);
  },
  { immediate: true }
);

onBeforeMount(()=>{
  errors.$reset();
  if(userData?.value?.language) userData.value.language = LANGUAGE.find((lang)=>lang._id=== userData.value.language)
})

const onChange = (key) => errors?.fields?.input?.[key] && delete errors?.fields?.input?.[key]

const getSelected = (params) => {
  userData.value.language = params;
  emit("update:authData", userData.value)
};
const onUpdate = async()=>{
  try {    
    errors.$reset();
    await authStore.updateUserPassword({
       _id:localStorage.getItem("authId"),
       oldPassword:data.value.password,
       newPassword:data.value.newPassword,
       confirmPassword:data.value.confirmPassword,
    })
    if(errors.fields?.input?.oldPassword || errors.fields?.input?.newPassword){
      showError("An error occured!");
      console.log({errors:errors.fields?.input})
    }else{
      showSuccess("User password updated succesfully");
      data.value={}
    }
  } catch (error) {
    console.log("Error on update password :",error)
  }
}
</script>
<template>
  <Disclosure>
    <template #title>Account Settings</template>
    <template #content>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <Label value="Language" />
          <div class="w-72">
            <ListBox :lists="LANGUAGE" :selected="userData.language"  @handle-click="getSelected"/>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <Label value="Update Password" />
          <div class="flex justify-between space-x-2">
            <div class="flex flex-col   w-1/4"> 
                <Input
                  type="password"
                  placeholder="Actual Password"
                  className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
                  v-model="data.password"
                  :invalid="Boolean(errors.fields.input.oldPassword)"
                  @input="onChange('oldPassword')"
                />
                <div class="!mt-0">
                  <inputs-validation :error="errors.fields.input.oldPassword" />
                </div>
            </div>
            <div class="flex flex-col  w-1/4 space-y-1"> 
              <Input
                type="password"
                placeholder="New Password"
                className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
                v-model="data.newPassword"
                :invalid="Boolean(errors.fields.input.newPassword)"
                @input="onChange('newPassword')"
              />
              <div class="!mt-0">
                  <inputs-validation :error="errors.fields.input.newPassword" />
                </div>
            </div>
            <div class="flex flex-col w-1/4 space-y-1"> 
              <Input
                type="password"
                placeholder="Confirm Password"
                className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
                v-model="data.confirmPassword"
                :invalid="Boolean(errors.fields.input.confirmPassword)"
                @input="onChange('confirmPassword')"
              />
              <div class="!mt-0">
                  <inputs-validation :error="errors.fields.input.confirmPassword" />
                </div>
            </div>
            <Button type="button" color="light" class="w-1/5 h-14 mb-0" @click="onUpdate">
              Update
            </Button>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <Label value="Synchronisation" />
          <div class="flex space-x-2">
            <div
              class="border border-solid border-lightbrown px-8 py-3 flex items-center justify-center space-x-2"
            >
              <div class="w-10 h-10">
                <IconFacebook />
              </div>
              <span class="text-sm text-blackgray font-medium"> Sign in with Facebook</span>
            </div>
            <div
              class="border border-solid border-lightbrown px-8 py-3 flex items-center justify-center space-x-2"
            >
              <div class="w-10 h-10">
                <IconGmail />
              </div>
              <span class="text-sm text-blackgray font-medium"> Sign in with Google</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Disclosure>
</template>
