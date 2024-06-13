<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import { useRoute, useRouter } from 'vue-router';
import { onBeforeMount, onMounted, ref } from 'vue';
import moment from 'moment';
import axios from 'axios';
const route = useRoute();
const router = useRouter();
const backendurl = ref(import.meta.env.VITE_BACKEND);
const jobs = ref([]);
const loading = ref(true);
const search = ref('');
const prevPage = ref(null);
const nextPage = ref(1);
const maincontainer = ref(null)
const fetchUser = async (page = 1) => {
  maincontainer.value.scrollIntoView({ behavior: 'smooth' });
  loading.value = true;
  const { data } = await axios.get(`${import.meta.env.VITE_BACKEND}/api/jobs?page=${page}&q=${search.value}`);

  if (!!data.prev_page_url) {
    prevPage.value = data.prev_page_url.split('?page=')[1];
  } else {
    prevPage.value = null; nextPage
  }
  if (!!data.next_page_url) {
    nextPage.value = data.next_page_url.split('?page=')[1];
  } else {
    nextPage.value = null;
  }

  jobs.value = data.data;
  loading.value = false;

}

const searchJob = async () => {

  fetchUser();

}
onMounted(() => {
  fetchUser();

})
</script>

<template class="">

  <div class="font-Roboto" ref="maincontainer">
    <Header />
    <div class="bg-gray-100 min-h-[calc(100svh-24.5rem)]">
      <section class="max-w-screen-xl mx-auto py-20 ">
        <form @submit.prevent="searchJob()" class="relative w-[40rem] mx-auto  rounded-full">
          <input placeholder="ex: Programmer III" v-model="search"
            class="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 bg-white shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200"
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
        </form>
        <h1 class=" pb-10 text-2xl text-center pt-10 font-Roboto_bold opacity-90 ">Available Job</h1>

        <!-- available job -->
        <div class="grid grid-cols-3 gap-10">
          <div v-if="loading" class="py-4 rounded shadow-md h-[19rem]  animate-pulse bg-gray-50">
            <div class="flex p-4 space-x-4 sm:px-8 ">

              <div class="flex-1 py-2 space-y-4">
                <div class="w-full h-3 rounded bg-gray-300"></div>
                <div class="w-5/6 h-3 rounded bg-gray-300"></div>
              </div>
            </div>
            <div class="p-4 space-y-4 sm:px-8">
              <div class="w-full h-4 rounded bg-gray-300"></div>
              <div class="w-full h-4 rounded bg-gray-300"></div>
              <div class="w-3/4 h-4 rounded bg-gray-300"></div>
            </div>
          </div>
          <div v-if="loading" class="py-4 rounded shadow-md h-[19rem]  animate-pulse bg-gray-50">
            <div class="flex p-4 space-x-4 sm:px-8 ">

              <div class="flex-1 py-2 space-y-4">
                <div class="w-full h-3 rounded bg-gray-300"></div>
                <div class="w-5/6 h-3 rounded bg-gray-300"></div>
              </div>
            </div>
            <div class="p-4 space-y-4 sm:px-8">
              <div class="w-full h-4 rounded bg-gray-300"></div>
              <div class="w-full h-4 rounded bg-gray-300"></div>
              <div class="w-3/4 h-4 rounded bg-gray-300"></div>
            </div>
          </div>

          <div v-if="loading == false" v-for="jobItem in jobs" :key="jobItem"
            class="border p-4 bg-white rounded-md shadow-md hover:scale-105 transition-all ease-in-out duration-500 relative min-h-[19rem]">
            <!-- status -->
            <!-- <span v-if="jobItem.status"
              class="bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  absolute font-Roboto_bold top-2 right-0">
              Open</span>
            <span v-else
              class="bg-red-100 text-red-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  absolute font-Roboto_bold top-2 right-0">Close</span> -->

            <h1 class=" font-Roboto_bold text-2xl max-w-[88%] pb-2">{{ jobItem.job_title }}</h1>
          <hr>
            <div class="space-y-3 mt-3">
              <!-- status  -->
              <div class="flex items-center gap-2">
                <p class="text-gray-500">Status:</p>
                <span v-if="jobItem.status"
                  class="bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  font-Roboto_bold flex items-center  gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  Open</span>
                  <span v-else
                  class="bg-red-100 text-red-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  font-Roboto_bold flex items-center  gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  Close</span>
              </div>

              <!-- posted -->
              <div class="flex items-center gap-2">
                <p class="text-gray-500">Posted:</p>
               <p>{{ moment(jobItem.created_at).fromNow() }}</p>
              </div>
              <!-- close date -->
              <div class="flex items-center gap-2">
                <p class="text-gray-500">Close Date:</p>
               <p>{{ moment(jobItem.expiration_date).format('ll') }}</p>
              </div>
            </div>
            <div class="absolute bottom-4 right-3">
              <router-link :to="{ name: 'job', params: { position: jobItem.job_title, id: jobItem.job_id } }"
                class="flex items-end gap-2 hover:text-blue-500 text-blue-700">
                Apply now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </router-link>
            </div>
          </div>
          <h1 v-show="jobs.length == 0 && loading == false">No Job Found!</h1>


        </div>
        <div class="w-full py-10 flex justify-between" v-show="!!prevPage && !!nextPage">
          <button @click="fetchUser(prevPage)" :disabled="prevPage == null ? true : false"
            class="bg-[#04508c] text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-600 "
            :class="prevPage == null ? 'opacity-50' : 'opacity-100'">Prev</button>
          <button @click="fetchUser(nextPage)" :disabled="nextPage == null ? true : false"
            class="bg-[#04508c] text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-600 "
            :class="nextPage == null ? 'opacity-50' : 'opacity-100'">Next</button>
        </div>
      </section>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>
