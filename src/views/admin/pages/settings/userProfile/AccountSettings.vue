<script setup>
import Disclosure from "@/components/Disclosure.vue";
import Label from "@/components/designSystem/Label.vue";
import ListBox from "@/components/designSystem/ListBox.vue";
import Button from "@/components/designSystem/Button.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconGmail from "@/components/icons/IconGmail.vue";
</script>
<template>
  <Disclosure>
    <template #title>Account Settings</template>
    <template #content>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <Label value="Language" />
          <div class="w-72">
            <ListBox />
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <Label value="Update Password" />
          <div class="flex flex-wrap">
            <Input
              placeholder="Actual Password"
              className=" w-[32%] h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            />
            <Input
              placeholder="New Password"
              className=" w-[32%] h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            />
            <Input
              placeholder="Confirm Password"
              className=" w-[32%] h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-lightbrown outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-2"
            />
            <!-- <Button type="button" color="light" class="w-[24%] h-14 mb-0 mt-2">
              Update
            </Button> -->
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <Label value="Synchronisation" />
          <div class="flex space-x-2">
            <div
              class="border border-solid border-lightbrown px-8 py-3 flex items-center justify-center space-x-2"
            >
              <div class="w-10 h-10">
                <IconFacebook />
              </div>
              <span class="text-sm text-blackgray font-medium"> Sign in with Facebook</span>
            </div>
            <div
              class="border border-solid border-lightbrown px-8 py-3 flex items-center justify-center space-x-2"
            >
              <div class="w-10 h-10">
                <IconGmail />
              </div>
              <span class="text-sm text-blackgray font-medium"> Sign in with Google</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Disclosure>
</template>
