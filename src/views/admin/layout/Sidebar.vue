<script setup>
import DashboardIcon from "../../../components/icons/IconDashboard.vue" 
import { useAuth } from "@/stores/index.ts"
import { onMounted, ref, defineProps } from "vue";
const props = defineProps({
    routes: {
        type: Array,
        required: true
    }
});

const permissions = ref(JSON.parse(localStorage.getItem("user"))?.permissions);
const routes = props.routes.filter(route => permissions?.value.includes(route.key));

</script>
<template>
    <div class=" w-60 rounded-lg shadow-lg bg-white flex flex-col space-y-16 p-4">
        <div  class="mt-4 pl-4 flex items-center flex-wrap justify-start space-x-2 cursor-pointer"> 
            <img src="@/assets/logo/yoopii.png" class="object-cover"/>
            <span class="block text-lightbrown text-2xl font-bold">Yoopii</span>
            <span class="block text-lightbrown text-md font-normal">Agent</span>
        </div>
        <div class="flex flex-col space-y-4"> 
            <router-link class="flex items-center justify-start space-x-4 cursor-pointer px-3 hover:bg-transparent" v-for="route in routes" :key="route.name" :to="route?.layout+route?.path"> 
                <span class="w-9 h-9"> 
                    <component :is="route?.icon" />
                </span>
                <span class="text-sm text-blackgray font-medium hover:text-lightbrown">
                    {{ route.name }}
                </span>
            </router-link>
        </div>

    </div>
</template>