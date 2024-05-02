<script setup>
import Disclosure from "@/components/Disclosure.vue"
import Input from "@/components/designSystem/Input.vue"
import { defineProps, ref, watch, defineEmits } from "vue";
import {getDateToSave} from "@/helpers/_functions"
import DatePicker from "@/components/designSystem/DatePicker.vue"

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


const onChange = (key, e) => {
     userData.value[key] = e.target.value;
     emit("update:authData", userData.value);
     if(props?.errors?.fields?.input?.[key]) delete props.errors.fields.input[key]
};

const onChangeDate = (date) => {
   userData.value.deliveryDate = getDateToSave(date)
   emit("update:authData", userData.value);
};

</script>
<template>
   <Disclosure>
      <template #title>Licence</template>
      <template #content>
        <div class="w-1/2 grid grid-cols-3 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem]"> 
         <Input 
            placeholder="NIF/STAT or License number" 
            className="w-24 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"   
            v-model="userData.NIF_STAT"
            @input="onChange('NIF_STAT', $event)"
         /> 
         <Input 
          placeholder="Delivery place"
          className=" w-24 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2" 
          v-model="userData.deliveryPlace"
          @input="onChange('deliveryPlace', $event)"
         /> 
         <DatePicker
         :selected="userData.deliveryDate"
         @update:modelValue="onChangeDate"
         />
        </div>
      </template>
   </Disclosure> 
</template>