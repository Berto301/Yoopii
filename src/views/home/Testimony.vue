<script setup>
import Agent from "../../assets/images/agent.jpg";
import Dots from "../../assets/images/dots.png"
</script>

<template>
  <div class="py-32 flex">
    <div class="w-1/5" :style="{ backgroundImage: 'url(' + Dots + ')' }">

    </div>
    <div class="w-3/5 px-4">
      <div class="w-full">
          <h1 class="text-black font-semibold text-2xl"> Our Client Say!</h1>
          <h5 class="text-blackgray font-normal text-sm">The testimonials and feedback for our services.</h5>
      </div>
      <div class="flex space-x-8 min-h-20 mt-8"> 
        <div class="w-1/6 flex justify-end items-center"> 
          <div class="w-[8.688rem] h-[8.4rem] rounded-full overflow-hidden shadow-lg border border-solid border-lightbrown" >
            <img :src="Agent" class="bg-cover w-full h-full"/>
          </div>
        </div>
        <div class="w-5/6 pr-[30%]"> 
          <div class="flex flex-col space-y-4">
            <span class="text-lg font-medium text-lightbrown"> 
              John Doe
            </span>
            <span class="text-sm font-normal text-blackgray">
              Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum
            </span>
          </div>
        </div>
    </div>
    <div class="w-1/5">

    </div>
    </div>
  </div>
</template>
