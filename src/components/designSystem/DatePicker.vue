<script setup>
import { useConfiguration } from "@/stores";
import { ref } from "vue";

const {currentConfiguration} = useConfiguration() 
const props = defineProps({
  selected:Date
})
const {
selected
} = props
const selectedValue = ref(selected)
const emit = defineEmits(['update:modelValue']);
const onChangeDate = (date) => {
  selectedValue.value = date
   emit("update:modelValue",date);
};
console.log({selectedValue})
// :masks="{ L: currentConfiguration.format || 'YYYY-MM-DD' }"
</script>
<template>
    <div class="relative w-full">
      <VDatePicker v-model="selectedValue"  @update:modelValue="onChangeDate" color="gray" 
                :masks="{ L: currentConfiguration.format }">
          <template #default="{ inputValue, inputEvents }">
            <Input className=" w-full h-14 border   placeholder:text-[#dfc5b9] border-lightbrown border-solid text-blackgray outline-none rounded-md  shadow-sm py-[0.4rem] pl-3 pr-10 m-0" :value="inputValue" v-on="inputEvents" placeholder="Date of Birth" />
          </template>
      </VDatePicker>
    </div>
</template>
