<script setup> 
import Input from "@/components/designSystem/Input.vue"


defineProps({
    authAgency:Object
});

</script>
<template>
  <div class="w-[60%] grid grid-cols-2 grid-rows-[auto] gap-x-[2.375rem] gap-y-[0.688rem] justify-center items-center">
    <Input
      placeholder="Name"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="authAgency.enterpiseName"
      />
    <Input
      placeholder="Address"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="authAgency.enterpiseAdress"
    />
    <Input
      placeholder="Phone"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="authAgency.enterpisePhone"
      />
    <Input
      placeholder="Email"
      className=" w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      v-model="authAgency.enterpiseEmail"
      />
    
  </div>
</template>
  