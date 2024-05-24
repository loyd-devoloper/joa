<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import { useRoute, useRouter } from 'vue-router';
import { onBeforeMount, onMounted, ref } from 'vue';
const route = useRoute();
const router = useRouter();


</script>

<template class="">

  <div class="font-Roboto">
    <Header />
    <section class="max-w-screen-xl mx-auto py-20">
      <div class="relative w-[40rem] mx-auto  rounded-full">
        <input placeholder="Programmer III"
          class="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200"
          type="text" name="query" id="query">
        <button type="submit"
          class="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
          <svg class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Search
        </button>
      </div>
      <h1 class=" pb-10 text-2xl text-center pt-10 font-Roboto_bold opacity-90 ">Available Job</h1>

      <!-- available job -->
      <div class="grid grid-cols-3 gap-10">
        <div
          class="border p-4 rounded-md shadow-md hover:scale-105 transition-all ease-in-out duration-500 relative h-[19rem]" >
          <!-- status -->
          <span
            class="bg-red-100 text-red-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  absolute font-Roboto_bold top-2 right-0">Close</span>

          <h1 class=" font-Roboto_bold text-xl max-w-[88%] pb-2">Programmer 1</h1>
          <hr class="">
          <p class=" px-2 pt-4 opacity-80 ">Description</p>
          <p class="px-4 mb-10 text-sm opacity-70 line-clamp-5">Role Overview
            Experienced Web Developer specializing in C#, Shopify, and API integration with NAV ERP. Responsible for
            designing, developing, and maintaining our e-commerce platform, ensuring seamless integration with our NAV
            ERP system. Additionally, involved in administering the bespoke B2B and Shopify portals and providing
            support to its users.</p>
          <div class="absolute bottom-4 right-3">
            <router-link :to="{ name: 'job', params: { id: 'programing 1' } }"
              class="flex items-end gap-2 hover:text-blue-500 text-blue-700">
              Apply now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>

            </router-link>
          </div>
        </div>

        <div
          class="border p-4 rounded-md shadow-md hover:scale-105 transition-all ease-in-out duration-500 relative h-[19rem]">
          <!-- status -->
          <span
            class="bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  absolute font-Roboto_bold top-2 right-0">Open</span>

          <h1 class=" font-Roboto_bold text-xl max-w-[88%] pb-2">Programmer 2</h1>
          <hr class="">
          <p class=" px-2 pt-4 opacity-80 ">Description</p>
          <p class="px-4 mb-10 text-sm opacity-70 line-clamp-5">Role Overview
            Experienced Web Developer specializing in C#, Shopify, and API integration with NAV ERP. Responsible for
            designing, developing, and maintaining our e-commerce platform, ensuring seamless integration with our NAV
            ERP system. Additionally, involved in administering the bespoke B2B and Shopify portals and providing
            support to its users.</p>
          <div class="absolute bottom-4 right-3">
            <router-link :to="{ name: 'job', params: { id: 'programing 2' } }"
              class="flex items-end gap-2 hover:text-blue-500 text-blue-700">
              Apply now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>

            </router-link>
          </div>
        </div>

      </div>
    </section>
    <!-- footer -->
    <Footer />
  </div>
</template>
