<script setup> 
import Input from "@/components/designSystem/Input.vue";
import InputsValidation from "@/components/designSystem/Validation.vue"
import { getDateToSave } from "@/helpers/_functions";
import { defineProps, ref, watch, defineEmits, onBeforeMount } from "vue";
import {PARITY_LISTS} from "@/helpers/_constants"
import Listbox from "@/components/designSystem/ListBox.vue";

const props = defineProps({
  authData: Object,
  errors:Object
});

const emit = defineEmits(['update:authData']);

const userData = ref({});

watch(
  () => props.authData,
  () => {
    Object.assign(userData.value, props.authData);
  },
  { immediate: true }
);

onBeforeMount(()=>{
  if(userData?.value?.gender) userData.value.gender = PARITY_LISTS.find((parity)=>parity._id=== userData.value.gender)
})

const onChange = (key, e) => {
  userData.value[key] = e.target.value;
  emit("update:authData", userData.value);
  if(props.errors.fields.input?.[key]) delete props.errors.fields.input[key]
};

const onChangeDate = (date) => {
   userData.value.dateOfBirth = getDateToSave(date)
   emit("update:authData", userData.value);
};
const getSelected = (params) => {
  userData.value.gender = params;
  emit("update:authData", userData.value)
};
</script>
<template>
  <div class="w-[60%] grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem]">
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
        :selected="userData.gender"
        @handle-click="getSelected"
        />
    <div class="relative">
      <VDatePicker v-model="userData.dateOfBirth"  @update:modelValue="onChangeDate" color="gray">
          <template #default="{ inputValue, inputEvents }">
            <Input className=" w-24 h-14 border pointer-events-none  placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2" :value="inputValue" v-on="inputEvents" placeholder="Date of Birth" />
          </template>
      </VDatePicker>
    </div>
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
</template>

