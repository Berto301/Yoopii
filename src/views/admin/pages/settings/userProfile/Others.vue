<script setup>
import Disclosure from "@/components/Disclosure.vue"
import Input from "@/components/designSystem/Input.vue"
import TextArea from "@/components/designSystem/TextArea.vue";
import { defineProps, ref, watch, defineEmits } from "vue";
const props = defineProps({
  authData: Object
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
};

</script>
<template>
   <Disclosure>
      <template #title>Others</template>
      <template #content>
         <div class="w-1/2 grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem]"> 
         <Input 
            placeholder="Portfolio" 
            className="w-24 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"   
            v-model="userData.portfolio"
            @input="onChange('portfolio', $event)"
         /> 
         <Input 
          placeholder="Siteweb"
          className=" w-24 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2" 
          v-model="userData.siteweb"
          @input="onChange('siteweb', $event)"
         /> 
         <TextArea
            class="ww-24 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 "
            placeholder="Note"
            v-model="userData.note"
            @input="onChange('note', $event)"
         />
        </div>
      </template>
   </Disclosure> 
</template>