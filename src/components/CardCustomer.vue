<script setup>
import Agent from "../assets/images/agent.jpg"
import IconMessage from "../components/icons/IconMessage.vue";
</script>
<template>
    <div class="flex space-x-4"> 
        <div
            class="w-12 h-12 rounded-xl overflow-hidden shadow-lg"
        >
            <img :src="Agent" class="bg-cover w-full h-full" />
        </div>
        <div class="flex flex-col space-y-1 w-full"> 
            <div class="flex items-center"> 
                <span class="text-lg text-black font-medium w-4/5"> Hajatiana Roberto</span> 
                <div class="flex justify-end space-x-4 items-center w-1/5"> 
                    <div class="w-6 h-6 relative"> 
                        <IconMessage/>
                        <div class="absolute -top-3 -right-3 flex items-center justify-center font-medium text-md text-white bg-lightbrown w-6 h-6 rounded-full"> 
                            0
                        </div>
                    </div>
                    <div class="rounded-full bg-red-600 w-2 h-2"> 
                    </div>
                </div>
            </div>
            <span class="text-xs text-greyColor font-normal "> Madagascar, Antsirabe , 110 </span>
        </div>

    </div>
</template>