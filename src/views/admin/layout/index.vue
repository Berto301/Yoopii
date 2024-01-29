<script setup>
 import Sidebar from "./Sidebar.vue"
 import Header from "./Header.vue"
 import routes from "../../../router/mainRouter"
</script>
<template>
    <div class="flex min-h-screen space-x-4 bg-[#dfc5b9] p-4"> 
        <Sidebar :routes="routes"/>
        <div class="flex flex-col space-y-16 w-full"> 
            <Header/>
            <router-view/>
            
        </div>
    </div>
</template>