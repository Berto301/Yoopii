<script setup>
import Input from "@/components/designSystem/Input.vue";
import InputsValidation from "@/components/designSystem/Validation.vue";
import { ref,watch } from "vue";

const props = defineProps({
  authAgency: Object,
  errors: Object,
});

const emit = defineEmits(["update:authAgency"]);

const agencyData = ref({});

watch(
  () => props.authAgency,
  () => {
    Object.assign(agencyData.value, props.authAgency);
  },
  { immediate: true }
);

const onInput = (key, e) => {
  agencyData.value[key] = e.target.value;
  emit("update:authAgency", agencyData.value);
  if(props.errors.fields.input?.[key]) delete props.errors.fields.input[key]
};
</script>
<template>
  <div
    class="w-[60%] grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem] justify-center items-center"
  >
    <div class="flex flex-col w-full space-y-1">
      <Input
        placeholder="Name"
        className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
        v-model="agencyData.enterpiseName"
        @input="onInput('enterpiseName', $event)"
        :invalid="Boolean(errors.fields.input.enterpiseName)"
      />
      <inputs-validation :error="errors.fields.input.enterpiseName" />
    </div>
    <Input
      placeholder="Address"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="agencyData.enterpiseAdress"
      @input="onInput('enterpiseAdress', $event)"
    />
    <Input
      placeholder="Phone"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="agencyData.enterpisePhone"
      @input="onInput('enterpisePhone', $event)"
    />
    <div class="flex flex-col w-full space-y-1">
      <Input
        placeholder="Email"
        className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
        v-model="agencyData.enterpiseEmail"
        @input="onInput('enterpiseEmail', $event)"
        :invalid="Boolean(errors.fields.input.enterpiseEmail)"
      />
      <inputs-validation :error="errors.fields.input.enterpiseEmail" />
    </div>
  </div>
</template>
