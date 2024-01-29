<script setup> 
import CardCustomer from "../../../../components/CardCustomer.vue"
</script>
<template>
    <div class="w-1/4 px-4 py-2 bg-white flex flex-col space-y-4 rounded-md shadow-lg"> 
        <div class="text-center text-black font-medium text-lg"> 
            CUSTOMERS
        </div>
        <CardCustomer/> 
        <CardCustomer/>
        <CardCustomer/> 
        <CardCustomer/>

        <div class="text-center text-black font-medium text-lg"> 
            TEAMMATES
        </div>
          
        <CardCustomer/> 
        <CardCustomer/>
    </div>
</template>