<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import UserProfile from "./userProfile/index.vue"
import Enterprise from "./Enterprise/index.vue"
import Others from "./Others.vue"
const categories = ref([
  {
    _id: 1,
    name: "User Profile",
  },
  {
    id: 2,
    name: "Enterprise Profile",
  },
  {
    id: 4,
    name: "Others",
  },
]);
</script>
<template>
  <div class="w-full px-2 " id="#section_Setting">
    <TabGroup>
      <TabList class="flex items-center space-x-3 justify-start">
        <Tab
          v-for="category in categories"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <a
            :class="[
              'outline-none font-semibold hover:text-lightbrown hover:decoration-lightbrown hover:bg-transparent text-base cursor-pointer transition ease-in-out duration-150',
              selected
                ? 'text-lightbrown underline decoration-lightbrown'
                : 'text-blackgray no-underline border-0',
            ]"
            >{{ category?.name }}</a
          >
        </Tab>
      </TabList>

      <TabPanels class="mt-2 px-2 h-[calc(100vh-15rem)] overflow-hidden overflow-y-auto">
        <TabPanel>
          <UserProfile />
        </TabPanel>
        <TabPanel>
          <Enterprise />
        </TabPanel>
        <TabPanel>
          <Others />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
