<script setup> 
import Input from "@/components/designSystem/Input.vue";
import InputsValidation from "@/components/designSystem/Validation.vue"
import { defineProps, ref, watch, defineEmits } from "vue";


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

const onInput = (key, e) => {
  userData.value[key] = e.target.value;
  emit("update:authData", userData.value);
};

</script>
<template>
  <div class="w-[60%] grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem]">
    <div class="flex flex-col w-full space-y-1"> 
      <Input
        placeholder="Name"
        className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
        v-model="userData.name"
        @input="onInput('name', $event)"
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
      @input="onInput('firstname', $event)"
      />
    <Input
      placeholder="Professional Name"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="userData.profesionnalName"
      @input="onInput('profesionnalName', $event)"
      />
    <Input
      placeholder="CIN"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="userData.CIN"
      @input="onInput('CIN', $event)"
      />
    <Input
      placeholder="Gender"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="userData.gender"
      />
    <Input
      placeholder="Birthday"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
    />
    <div class="flex flex-col space-y-1"> 
      <Input
        placeholder="Email"
        className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
        v-model="userData.email"
        @input="onInput('email', $event)"
        :invalid="Boolean(errors.fields.input.email)"
      />
      <div class="!mt-0">
        <inputs-validation :error="errors.fields.input.email" />
      </div>
    </div>
    <Input
      placeholder="Phone"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="userData.gender"
      @input="onInput('phone', $event)"
      />
    <Input
      placeholder="Adresse"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="userData.adress"
      @input="onInput('adress', $event)"
      />
  </div>
</template>

