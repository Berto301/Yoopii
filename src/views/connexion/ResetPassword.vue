<script setup>
import Layout from "./Layout.vue";
import Input from "../../components/designSystem/Input.vue";
import Button from "../../components/designSystem/Button.vue";
import IconFacebook from "../../components/icons/IconFacebook.vue";
import IconGmail from "../../components/icons/IconGmail.vue";
</script>

<template>
  <Layout>
    <template #title>
        <div class="flex flex-col space-y-2">
            <h1 class="uppercase text-lightbrown font-semibold text-xl">
              RESET PASSWORD
            </h1>
            <h5 class="text-blackgray text-sm font-normal">Enter the email address of your Yoopii account and we will send you a temporary link to reset your password</h5>
        </div>
    </template>
    <template #content>
      <Input
        placeholder="Email"
        className="border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md w-full shadow-sm py-[0.4rem] pl-3 pr-10"
      />
      
      <Button type="button" color="light" class="w-full"> Send </Button>
      <div class="w-full flex justify-end">
        <span class="text-blackgray text-xs font-normal">
          Already have an account?</span
        >
        <router-link to="/sign-in" class="-mt-1 text-lightbrown text-xs font-normal cursor-pointer hover:bg-transparent hover:underline hover:decoration-lightbrown">
          Sign in here.</router-link
        >
      </div>
    </template>
  </Layout>
</template>
<style>
#header {
  background-image: url("../../assets/images/hero-bg.jpg");
}
</style>
