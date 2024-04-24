<script setup>
import Disclosure from "@/components/Disclosure.vue"
import Input from "@/components/designSystem/Input.vue"
defineProps({
   authAgency:Object
});
</script>
<template>
   <Disclosure>
      <template #title>Licence</template>
      <template #content>
        <div class="w-1/3 grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem]"> 
         <Input placeholder="NIF/STAT or License number" className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"  v-model="authAgency.enterpiseNIF_STAT"/> 
         <Input placeholder="Delivery place" className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"  v-model="authAgency.enterpiseDeliveryPlace"/> 
        </div>
      </template>
   </Disclosure> 
</template>