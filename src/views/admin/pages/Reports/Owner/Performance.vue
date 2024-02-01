<script setup> 
import HouseOk from "@/components/icons/HouseOk.vue"
import HouseFail from "@/components/icons/HouseFail.vue"
import IconTransaction from "@/components/icons/IconTransaction.vue"
import BlackUsers from "@/components/icons/BlackUsers.vue"
</script>
<template>
    <div class="w-[30%] h-56 bg-white rounded-md shadow-lg p-4 "> 
        <span class="font-medium text-blackgray text-2xl">Personnal Performance</span>
       <table class="w-full"> 
         <tbody> 
            <tr>
                <td>
                    <div class="flex space-x-2 items-center"> 
                        <div class="w-16 h-16"> 
                            <BlackUsers/>
                        </div>
                        <span class="text-gray font-bold text-lg">
                                4
                        </span>
                    </div>
                </td>
                <td>
                    <div class="flex space-x-2 justify-end items-center"> 
                        <div class="w-16 h-16"> 
                            <IconTransaction/>
                        </div>
                        <span class="text-gray font-bold text-lg">
                                4 000 000 Ar
                        </span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="flex space-x-2 items-center"> 
                        <div class="w-16 h-16"> 
                            <HouseOk/>
                        </div>
                        <span class="text-gray font-bold text-lg">
                                4
                        </span>
                    </div>
                </td>
                <td>
                    <div class="flex space-x-2 items-center justify-end"> 
                        <div class="w-16 h-16"> 
                            <HouseFail/>
                        </div>
                        <span class="text-gray font-bold text-lg">
                                4
                        </span>
                    </div>
                </td>

            </tr>
         </tbody>
       </table>

    </div>
</template>