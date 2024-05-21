<script setup>
import Disclosure from "@/components/Disclosure.vue";
import { defineProps, ref, watch, defineEmits } from "vue";
import Input from "@/components/designSystem/Input.vue";


const props = defineProps({
  authAgency: Object,
});

const emit = defineEmits(['update:authAgency']);

const agencyData = ref({});

watch(
  () => props.authAgency,
  () => {
    Object.assign(agencyData.value, props.authAgency);
  },
  { immediate: true }
);
const onChange = (key, e) => {
  agencyData.value[key] = e.target.value;
  emit("update:authAgency", agencyData.value);
};
</script>
<template>
  <Disclosure>
    <template #title>Social Profile</template>
    <template #content>
      <div class="w-[60%] grid grid-cols-3 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem]">
        <Input
          placeholder="Linkedin"
          className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
           v-model="agencyData.linkedin"
           @input="onChange('linkedin', $event)"
          />
        <Input
          placeholder="Facebook"
          className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
          v-model="agencyData.facebook"
          @input="onChange('facebook', $event)"
          />
        <Input
          placeholder="WhatsApp"
          className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
          v-model="agencyData.whatsapp"
          @input="onChange('whatsapp', $event)"
          />
      </div>
    </template>
  </Disclosure>
</template>
