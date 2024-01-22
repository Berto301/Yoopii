<script setup>
import PropertyCards from "../../components/PropertyCards.vue"
</script>

<template>
    <div class="flex flex-col space-y-2 mt-4 px-8">
        <div class="mt-4 flex flex-wrap justify-between space-x-2">
            <PropertyCards title="Residential" property="125 properties"/>
            <PropertyCards title="Commercial" property="125 properties"/>
            <PropertyCards title="Industrial" property="125 properties"/>
        </div>
         
        <div class=" flex flex-wrap justify-between space-x-2">
          <PropertyCards title="Agricultural" property="125 properties"/>
          <PropertyCards title="Forest Land" property="125 properties"/>
          <PropertyCards title="Vacant Land" property="125 properties"/>
        </div>
    </div>

</template>
