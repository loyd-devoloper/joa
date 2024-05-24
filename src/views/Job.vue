<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
const route = useRoute();
const step = ref(1);
const modalSuccess = ref(false);
</script>

<template class="">
  <div class="font-Roboto">
    <Header />




    <div class="bg-gray-100 ">
      <div class="w-full max-w-screen-lg mx-auto p-8">
        <div class="bg-white  p-8 rounded-lg shadow-md border ">
          <div class="flex justify-between">
            <h1 class="text-2xl font-bold text-gray-800/70  mb-4 uppercase ">{{ route.params.id }}</h1>
            <h1 class="text-base font-bold text-gray-800/60  mb-4 uppercase">{{ step }}/2</h1>

          </div>
          <!-- Shipping Address -->
          <div v-show="step == 1" class="mb-6">
            <h1 class="text-center text-xl font-Roboto_bold">Basic Information</h1>
            <div class="grid grid-cols-2 gap-4 pt-10">
              <div>
                <label for="fname" class="block text-gray-700  mb-1">Fullname</label>
                <input type="text" id="fname" class="w-full rounded-lg border py-2 px-3  ">
              </div>
              <div>
                <label for="email" class="block text-gray-700  mb-1">Email</label>
                <input type="email" id="email" class="w-full rounded-lg border py-2 px-3  ">
              </div>
            </div>
            <div class="mt-4">
              <label for="mobile_number" class="block text-gray-700  mb-1">Mobile Number</label>
              <input type="text" id="mobile_number" class="w-full rounded-lg border py-2 px-3  ">
            </div>
            <div class="mt-4">
              <label for="address" class="block text-gray-700  mb-1">Complete Address</label>
              <textarea type="text" id="address" class="w-full rounded-lg border py-2 px-3  "></textarea>

            </div>


          </div>
          <div v-show="step == 2" class="mb-6">
            <h1 class="text-center text-xl font-Roboto_bold">Application shall upload the ff: documents</h1>

            <div class="mt-4">
              <label for="mobile_number" class="block text-gray-700 text-sm mb-1">Letter of intent addressed to the
                Regional
                Director. Please include the position and its item number with corresponding Functional
                Division/Section/Unit</label>
              <input type="file" id="mobile_number" class="w-full rounded-lg border py-2 px-3  " required accept="application/pdf">
            </div>



            <div class="mt-4">

              <input type="checkbox" id="mobile_number" class=" py-2 px-3 mr-2">
              <span class="text-xs font-Roboto_bold">CERTIFICATION OF AUTHENTICITY AND VERACITY</span>
              <p class="text-sm opacity-70 pl-6">I hereby certify that all information above are true and correct, and
                of my personal knowledge amd belief, and the documents submitted herewith are original and/or certified
                true copies thereof.</p>
            </div>
            <div class="mt-4">

              <input type="checkbox" id="mobile_number" class=" py-2 px-3 mr-2">
              <span class="text-xs font-Roboto_bold">DATA PRIVACY CONTENT</span>
              <p class="text-sm opacity-70 pl-6">I hereby certify that all information above are true and correct, and
                of my personal knowledge amd belief, and the documents submitted herewith are original and/or certified
                true copies thereof.</p>
            </div>
          </div>

          <div class="mt-8 flex " :class="step == 1 ? 'justify-end' : 'justify-between'">
            <button v-show="step == 2" @click="step = 1"
              class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 ">Prev</button>
            <button v-show="step != 2" @click="step++"
              class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 ">Next</button>
            <button v-show="step == 2" type="submit" @click="modalSuccess = true"
              class="bg-[#04508c] text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-600 ">SUBMIT
              APPLICATION</button>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <Footer />


    <!-- modal -->
    <div v-show="modalSuccess" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div class="sm:flex sm:items-start">
            <div
              class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Successfully Submited!


              </h3>
              <div class="mt-2">
                <p class="text-sm leading-5 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  mollitia inventore quod. Yay!
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">

            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button type="button" @click="modalSuccess = false"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                Close
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>