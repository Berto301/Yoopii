<script setup>
defineProps({
  title: String,
  property: String,
  classParent: {
    type: String ,
    default:"w-1/4 relative shadow-xl bg-white rounded-lg flex flex-col justify-between mb-4 py-8 min-h-60"
  },
  showAction:{
    type: Boolean,
    default: false
  }
});
import HouseImage from "../assets/images/home.jpg";
import IconRules from "../components/icons/IconRules.vue";
import IconBaths from "../components/icons/IconBaths.vue";
import IconLocation from "../components/icons/IconLocation.vue";
import IconBeds from "../components/icons/IconBed.vue";
import IconEdit from "../components/icons/IconEdit.vue";
import IconDelete from "../components/icons/IconDelete.vue";
</script>

<template>
  <div
    :class="classParent"
  >
    <div
      :style="{ backgroundImage: 'url(' + HouseImage + ')' }"
      class="min-h-40 bg-cover"
    ></div>
    <div class="absolute top-10 left-5 bg-lightbrown px-2 pl-3 text-white">
      For sell
    </div>
    <div class="absolute top-10 right-5  px-2 pl-3 text-white flex space-x-2" v-if="showAction">
      <div class="w-5 h-5"> 
        <IconEdit/>
      </div>
      <div class="w-5 h-5"> 
        <IconDelete/>
      </div>
    </div>
    <div
      class="border border-solid border-x-0 border-b-0 rounded-t relative px-4 py-2"
    >
      <div class="absolute -top-4 left-5 bg-white px-2 pl-3 text-lightbrown">
        Villa
      </div>
      <div class="flex flex-col space-y-4">
        <span class="text-sm font-medium text-lightbrown"> Ar 20000000</span>
        <span class="text-base font-semibold text-black">
          Dark urban house</span
        >
        <div class="flex items-center space-x-2">
          <span>
            <IconLocation />
          </span>
          <span class="text-sm font-normal text-blackgray"> Antsirabe 301</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="w-5">
              <IconBeds />
            </span>
            <span class="text-blackgray font-normal text-sm">3 Beds</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="w-5">
              <IconBaths />
            </span>
            <span class="text-blackgray font-normal text-sm">3 Baths</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="w-5  -rotate-90">
              <IconRules />
            </span>
            <span class="text-blackgray font-normal text-sm">1000 m2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
