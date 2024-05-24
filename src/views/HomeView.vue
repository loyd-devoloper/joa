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
      <h1 class=" pb-10 text-2xl font-Roboto_bold opacity-90 ">Available Job</h1>

      <!-- available job -->
      <div class="grid grid-cols-3 gap-10">
        <div class="border p-4 rounded-md shadow-md hover:scale-105 transition-all ease-in-out duration-500 relative h-[19rem]">
          <!-- status -->
          <span
            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 absolute font-Roboto_bold top-2 right-0">Open</span>

          <h1 class=" font-Roboto_bold text-xl max-w-[88%] pb-2">Programmer 1 dsadadad adsadjs jalkdjalsjdl</h1>
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

        <div class="border p-4 rounded-md shadow-md hover:scale-105 transition-all ease-in-out duration-500 relative h-[19rem]">
          <!-- status -->
          <span
            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 absolute font-Roboto_bold top-2 right-0">Open</span>

          <h1 class=" font-Roboto_bold text-xl max-w-[88%] pb-2">Programmer 1 dsadadad adsadjs jalkdjalsjdl</h1>
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

      </div>
    </section>
    <!-- footer -->
    <Footer />
  </div>
</template>
