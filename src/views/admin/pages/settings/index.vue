<script setup>
import { onMounted, ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import UserProfile from "./userProfile/index.vue"
import Enterprise from "./Enterprise/index.vue"
import Others from "./Others/index.vue"
import { useAgentStore } from "@/stores";


const {getAgents} = useAgentStore()
 
const categories = ref([
  {
    _id: 1,
    name: "User Profile",
    key:"user_profile"
  },
  {
    id: 2,
    name: "Enterprise Profile",
    key:"agency_profile"
  },
  {
    id: 4,
    name: "Others",
    key:"others"
  },
]);
const onClickTab =async (e)=> {
if(e.target?.id==="agency_profile"){
  console.log("taget",e.target.id)
  await getAgents(localStorage.getItem("enterpriseId"))
}
}
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
          @click="onClickTab"
          :id="category.key"
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
