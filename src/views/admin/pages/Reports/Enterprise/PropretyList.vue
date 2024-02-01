<template>
    <div class="w-[48%] h-full bg-white rounded-md shadow-lg p-4 flex  flex-wrap mr-4 mb-4  flex-col text-black">
        <span class="font-medium text-blackgray text-2xl block"> Proprety and Terrain List</span> 
        <table class="items-center mt-0 table-fixed w-full"> 
            <thead>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[15%]">Agent</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[15%]">Type</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[10%]">Name</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[20%]">Details</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[15%]">Status</th>
            </thead>
            <tbody> 
                <tr class="border border-solid border-gray-300 border-t-0 border-x-0 ">
                    <td class="py-4 px-4 font-normal text-xs text-center">Torbe</td> 
                    <td class="py-4 px-4 font-normal text-xs text-center">Terrain</td>
                    <td class="py-4 px-4 font-normal text-xs text-center">Black House</td>
                    <td class="py-4 px-4 font-normal text-xs text-center">
                        <div class="flex flex-col space-y-1 font-normal text-xs"> 
                            <span>- Mahazoarivo</span> 
                            <span>- 400 m2</span>
                            <span>- 3 douches</span>
                        </div>
                    </td>
                    <td class="py-4 px-4 font-normal text-xs text-center">
                        En Discussion
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>