<script setup>
import Disclosure from "@/components/Disclosure.vue"
import Input from "@/components/designSystem/Input.vue"
import { getDateToSave } from "@/helpers/_functions";
import { ref,watch } from "vue";
import DatePicker from "@/components/designSystem/DatePicker.vue"

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

const onChange = (key, e) => {
  agencyData.value[key] = e.target.value;
  emit("update:authAgency", agencyData.value);
  if(props.errors.fields.input?.[key]) delete props.errors.fields.input[key]
};
const onChangeDate = (date) => {
  agencyData.value.enterpiseDeliveryDate = getDateToSave(date)
   emit("update:authAgency", agencyData.value);
};
</script>
<template>
   <Disclosure>
      <template #title>Licence</template>
      <template #content>
        <div class="w-1/2 grid grid-cols-3 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem]"> 
         <Input
          placeholder="NIF/STAT or License number"
          className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2" 
          v-model="agencyData.enterpiseNIF_STAT"
          @input="onChange('enterpiseNIF_STAT', $event)"
         /> 
         <Input 
            placeholder="Delivery place" 
            className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"  
            v-model="agencyData.enterpiseDeliveryPlace"
            @input="onChange('enterpiseDeliveryPlace', $event)"
         /> 
         <DatePicker
            :selected="agencyData.enterpiseDeliveryDate"
            @update:modelValue="onChangeDate"
         />
        </div>
      </template>
   </Disclosure> 
</template>