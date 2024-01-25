<script setup>
import Navbar from './Navbar.vue';
defineProps({
  dataHeader:Object
});
</script>

<template>
  <div class="flex flex-col p-4 bg-red w-full">
    <Navbar  :dataHeader="dataHeader"/>
  </div>
</template>
