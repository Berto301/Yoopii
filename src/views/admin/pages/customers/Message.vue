<script setup>
import Agent from "../../../../assets/images/agent.jpg";
import { formatRelative, subDays } from 'date-fns'
import { enUS } from 'date-fns/locale'
import moment from "moment-timezone";
import TextArea from "../../../../components/designSystem/TextArea.vue"
import Button from "../../../../components/designSystem/Button.vue"
import IconSend from "../../../../components/icons/IconSend.vue"
import IconAttach from "../../../../components/icons/IconAttach.vue"
import IconVisit from "../../../../components/icons/IconVisit.vue"
</script>
<template>
  <div class="w-1/2 relative bg-white rounded-md shadow-lg p-2">
    <div
      class="bg-gray-300 px-2 py-3 text-lightbrown text-lg font-bold flex items-center justify-start space-x-4 rounded-md"
    >
      <div class="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
        <img :src="Agent" class="bg-cover w-full h-full" />
      </div>
      <div class="flex flex-col space-y-1">
        <span>Chat with Roberto</span>
        <span class="font-normal text-xs">1400 messages</span>
      </div>
    </div>
    <!--CONTENT MESSAGE-->
    <div class="mt-2 flex flex-col space-y-2">
      <div class="flex max-w-[80%] justify-start flex-col space-y-1">
        <span class="text-lightbrown text-xs font-semibold">
          Roberto
          <span class="font-normal ml-3">
            {{
             formatRelative(subDays(new Date(), 3), new Date(), { locale: enUS })
            }}
          </span>
        </span>
        <div class="p-3 bg-lightbrown text-white font-normal text-sm rounded-lg">date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.</div>
      </div>
      <div class="w-full flex justify-end "> 
        <div class="flex max-w-[80%] flex-col space-y-1"> 
          <span class="text-lightbrown text-xs font-semibold">
            Me
            <span class="font-normal ml-3">
              {{
               formatRelative(new Date(),new Date(), { locale: enUS })
              }}
            </span>
          </span>
          <div class="p-3 bg-gray-300 text-lightbrown font-normal text-sm rounded-lg">date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js</div>
        </div>
      </div>
    </div>
    <!--CONTENT SEND-->
    <div class="absolute bottom-0 px-2 py-3 w-[98%]"> 
      <TextArea class="w-full border border-solid border-gray-300" placeholder="Say something"/> 
      <div class="flex justify-between items-center">
        <div class="w-8 h-8 cursor-pointer"> 
         <IconVisit/>
        </div>
        <div class="w-8 h-8 cursor-pointer"> 
          <IconAttach/>
        </div>
        <div class="w-8 h-8 cursor-pointer"> 
          <IconSend/>
        </div>
      </div>
    </div>
  </div>
</template>
