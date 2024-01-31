<script setup>
import Disclosure from "@/components/Disclosure.vue"
</script>
<template>
   <Disclosure>
      <template #title>Licence</template>
      <template #content>
        <div class="flex flex-wrap space-x-2"> 
         <Input placeholder="NIF/STAT or License number" className=" w-72 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"/> 
         <Input placeholder="Delivery place" className=" w-72 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"/> 
        </div>
      </template>
   </Disclosure> 
</template>