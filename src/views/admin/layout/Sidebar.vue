<script setup>
import DashboardIcon from "../../../components/icons/IconDashboard.vue"
</script>
<template>
    <div class=" w-56 rounded-lg shadow-lg bg-[#f7f0ed] flex flex-col space-y-16 p-4">
        <div  class="mt-4 pl-4 flex items-center justify-start space-x-2 cursor-pointer"> 
            <img src="@/assets/logo/yoopii.png" class="object-cover"/>
            <span class="block text-lightbrown text-2xl font-bold">Yoopii</span>
            <span class="block text-lightbrown text-lg font-normal">Agent</span>
        </div>
        <div class="flex flex-col space-y-4"> 
            <div class="flex items-center justify-start space-x-4 cursor-pointer px-3"> 
                <span class="w-9 h-9"> 
                    <DashboardIcon/>
                </span>
                <span class="text-sm text-blackgray font-medium hover:text-lightbrown">
                    Dashboard
                </span>
            </div>
            <div class="flex items-center justify-start space-x-4 cursor-pointer px-3"> 
                <span class="w-9 h-9"> 
                    <DashboardIcon/>
                </span>
                <span class="text-sm text-blackgray font-medium hover:text-lightbrown">
                    Dashboard
                </span>
            </div>
            <div class="flex items-center justify-start space-x-4 cursor-pointer px-3"> 
                <span class="w-9 h-9"> 
                    <DashboardIcon/>
                </span>
                <span class="text-sm text-blackgray font-medium hover:text-lightbrown">
                    Dashboard
                </span>
            </div>
            <div class="flex items-center justify-start space-x-4 cursor-pointer px-3"> 
                <span class="w-9 h-9"> 
                    <DashboardIcon/>
                </span>
                <span class="text-sm text-blackgray font-medium hover:text-lightbrown">
                    Dashboard
                </span>
            </div>
            <div class="flex items-center justify-start space-x-4 cursor-pointer px-3"> 
                <span class="w-9 h-9"> 
                    <DashboardIcon/>
                </span>
                <span class="text-sm text-blackgray font-medium hover:text-lightbrown">
                    Dashboard
                </span>
            </div>

        </div>

    </div>
</template>