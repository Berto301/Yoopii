<template>
    <div class="w-[48%] h-full bg-white rounded-md shadow-lg p-4 flex  flex-wrap mr-4 mb-4  flex-col text-black">
        <span class="font-medium text-blackgray text-2xl block">Transaction  List</span> 
        <table class="items-center mt-0 table-fixed w-full"> 
            <thead>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[15%]">Reference</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[10%]">Type</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[20%]">Propriety or Terrain</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[15%]">Customer</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[10%]">Bill</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[10%]">Date</th>
                <th class=" font-semibold text-blackgray text-xs  bg-gray-300 px-4 py-4 w-[20%]">Status</th>
            </thead>
            <tbody> 
                <tr class="border border-solid border-gray-300 border-t-0 border-x-0 "> 
                    <td class="py-4 px-4 font-normal text-xs">FA12385692</td>
                    <td class="py-4 px-4 font-normal text-xs">Location</td>
                    <td class="py-4 px-4 font-normal text-xs">
                        <div class="flex flex-col space-y-1 font-normal text-xs"> 
                            <span>- Maison Black</span>
                            <span>- Mahazoarivo</span>
                        </div>
                    </td>
                    <td class="py-4 px-4 font-normal text-xs">
                        <div class="flex flex-col space-y-1"> 
                            <span>- Berto Leka</span>
                            <span>- 0346628361</span>
                            <span>- 193265478962</span>
                        </div>
                    </td>
                    <td class="py-4 px-4 font-normal text-xs">200000 Ar</td>
                    <td class="py-4 px-4 font-normal text-xs">12/2/2024</td>
                    <td class="py-4 px-4 font-normal text-xs">
                        <div class="flex flex-col space-y-1 font-normal text-xs"> 
                            <span>- Payment Status : Paye</span>
                            <span>- Transaction State: Termine</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>