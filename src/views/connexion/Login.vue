<script setup>
import Layout from "./Layout.vue";
import Input from "../../components/designSystem/Input.vue"
import Button from "../../components/designSystem/Button.vue"
import IconFacebook from "../../components/icons/IconFacebook.vue";
import IconGmail from "../../components/icons/IconGmail.vue";
import { useRouter } from 'vue-router'
const router = useRouter();
const onSignin = ()=>  router.push("/admin");
</script>

<template>
     <Layout>
        <template #title> 
            <h1 class="uppercase text-lightbrown font-semibold text-xl">LOGIN</h1>
        </template>
        <template #content>
            <Input placeholder="Email" className="border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"/>
            <div class="flex flex-col space-y-2 w-full"> 
                <Input placeholder="Your password" className="border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"/>
                <router-link to="/reset-password" class="-mt-1 text-xs text-blackgray font-normal cursor-pointer hover:bg-transparent hover:underline hover:decoration-lightbrown hover:text-lightbrown"> 
                    Forgot password?
                </router-link>
            </div>
            
            <Button type="button" color="light" class="w-full" @click="onSignin"> Sign in </Button>
            <div class="flex flex-col space-y-2 w-full"> 
                <div class="flex justify-center w-full items-center space-x-4"> 
                    <div class="w-11 h-11 cursor-pointer">
                        <IconFacebook/>
                    </div>
                    <div class="w-8 h-8 cursor-pointer">
                        <IconGmail/>
                    </div>
                </div>
                <div class="flex justify-end">
                    <span class="text-blackgray text-xs font-normal"> Don't have an account?</span>
                    <router-link to="/sign-up" class="text-lightbrown text-xs font-normal cursor-pointer hover:bg-transparent hover:underline hover:decoration-lightbrown -mt-1"> Signup here.</router-link>
                </div>
            </div>
        </template>
    </Layout>
</template>
<style>
#header {
  background-image: url("../../assets/images/hero-bg.jpg");
}
</style>