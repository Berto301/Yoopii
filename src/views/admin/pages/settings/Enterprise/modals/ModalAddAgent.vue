<script setup>
import { defineProps, ref, watch, defineEmits } from "vue";
import Modal from "@/components/designSystem/Modal.vue";
import { PARITY_LISTS } from "@/helpers/_constants";
import Listbox from "@/components/designSystem/ListBox.vue";
import DatePicker from "@/components/designSystem/DatePicker.vue";
import Input from "@/components/designSystem/Input.vue";
import InputsValidation from "@/components/designSystem/Validation.vue";
import Agent from "@/assets/images/agent.jpg";
import IconCamera from "@/components/icons/IconCamera.vue";
import Checkbox from "@/components/designSystem/Checkbox.vue";
import { PERMISSIONS } from "@/helpers/_constants";
import { useErrors, useNotification, useAgentStore, useUser } from "@/stores";
import { getDateToSave } from "@/helpers/_functions";

const props = defineProps({
  isOpen: Boolean,
  team:{}
});
const agentStore = useAgentStore();
const { showError, showSuccess } = useNotification();
const errors = useErrors();
const userData = ref({
  name: "",
  firstname: "",
  type: "agency",
  profesionnalName: "",
  gender: "",
  adress: "",
  dateOfBirth: new Date(),
  email: "",
  CIN: "",
  phone: "",
  NIF_STAT: "",
  deliveryPlace: "",
  deliveryDate: new Date(),
  googleSynchronisation: "-",
  facebookSynchronisation: "-",
  language: "en",
  linkedin: "",
  facebook: "",
  whatsapp: "",
  portfolio: "",
  siteweb: "",
  note: "",
  permissions: [
    "dashboard",
    "chat",
    "property",
    "terrain",
    "reports",
    "settings",
  ],
  role: "",
});

watch(
  () => props?.team,
  () => {
    console.log({team:props.team})
    if(props?.team?._id) Object.assign(userData.value, props.team);
  },
  { immediate: true }
);
const $emit = defineEmits(["clickCancel",'getAgents']);
const permissions = ref(PERMISSIONS);
const userStore =useUser()

const onChange = (key, e) => {
  userData.value[key] = e.target.value;
  // emit("update:authData", userData.value);
  if (errors.fields.input?.[key]) delete errors.fields.input[key];
};

const onChangeDate = (date) => {
  userData.value.dateOfBirth = getDateToSave(date);
  //  emit("update:authData", userData.value);
};
const getSelected = (params) => {
  userData.value.gender = params;
  // emit("update:authData", userData.value)
};
const onClickAdd = async () => {
  try {
    errors.$reset();
    if (!userData.value.permissions?.length)
      return showError("Please select at least one Permission");
    let data = {
      name: userData.value.name,
      firstname: userData.value.firstname,
      type: userData.value.type,
      profesionnalName: userData.value.profesionnalName,
      gender: userData.value.gender?._id || userData.value.gender || "",
      adress: userData.value.adress,
      dateOfBirth: userData.value.dateOfBirth,
      email: userData.value.email,
      CIN: userData.value.CIN,
      phone: userData.value.phone,
      NIF_STAT: userData.value.NIF_STAT,
      deliveryPlace: userData.value.deliveryPlace,
      deliveryPlace: userData.value.deliveryPlace,
      deliveryDate: userData.value.deliveryDate,
      googleSynchronisation: userData.value.googleSynchronisation,
      facebookSynchronisation: userData.value.facebookSynchronisation,
      language: userData.value.language?._id || "en",
      linkedin: userData.value.linkedin,
      facebook: userData.value.facebook,
      whatsapp: userData.value.whatsapp,
      portfolio: userData.value.portfolio,
      siteweb: userData.value.siteweb,
      note: userData.value.note,
      role: userData.value.role,
      permissions: userData.value.permissions
    }
    
    if(props?.team?._id){
       data = {
       _id:props?.team?._id,
       enabled: userData.value.enabled,
       ...data
      }
      await userStore.updateUserData({
       ...data
      })
    }else{
      data = {
        ...data,
        enterprise: localStorage.getItem("enterpriseId"),
        password: "Hello123!",
        enabled: true,
      }
       await agentStore.insert({
       ...data
      });
    }
    if (errors.fields?.input?.name || errors.fields?.input?.email || errors.fields?.input?.role) {
      showError("An error occured!");
    } else {
      showSuccess(props?.team?._id? "User updated succesfully":"User Added succesfully");
      $emit("clickCancel");
      $emit('getAgents',data)
    }
  } catch (error) {
    console.log("Error on add agent - Global:", error);
  }
};
</script>
<template>
  <Modal
    :isOpen="isOpen"
    @clickSave="onClickAdd"
    @clickCancel="$emit('clickCancel')"
  >
    <template #forms>
      <div class="flex flex-col">
        <div
          class="w-full flex items-center justify-center bg-gray-300 rounded"
        >
          <div class="w-60 h-60 flex items-center justify-center relative">
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
        <span class="font-medium text-blackgray text-2xl">
          Personnal Informations
        </span>
        <div
          class="w-full grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem] my-4"
        >
          <div class="flex flex-col w-full space-y-1">
            <Input
              placeholder="Name"
              className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
              v-model="userData.name"
              @input="onChange('name', $event)"
              :invalid="Boolean(errors.fields.input.name)"
            />
            <div class="!mt-0">
              <inputs-validation :error="errors.fields.input.name" />
            </div>
          </div>
          <Input
            placeholder="Firstname"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.firstname"
            @input="onChange('firstname', $event)"
          />
          <Input
            placeholder="Professional Name"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.profesionnalName"
            @input="onChange('profesionnalName', $event)"
          />
          <Input
            placeholder="CIN"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.CIN"
            @input="onChange('CIN', $event)"
          />
          <Listbox
            :lists="PARITY_LISTS"
            :selected="PARITY_LISTS[0]"
            @handle-click="getSelected"
          />
          <DatePicker
            :selected="new Date()"
            @update:modelValue="onChangeDate"
          />
          <div class="flex flex-col space-y-1">
            <Input
              placeholder="Email"
              className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
              v-model="userData.email"
              @input="onChange('email', $event)"
              :invalid="Boolean(errors.fields.input.email)"
            />
            <div class="!mt-0">
              <inputs-validation :error="errors.fields.input.email" />
            </div>
          </div>
          <Input
            placeholder="Phone"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.phone"
            @input="onChange('phone', $event)"
          />
          <Input
            placeholder="Adresse"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.adress"
            @input="onChange('adress', $event)"
          />
        </div>
        <span class="font-medium text-blackgray text-2xl"> Licence </span>
        <div
          class="w-full grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem] my-4"
        >
          <Input
            placeholder="NIF/STAT or License number"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.NIF_STAT"
            @input="onChange('NIF_STAT', $event)"
          />
          <Input
            placeholder="Delivery place"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.deliveryPlace"
            @input="onChange('deliveryPlace', $event)"
          />
          <DatePicker
            :selected="new Date()"
            @update:modelValue="onChangeDate"
          />
        </div>
        <span class="font-medium text-blackgray text-2xl">
          Social Profile
        </span>
        <div
          class="w-full grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem] my-4"
        >
          <Input
            placeholder="Facebook"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.facebook"
            @input="onChange('facebook', $event)"
          />
          <Input
            placeholder="Linkedin"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.linkedin"
            @input="onChange('linkedin', $event)"
          />
          <Input
            placeholder="WhatsApp"
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            v-model="userData.whatsapp"
            @input="onChange('whatsapp', $event)"
          />
        </div>
        <span class="font-medium text-blackgray text-2xl"> Permissions </span>
        <div class="flex flex-col">
          <div class="flex flex-col w-full space-y-1">
            <Input
              placeholder="Role"
              className=" w-56 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
              v-model="userData.role"
              @input="onChange('role', $event)"
              :invalid="Boolean(errors.fields.input.role)"
            />
            <inputs-validation :error="errors.fields.input.role" />
          </div>
          <div
            class="w-full grid grid-cols-3 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem] my-4"
          >
            <!-- <Checkbox 
              v-for="permission in permissions"
              :key="permission.id"
              :id="permission.id"
              :value="permission.id"
              :label="permission.value"
              v-model="checkedNames"
            /> -->
            <div
              class="flex items-center space-x-2"
              v-for="permission in permissions"
              :key="permission.id"
            >
              <input
                type="checkbox"
                :id="permission.id"
                :value="permission.id"
                v-model="userData.permissions"
              />
              <label :for="permission.id">{{ permission.value }}</label>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>
