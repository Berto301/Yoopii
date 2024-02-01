<script setup> 

import IconHouseRent from "@/components/icons/IconHouseRent.vue"
import IconTerrain from "@/components/icons/IconTerrain.vue"
</script>
<template>
    <div class="w-[30%] h-56 bg-white rounded-md shadow-lg p-4 flex flex-col"> 
        <span class="font-medium text-blackgray text-2xl">Management </span>
        <div class="flex justify-between w-full"> 
            <div class="flex space-x-2 items-center"> 
                        <div class="w-16 h-16"> 
                            <IconHouseRent/>
                        </div>
                        <span class="text-gray font-bold text-lg">
                                4
                        </span>
                    </div>
                    <div class="flex space-x-2 items-center"> 
                        <div class="w-16 h-16"> 
                            <IconTerrain/>
                        </div>
                        <span class="text-gray font-bold text-lg">
                                4
                        </span>
                    </div>
        </div>
        <div class="flex justify-between w-full"> 
            <div class="flex space-x-2 items-center"> 
                        <div class="w-16 h-16"> 
                            <!-- <BlackUsers/> -->
                        </div>
                    </div>
                    <div class="flex space-x-2 items-center"> 
                        <div class="w-16 h-16"> 
                            <!-- <BlackUsers/> -->
                        </div>
                      
                    </div>
        </div>
    </div>
</template>