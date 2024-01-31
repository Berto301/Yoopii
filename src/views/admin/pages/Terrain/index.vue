<script setup>
import IconPlus from "../../../../components/icons/IconPlus.vue";
import HouseCard from "../../../../components/HouseCard.vue";
</script>
<template>
  <div class="px-2 min-h-[calc(100vh-12rem)] overflow-hidden">
    <div class="w-full flex justify-between">
      <div class="text-blackgray font-bold text-3xl">Terrain List</div>
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 cursor-pointer">
          <IconPlus />
        </div>
        <span class="text-sm text-blackgray font-medium"> Add a Terrain </span>
      </div>
    </div>
    <div class="mt-4 flex flex-wrap justify-between space-x-1">
      <HouseCard classParent="w-[24%] relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60" showAction/>
      <HouseCard classParent="w-[24%] relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60" showAction/>
      <HouseCard classParent="w-[24%] relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60" showAction/>
      <HouseCard classParent="w-[24%] relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60" showAction/>
      <HouseCard classParent="w-[24%] relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60" showAction/>
      <HouseCard classParent="w-[24%] relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60" showAction/>
      <HouseCard classParent="w-[24%] relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60" showAction/>
      <HouseCard classParent="w-[24%] relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60" showAction/>
    </div>
  </div>
</template>
