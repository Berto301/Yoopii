<script setup>
import Disclosure from "@/components/Disclosure.vue";
import Label from "@/components/designSystem/Label.vue";
// import ListBox from "@/components/designSystem/ListBox.vue";
import Button from "@/components/designSystem/Button.vue";
</script>
<template>
  <Disclosure>
    <template #title>Social Profile</template>
    <template #content>
      <div class="flex ">
        <Input
          placeholder="Linkedin"
          className=" w-72 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
        />
        <Input
          placeholder="Facebook"
          className=" w-72 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
        />
        <Input
          placeholder="WhatsApp"
          className=" w-72 h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
        />
      </div>
    </template>
  </Disclosure>
</template>
