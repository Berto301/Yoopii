<script setup lang="jsx">
import BoardCard from "../../../../components/BoardCard.vue"
import IconSales from "../../../../components/icons/IconSales.vue";
import IconHouse from "../../../../components/icons/IconHouse.vue"
import IconFields from "../../../../components/icons/IconFields.vue"
import IconUsers from "../../../../components/icons/IconUsers.vue"
import BarBoard from "./BarBoard.vue"
import BoardCustomers from "../../../../components/BoardCustomers.vue"
import BoardActivity from "../../../../components/BoardActivity.vue"
const details=[
    {
        description:"Total Sales",
        value:"Ar 1.2M",
        component: <IconSales/>,
        _id:1
    },
    {
        description:"Total Properties",
        value:"1534",
        component: <IconHouse/>,
        _id:2
    },
    {
        description:"Total Terrains",
        value:"123",
        component: <IconFields/>,
        _id:3
    },
    {
        description:"Total Customers",
        value:"12",
        component: <IconUsers/>,
        _id:4
    }

]
</script>
<template>
            <div class="flex space-x-8 min-h-[calc(100vh-12rem)]"> 
                <div class="w-2/3 flex flex-col space-y-6"> 
                    <div class="flex justify-between">
                            <BoardCard v-for="_detail in details" :key="_detail._id" :details="_detail">
                                <template #image>
                                    <component :is="_detail?.component" />
                                </template>
                            </BoardCard>
                    </div>
                    <BarBoard/>
                </div>
                <div class="w-1/3"> 
                    <div class="flex flex-col space-y-6 w-full"> 
                        <div class="w-full bg-white p-6  rounded-lg shadow-lg"> 
                            <div class="border border-x-0 border-t-0 border-b-greyColor border-solid text-sm font-medium text-greyColor uppercase py-4 mb-4"> 
                                NEW CUSTOMERS
                            </div>
                            <div class="flex flex-col space-y-4"> 
                                <BoardCustomers/> 
                                <BoardCustomers/>
                                <BoardCustomers/>
                            </div>
                        </div>
                        <div class="w-full bg-white p-6  rounded-lg shadow-lg"> 
                            <div class="border border-x-0 border-t-0 border-b-greyColor border-solid text-sm font-medium text-greyColor uppercase py-4 mb-4"> 
                                ACTIVITY RECENTS
                            </div>
                            <div class="flex flex-col space-y-4"> 
                                <BoardActivity/> 
                                <BoardActivity/>
                                <BoardActivity/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>