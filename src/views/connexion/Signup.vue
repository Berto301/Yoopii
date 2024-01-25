<script setup>
import Layout from "./Layout.vue";
import Input from "../../components/designSystem/Input.vue"
import Button from "../../components/designSystem/Button.vue"
import IconFacebook from "../../components/icons/IconFacebook.vue";
import IconGmail from "../../components/icons/IconGmail.vue";
</script>

<template>
     <Layout>
        <template #title> 
            <h1 class="uppercase text-lightbrown font-semibold text-xl">SIGNUP</h1>
        </template>
        <template #content>
            <Input placeholder="Email" className="border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"/>
            <Input placeholder="Name" className="border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"/>
            <Input placeholder="Your password" className="border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"/>
            <Input placeholder="Confirm password" className="border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"/>
            <Button type="button" color="light" class="w-full"> Register </Button>
            <div class="flex flex-col space-y-2 w-full"> 
                <div class="flex justify-end">
                    <span class="text-blackgray text-xs font-normal"> Already have an account?</span>
                    <router-link to="/sign-in" class="-mt-1 text-lightbrown text-xs font-normal cursor-pointer hover:bg-transparent hover:underline hover:decoration-lightbrown"> Sign in here.</router-link>
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