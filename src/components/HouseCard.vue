<script setup>
defineProps({
    title: String,
    property:String
});
import HouseImage from '../assets/images/home.jpg'
</script>

<template>
   <div class="w-1/4 relative shadow-xl bg-white  rounded-lg flex flex-col  justify-between  mb-4 py-8 min-h-60">
        <div :style="{ backgroundImage: 'url(' + HouseImage + ')' }" class="min-h-40 bg-cover">

        </div>
        <div class="absolute top-10 left-5 bg-lightbrown px-2 pl-3 text-white">
            For sell
        </div>
        <div class="border border-solid border-x-0 border-b-0 rounded-t relative px-4 py-2">
            <div class="absolute -top-4 left-5 bg-white px-2 pl-3 text-lightbrown">
                Villa
            </div>
            <div class="flex flex-col space-y-4">
                <span class="text-sm font-medium text-lightbrown"> Ar 20000000</span>
                <span class="text-base font-semibold text-black"> Dark urban house</span>
                <div class=" flex items-center space-x-2">
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
                            fill="#9D5D43"
                        />
                        </svg>
                    </span>
                    <span class="text-sm font-normal text-gray-400"> Antsirabe 301</span>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2"> 
                        <span class="w-5 h2">
                            <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#9D5D43" d="M3 5V19M3 16H21M21 19V13.2C21 12.0799 21 11.5198 20.782 11.092C20.5903 10.7157 20.2843 10.4097 19.908 10.218C19.4802 10 18.9201 10 17.8 10H11V15.7273M7 12H7.01M8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z" stroke="#9D5D43" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span>3 Beds</span>
                    </div>
                    <div class="flex items-center space-x-2"> 
                        <span class="w-5 h2">
                            <svg  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#9D5D43" d="M464,280H80V100A51.258,51.258,0,0,1,95.113,63.515l.4-.4a51.691,51.691,0,0,1,58.6-10.162,79.1,79.1,0,0,0,11.778,96.627l10.951,10.951-20.157,20.158,22.626,22.626,20.157-20.157h0L311.157,71.471h0l20.157-20.157L308.687,28.687,288.529,48.844,277.578,37.893a79.086,79.086,0,0,0-100.929-8.976A83.61,83.61,0,0,0,72.887,40.485l-.4.4A83.054,83.054,0,0,0,48,100V280H16v32H48v30.7a23.95,23.95,0,0,0,1.232,7.589L79,439.589A23.969,23.969,0,0,0,101.766,456h12.9L103,496h33.333L148,456H356.1l12,40H401.5l-12-40h20.73A23.969,23.969,0,0,0,433,439.589l29.766-89.3A23.982,23.982,0,0,0,464,342.7V312h32V280ZM188.52,60.52a47.025,47.025,0,0,1,66.431,0L265.9,71.471,199.471,137.9,188.52,126.951A47.027,47.027,0,0,1,188.52,60.52ZM432,341.4,404.468,424H107.532L80,341.4V312H432Z" />
                            </svg>
                        </span>
                        <span>3 Baths</span>
                    </div>
                    <div class="flex items-center space-x-2"> 
                        <span class="w-5 h2 -rotate-90">
                            <svg fill="#9D5D43" 
                                 viewBox="0 0 512 512" >
                                <g>
                                    <rect x="128" y="128" fill-rule="evenodd" clip-rule="evenodd" width="64" height="64"/>
                                    <polygon fill-rule="evenodd" clip-rule="evenodd" points="368,128 368,160 352,160 352,128 336,128 336,144 320,144 320,128 
                                        304,128 304,160 288,160 288,128 272,128 272,144 256,144 256,128 240,128 240,160 224,160 224,128 208,128 208,192 384,192 
                                        384,128 	"/>
                                    <polygon fill-rule="evenodd" clip-rule="evenodd" points="128,224 144,224 144,240 128,240 128,256 160,256 160,272 128,272 
                                        128,288 144,288 144,304 128,304 128,320 160,320 160,336 128,336 128,352 144,352 144,368 128,368 128,384 192,384 192,208 
                                        128,208 	"/>
                                </g>
                            </svg>
                        </span>
                        <span>1000 m2</span>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>