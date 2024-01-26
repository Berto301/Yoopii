<script setup>
import Agent from "../assets/images/agent.jpg"
</script>
<template>
    <div class="flex space-x-4"> 
        <div
            class="w-14 h-14 rounded-xl overflow-hidden shadow-lg"
        >
            <img :src="Agent" class="bg-cover w-full h-full" />
        </div>
        <div class="flex flex-col space-y-1"> 
            <span class="text-lg text-black font-medium"> Berto Leka</span>
            <span class="text-xs text-greyColor font-normal "> 2 years </span>
        </div>

    </div>
</template>