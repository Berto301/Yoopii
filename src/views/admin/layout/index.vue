<script setup>
 import Sidebar from "./Sidebar.vue"
 import Header from "./Header.vue"
 import routes from "../../../router/mainRouter"
 import { useUser,useAgency, useConfiguration } from "@/stores";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
 
 const userStore =useUser()
 const agencyStore = useAgency()
 const router = useRouter()
 const configStore = useConfiguration()
 const isCollapse = ref(true)
 const onClickCollapse = ()=> isCollapse.value = !isCollapse.value
 onBeforeMount(async()=> {
      await userStore.getInfo(localStorage.getItem("authId"))
      if(userStore.currentUser.type==="agency" && localStorage.getItem("enterpriseId")){
        await agencyStore.getInfo(localStorage.getItem("enterpriseId"))
      }
      await configStore.getInfo(localStorage.getItem("authId"))
      if(localStorage.getItem("path")?.includes("admin")){
        router.push(localStorage.getItem("path"));
      }
 })
</script>
<template>
    <div class="flex min-h-screen space-x-4 bg-[#dfc5b9] p-4"> 
        <Sidebar :routes="routes" :isCollapse="isCollapse"/>
        <div class="flex flex-col space-y-16 w-full"> 
            <Header @onClickCollapse="onClickCollapse" :isCollapse="isCollapse"/>
            <router-view/>
            
        </div>
    </div>
</template>