<script setup>
  import { ref } from 'vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import PropertyTypes from './PropertyTypes.vue'
  import TerrainTypes from './TerrainTypes.vue'
  const categories = ref([
    {
      _id:1,
      name:"Property Types"
    },
    {
      id:2,
      name:"Terrain Types"
    }
  ])
  </script>
<template>
    <div class="w-full px-2 py-8 " id="#section_property">
      <TabGroup>
        <TabList class="flex items-center  space-x-1 justify-center">
          <Tab
            v-for="category in categories"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <a :class="['outline-none font-semibold hover:text-lightbrown hover:decoration-lightbrown hover:bg-transparent text-base cursor-pointer transition ease-in-out duration-150',selected ? 'text-lightbrown underline decoration-lightbrown':'text-blackgray no-underline border-0' ]">{{ category?.name }}</a>
          </Tab> 
        </TabList>
  
        <TabPanels class="mt-2 px-16">
          <TabPanel>
            <PropertyTypes/>
          </TabPanel>
          <TabPanel>
            <TerrainTypes/>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
</template>
  
  
  
