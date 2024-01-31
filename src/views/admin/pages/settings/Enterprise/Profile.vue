<template>
    <div class="w-[60%] flex flex-wrap items-center">
      <Input
        placeholder="Name"
        className=" w-[47%] h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      />
      <Input
        placeholder="Address"
        className=" w-[47%] h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      />
      <Input
        placeholder="Phone"
        className=" w-[47%] h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      />
      <Input
        placeholder="Email"
        className=" w-[47%] h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
      />
      
    </div>
  </template>
  <script setup> 
  import Input from "@/components/designSystem/Input.vue"
  </script>
  