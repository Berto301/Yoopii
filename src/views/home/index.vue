<script setup>
import Header from './Header.vue';
</script>

<template>
  <main class="flex flex-col p-4 bg-red w-full">
    <div class="min-h-screen bg-cover" id="header">
        <Header />
    </div>
   
  </main>
</template>
<style>
#header{
   background-image:  url('../../assets/images/home.jpg');
}
</style>