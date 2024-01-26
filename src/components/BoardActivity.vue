<script setup>
import Home from "../assets/images/home.jpg"
</script>
<template>
    <div class="flex space-x-4"> 
        <div
            class="w-14 h-14 rounded-xl overflow-hidden shadow-lg"
        >
            <img :src="Home" class="bg-cover w-full h-full" />
        </div>
        <div class="flex flex-col space-y-1"> 
            <span class="text-lg text-black font-medium"> Berto Leka added a House</span>
            <span class="text-xs text-greyColor font-normal "> 1 min </span>
        </div>

    </div>
</template>