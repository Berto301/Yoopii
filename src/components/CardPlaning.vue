<script setup>
import Home from "../assets/images/home.jpg";
import IconCalendar from "./icons/IconCalendar.vue";
import IconTime from "./icons/IconTime.vue";
import IconBill from "./icons/IconBills.vue";
import IconLocation from "./icons/IconLocation.vue";
import IconUser from "./icons/IconUser.vue";
</script>
<template>
  <div class="flex space-x-4">
    <div class="w-16 h-10 mt-2 rounded-lg overflow-hidden shadow-lg">
      <img :src="Home" class="bg-cover w-full h-full" />
    </div>
    <table className="w-full">
      <tbody>
        <tr className="flex justify-between items-center">
          <td className="text-sm text-greyColor font-medium">Type: VISIT</td>
          <td className="flex space-x-1 items-center">
            <div className="w-8 h-8">
              <IconCalendar />
            </div>
            <div className="font-normal text-xs text-greyColor">12/02/24</div>
          </td>
          <td className="flex space-x-1 items-center">
            <div className="w-8 h-8">
              <IconTime />
            </div>
            <div className="font-normal text-xs text-greyColor">14 h PM</div>
          </td>
        </tr>
        <tr className="flex justify-between items-center">
          <td className="flex space-x-1 items-center">
            <div className="w-5 h-5">
              <IconUser />
            </div>
            <span className="text-xs text-greyColor font-normal">Roberto</span>
          </td>
          <td className="flex space-x-1 items-center">
            <div className="w-5 h-5 ml-4"><IconLocation /></div>
            <span className="text-xs text-greyColor font-normal"
              >Mahazoarivo</span
            >
          </td>
          <td className="flex space-x-1 items-center">
            <div className="w-5 h-5 mr-2"><IconBill /></div>
            <span className="text-xs text-greyColor font-normal">3000 Ar</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
