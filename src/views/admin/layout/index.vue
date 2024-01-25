<script setup>
 import Sidebar from "./Sidebar.vue"
 import Header from "./Header.vue"
</script>
<template>
    <div class="flex min-h-screen space-x-4 bg-[#dfc5b9] p-4"> 
        <Sidebar/>
        <div class="flex flex-col space-y-16 w-full"> 
            <Header/>
        </div>
    </div>
</template>