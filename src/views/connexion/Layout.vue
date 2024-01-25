<template>
    <div
      class="min-h-screen bg-cover flex w-full bg-[#F9FAFC]"
      id="#section_login"
    >  
        <router-link to="/"  class="mt-4 pl-4 flex items-start space-x-2 cursor-pointer hover:bg-transparent"> 
            <img src="@/assets/logo/yoopii.png" class="object-cover"/>
            <span class="block text-lightbrown text-lg font-bold">Yoopii</span>
        </router-link>
      <div class="flex items-center justify-center w-1/2 px-12 ">
        <div class="flex items-start flex-col space-y-8 justify-start bg-white  p-8 w-2/3">
         <slot name="title"></slot>
         <slot name="content"></slot>
        </div>
      </div>
      <div class="bg-cover w-1/2" id="header"></div>
    </div>
</template>
<style>
#header {
  background-image: url("../../assets/images/hero-bg.jpg");
}
</style>