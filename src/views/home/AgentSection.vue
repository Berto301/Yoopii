<script setup>
import AgentCard from "../../components/AgentCards.vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

const agents = [
  {
    _id:1,
    name:"John Peters",
    job:"Property Agent, Altee"
  },
  {
    _id:2,
    name:"John Box",
    job:"Terrain Agent, Ingard"
  },
  {
    _id:1,
    name:"Johny Lee",
    job:"Property Agent, FOX"
  },
  {
    _id:1,
    name:"Frank BEX",
    job:"Terrain Agent, OOps"
  },
  {
    _id:1,
    name:"Whiskey Stone",
    job:"Terrain Agent, Altee"
  }
]
</script>

<template #addons>
  <div class="mt-16" id="#section_agents">
    <div class="w-full text-center">
        <h1 class="text-black font-semibold text-2xl"> Property and Terrain Agent</h1>
        <h5 class="text-blackgray font-normal text-sm">Let's contact an Agent with our platform</h5>
    </div>
    <div class="mt-2 flex flex-wrap justify-around space-x-1">
      <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
        <Slide v-for="agent in agents" :key="agent._id">
          <div class="carousel__item">
            <AgentCard :name="agent.name" :job="agent.job"/>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<style scoped>
.carousel{
  width: 100%;
}
.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
  display: block !important;
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
