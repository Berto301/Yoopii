<script setup>
import Header from "./Header.vue";
import Button from "../../components/designSystem/Button.vue";
import Filter from "./Filter.vue";
import PropretyTypes from "./PropertyTypes.vue";
import PropretyTab from "./PropertyTab.vue";
import HouseCard from "../../components/HouseCard.vue";
import AgentSection from "./AgentSection.vue";
import TestimonyVue from "./Testimony.vue";
import Footer from "./Footer.vue";
import About from "./About.vue";
import { ref } from "vue";

// Here's our template ref typed as HTMLElement or null
const homeRef = ref(null);
const aboutRef = ref(null);
const terrainRef = ref(null);
const agentsRef = ref(null);
const testimonyRef = ref(null);

// Using scrollIntoView() function to achieve the scrolling
function scrollTo(view) {
  view?.value?.scrollIntoView({ behavior: "smooth" });
}
const dataHeader = {
  homeClick: () => scrollTo(homeRef),
  aboutClick: () => scrollTo(aboutRef),
  terrainClick: () => scrollTo(terrainRef),
  agentsClick: () => scrollTo(agentsRef),
  testimonyClick: () => scrollTo(testimonyRef),
};
</script>

<template>
  <main class="flex flex-col p-4 bg-red w-full">
    <Header :dataHeader="dataHeader" />
    <div
      class="min-h-screen bg-cover flex w-full"
      id="#section_home"
      ref="homeRef"
    >
      <div class="flex items-center justify-center w-1/2 px-12">
        <div class="flex items-start flex-col space-y-8 justify-start">
          <h1 class="text-7xl text-black font-semibold">
            Find A
            <span class="text-lightbrown font-semibold">
              Perfect Home or Terrain</span
            >
            To Live With Your Family
          </h1>
          <h2 class="text-blackgray text-lg pr-[5%]">
            The shoorted distance between paradise and the place you call home
          </h2>
          <Button type="button" color="light"> Sign in </Button>
        </div>
      </div>
      <div class="bg-cover w-1/2" id="header"></div>
    </div>
    <Filter />
    <PropretyTab />
    <div class="mt-4 flex w-full space-x-8 min-h-[70vh]">
      <div id="square" class="w-1/2 bg-contain bg-no-repeat"></div>
      <div class="w-1/2 flex items-center justify-center">
        <div class="flex flex-col justify-start space-y-4 px-16">
          <span class="capitalize text-black font-semibold text-2xl">
            First Place to find the perfect property and terrain</span
          >
          <div class="text-black font-normal text-lg">
            The shorted distance between paradise and the place you call home.
            We are a platform for finding your dream house to your family.
          </div>
          <ul id="list" class="text-blackgray font-normal text-sm space-y-4">
            <li>Modern home</li>
            <li>Abordable price</li>
            <li>Right papers</li>
          </ul>
          <div class="w-48">
            <Button type="button" color="light"> Read more </Button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex w-full justify-end space-x-2" ref="terrainRef">
      <Button type="button" color="light"> Featured </Button>
      <Button type="button" color="white"> For sell </Button>
      <Button type="button" color="white"> Allocate </Button>
    </div>
    <div class="mt-2 flex flex-wrap justify-between space-x-1">
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
    </div>
    <div class="mt-4 flex justify-center w-full">
      <Button type="button" color="light"> Browse More Property </Button>
    </div>
    <div ref="agentsRef">
      <AgentSection />
    </div>
    <div ref="testimonyRef">
      <TestimonyVue />
    </div>
    <div ref="aboutRef">
      <About />
    </div>
    <Footer :dataHeader="dataHeader" />
  </main>
</template>
<style>
#header {
  background-image: url("../../assets/images/hero-bg.jpg");
}
#square {
  background-image: url("../../assets/images/squareHouse.png");
}
/* #inSquare{
  background-image:  url('../../assets/images/squareHouse.png')
} */
#list {
  list-style: none;
}

#list li:before {
  content: "✓";
  color: "#9D5D43";
}
</style>
