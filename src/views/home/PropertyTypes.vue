<script setup>
import PropertyCards from "../../components/PropertyCards.vue"
</script>

<template>
    <div class="flex flex-col space-y-2 mt-4 px-8">
        <div class="mt-4 flex flex-wrap justify-between space-x-2">
            <PropertyCards title="Appartement" property="125 properties"/>
            <PropertyCards title="Villa" property="125 properties"/>
            <PropertyCards title="Home" property="125 properties"/>
        </div>
         
        <div class=" flex flex-wrap justify-between space-x-2">
          <PropertyCards title="Building" property="125 properties"/>
          <PropertyCards title="Shop" property="125 properties"/>
          <PropertyCards title="Garage" property="125 properties"/>
        </div>
    </div>

</template>
