<script setup>
const currentYear = new Date().getFullYear();
import Dots from "../../assets/images/dots.png";
import Input from "../../components/designSystem/Input.vue";
import TextArea from "../../components/designSystem/TextArea.vue";
import Button from "../../components/designSystem/Button.vue";
defineProps({
  dataHeader: Object,
});
</script>

<template>
  <div class="bg-black min-h-80 flex text-white">
    <div class="w-1/5 flex flex-col pr-8">
      <div
        class="w-2/3 h-3/5"
        :style="{ backgroundImage: 'url(' + Dots + ')' }"
      ></div>
      <div class="w-1/3"></div>
    </div>
    <div class="w-4/5 flex flex-col py-8">
      <div class="flex justify-around">
        <div class="w-1/3 flex flex-col space-y-4">
          <span class="text-2xl font-medium"> Get In Touch </span>
          <div class="flex items-center space-x-4">
            <span>
              <svg
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.22094 16C5.09845 15.0425 4.058 13.9929 3.11047 12.862C1.68854 11.1637 7.85316e-07 8.63441 7.85316e-07 6.22424C-0.00125954 3.70702 1.51457 1.43713 3.84016 0.473778C6.16574 -0.489573 8.84268 0.0435046 10.6218 1.82426C11.7918 2.989 12.4471 4.57337 12.4419 6.22424C12.4419 8.63441 10.7533 11.1637 9.33141 12.862C8.38389 13.9929 7.34344 15.0425 6.22094 16ZM6.22094 3.55812C5.26843 3.55812 4.38827 4.06628 3.91202 4.89118C3.43576 5.71608 3.43576 6.7324 3.91202 7.5573C4.38827 8.3822 5.26843 8.89036 6.22094 8.89036C7.6934 8.89036 8.88706 7.69669 8.88706 6.22424C8.88706 4.75178 7.6934 3.55812 6.22094 3.55812Z"
                  fill="#ffffff"
                />
              </svg>
            </span>
            <span class="text-sm font-normal text-gray-400">
              ATSIRABE 110, Mahazoarivo</span
            >
          </div>
          <div class="flex items-center space-x-4">
            <span>
              <svg
                width="13"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
            <span class="text-sm font-normal text-gray-400">
              +261 34 66 283 61</span
            >
          </div>
          <div class="flex items-center space-x-4">
            <span>
              <svg
                width="13"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
            <span class="text-sm font-normal text-gray-400">
              ratsimandresyhajatiana@gmail.com</span
            >
          </div>
        </div>
        <div class="w-1/3 flex flex-col space-y-4">
          <span class="text-2xl font-medium"> Quick Links </span>
          <div class="flex flex-col space-y-2">
            <button
              @click="dataHeader.homeClick"
              class="flex hover:text-lightbrown hover:bg-transparent text-white text-xs cursor-pointer"
            >
              Home
            </button>
            <button
              @click="dataHeader.terrainClick"
              class="flex hover:text-lightbrown hover:bg-transparent text-white text-xs cursor-pointer"
            >
              Property & Terrain
            </button>
            <button
              @click="dataHeader.agentsClick"
              class="flex hover:text-lightbrown hover:bg-transparent text-white text-xs cursor-pointer"
            >
              Agents
            </button>
            <button
              @click="dataHeader.testimonyClick"
              class="flex hover:text-lightbrown hover:bg-transparent text-white text-xs cursor-pointer"
            >
              Testimony
            </button>
            <button
              @click="dataHeader.aboutClick"
              class="flex hover:text-lightbrown hover:bg-transparent text-white text-xs cursor-pointer"
            >
              About
            </button>
          </div>
        </div>
        <div class="w-1/3 flex flex-col space-y-4">
          <div class="flex flex-col space-y-2">
            <span class="text-2xl font-medium"> Newsletter </span>
            <span class="text-sm font-normal"> Send your recommandation </span>
          </div>

          <div class="flex flex-col space-y-2 text-black pr-8">
            <Input placeholder="Your email" />
            <TextArea placeholder="Your feedback" />
            <Button color="light"> Send </Button>
          </div>
        </div>
      </div>
      <div class="w-full text-center">
        Copyright &copy; {{ currentYear }} All rights reserved to Berto Leka
      </div>
    </div>
  </div>
</template>
