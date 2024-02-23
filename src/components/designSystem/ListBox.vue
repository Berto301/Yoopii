
  <script setup>
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption
  } from "@headlessui/vue";
  import { ref } from 'vue'
const props = defineProps({
    lists: {
        type: Array,
        default: [],
    },
    selected:Object,
    modelValue:{
      type: String,
      default: "type"
    }
});

const {
lists,
selected
} = props
const selectedValue = ref(selected)

</script>
<template>
   <div class="w-full">
    <Listbox v-model="selectedValue">
      <div class="relative">
        <ListboxButton
          class="w-full h-14 border placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10"
        >
          <span class="block truncate">{{ selectedValue.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
          <span class="h-2 w-2 text-gray-400 -mt-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" ><path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" /></svg></span>
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="item in lists"
              :key="item._id"
              :value="item"
              as="template"
              @click="$emit('handleClick', item)"
            >
              <li
                :class="[
                  active ? 'bg-lightbrown text-blackgray' : 'text-gray-900',
                  'relative cursor-pointer select-none py-2 pl-10 pr-4 hover:bg-lightbrown hover:text-white',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ item.name }}</span
                >
                
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    </div>
</template>