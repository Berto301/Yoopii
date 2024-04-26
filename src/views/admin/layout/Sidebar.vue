<script setup>
import { removeOptionalParams } from "@/helpers/_functions";
import DashboardIcon from "../../../components/icons/IconDashboard.vue" 
import { useAuth } from "@/stores/index.ts"
import { onMounted, ref, defineProps } from "vue";
import {  useRoute } from "vue-router";
const props = defineProps({
    routes: {
        type: Array,
        required: true
    },
    isCollapse: Boolean
});

const permissions = ref(JSON.parse(localStorage.getItem("user"))?.permissions);
const routes = props.routes.filter(route => permissions?.value.includes(route.key));
const onClickPath = (e,path)=> localStorage.setItem("path",path)
const actualRoute = useRoute()
</script>
<template>
    <div :class="['rounded-lg shadow-lg bg-white flex flex-col space-y-16 p-4 transition duration-300 ease-in ',isCollapse ? 'w-60':'w-30']">
        <div  class="mt-4 pl-4 flex items-center flex-wrap justify-start space-x-2 cursor-pointer"> 
            <img src="@/assets/logo/yoopii.png" class="object-cover"/>
            <span class="block text-lightbrown text-2xl font-bold" v-if="isCollapse">Yoopii</span>
            <span class="block text-lightbrown text-md font-normal" v-if="isCollapse">Agent</span>
        </div>
        <div class="flex flex-col space-y-4"> 
            <router-link class="flex items-center justify-start space-x-4 cursor-pointer px-3 hover:bg-transparent" v-for="route in routes" :key="route.name" :to="route?.layout+route?.path" 
            @click="(e)=>onClickPath(e,route?.layout+route?.path)"
            > 
                <span class="w-9 h-9"> 
                    <component :is="route?.icon" />
                </span>
                
                <span :class="['text-sm   hover:text-lightbrown ', removeOptionalParams(route?.layout+route?.path)===actualRoute.path ?'text-lightbrown font-bold':'text-blackgray font-medium']" v-if="isCollapse">
                    {{ route.name }}
                </span>
            </router-link>
        </div>

    </div>
</template>