<script setup>
import Home from "../assets/images/home.jpg";
import IconCalendar from "./icons/IconCalendar.vue";
import IconTime from "./icons/IconTime.vue";
import IconBill from "./icons/IconBills.vue";
import IconLocation from "./icons/IconLocation.vue";
</script>
<template>
  <div class="flex space-x-4">
    <div class="w-16 h-10 mt-2 rounded-lg overflow-hidden shadow-lg">
      <img :src="Home" class="bg-cover w-full h-full" />
    </div>
    <div class="flex flex-col space-y-1 w-full">
      <div class="flex justify-between items-center">
        <span class="text-sm text-greyColor font-medium ">
          Type : VISIT</span
        >
        <div class="flex space-x-1 items-center">
          <div class="w-8 h-8">
            <IconCalendar />
          </div>
          <div class="font-normal text-xs text-greyColor">12/02/24</div>
        </div>
        <div class="flex space-x-1 items-center">
          <div class="w-8 h-8">
            <IconTime />
          </div>
          <div class="font-normal text-xs text-greyColor">14 h PM</div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex space-x-1">
          <span class="text-xs text-greyColor font-normal">
            <IconLocation />
          </span>
          <span class="text-xs text-greyColor font-normal">
            Mahazoarivo, Antsirabe
          </span>
        </div>
        <div class="flex space-x-1 items-center">
          <div class="w-5 h-5"><IconBill /></div>
          <span class="text-xs text-greyColor font-normal"> 3000 Ar </span>
        </div>
      </div>
    </div>
  </div>
</template>
