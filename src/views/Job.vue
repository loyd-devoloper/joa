<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import moment from 'moment';
import axios from 'axios';
const route = useRoute();
const step = ref(2);
const successModal = ref(null);
const jobInfo = ref([]);
const loading = ref(true)
const data = reactive({
  fname: '',
  email: '',
  mobile_number: '',
  address: '',
  letter_of_intent: null,
  pds: null,

})
// refs
const fname = ref(null)
const email = ref(null)
const mobile_number = ref(null)
const address = ref(null)
const maincontainer = ref(null)
const form = ref(null)
const files = ref([])

// toggle
const toggleDecription = ref(true);

// fetch information
const fetchJobInfo = async () => {
  maincontainer.value.scrollIntoView({ behavior: 'smooth' });
  const { data } = await axios.get(`${import.meta.env.VITE_BACKEND}/api/recruitment/job?id=${route.params.id}`)
  jobInfo.value = data;
  loading.value = false;
}

// submit application
const submitApplication = async () => {
  try {
    const formData = new FormData();
    formData.append('letter_of_intent',data.letter_of_intent);
    formData.append('pds',data.pds);
    const res = await axios.post(`${import.meta.env.VITE_BACKEND}/api/recruitment/submit/application`,formData )
    console.log(res);
  } catch (error) {

  }
}
const errors = reactive({
  fname: false,
  email: false,
  mobile_number: false,
  address: false,
});
// next step
const nextStep = () => {
  errors.address = false;
  errors.fname = false;
  errors.email = false;
  errors.mobile_number = false;
  var check = true;
  if (fname.value.value == '') {
    // fname.value.required = true;
    errors.fname = true;
    check = true;
  }
  if (email.value.value == '') {
    errors.email = true;
    check = true;
  }
  if (mobile_number.value.value == '') {
    errors.mobile_number = true;
    check = true;
  }
  if (address.value.value == '') {
    errors.address = true;
    check = true;
  }

  if (fname.value.value != '' && email.value.value != '' && mobile_number.value.value != '' && address.value.value != '') {
    step.value++;
  }
}

// file upload
const fileUpload = (type) =>{
  switch(type){
    case 1: 
        data.letter_of_intent = event.target.files[0];
    case 2: 
        data.pds = event.target.files[0];
        
  }

}
onMounted(() => {
  fetchJobInfo()
})




</script>

<template class="">
  <div class="font-Roboto" ref="maincontainer">
    <Header />



    <main class="flex flex-col-reverse xl:flex-row gap-x-8   px-8 bg-gray-100">

      <!-- loading -->
      <div v-show="loading" class="col-span-2">
        <div class="w-full max-w-screen-lg mx-auto p-8">
          <div class="py-4 rounded shadow-md h-[32rem]  col-span-2 animate-pulse bg-gray-50">
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
        </div>
      </div>
      <div v-show="loading" class="col-span-1">
        <div class="w-full max-w-screen-lg mx-auto py-8 pr-8">
          <div class="py-4 rounded shadow-md h-[19rem]  col-span-2 animate-pulse bg-gray-50">
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
        </div>
      </div>
      <!-- form  -->
      <div v-show="loading == false" class="flex-1 flex-grow-[2.5]">
        <form @submit.prevent="submitApplication()" ref="form" class="w-full max-w-screen-lg mx-auto py-8">
          <div class="bg-white  p-8 rounded-lg shadow-md border ">
            <div class="flex justify-between">
              <h1 v-if="step == 1" class="text-center text-xl font-Roboto_bold">Basic Information</h1>
              <h1 v-else-if="step == 2" class="text-center text-xl font-Roboto_bold">Application shall upload the ff:
                documents <span class="opacity-50">(pdf only)</span></h1>
              <h1 class="text-base font-bold text-gray-800/60  mb-4 uppercase">{{ step }}/2</h1>

            </div>
            <!-- step 1 -->
            <div v-show="step == 1" class="mb-6">

              <div class="grid grid-cols-2 gap-4 pt-10">

                <div>
                  <label for="fname" class="block text-gray-700  mb-1">Fullname</label>
                  <input type="text" v-model="data.fname" ref="fname" class="w-full rounded-lg border py-2 px-3  "
                    :class="errors.fname ? 'border-red-500' : ''">
                  <small class="text-red-500" v-if="errors.fname"> The Fullname field is required. </small>
                </div>
                <div>
                  <label for="email" class="block text-gray-700  mb-1">Email</label>
                  <input type="email" v-model="data.email" ref="email" class="w-full rounded-lg border py-2 px-3  "
                    :class="errors.email ? 'border-red-500' : ''">
                  <small class="text-red-500" v-if="errors.email"> The Email field is required. </small>
                </div>
              </div>
              <div class="mt-4">
                <label for="mobile_number" class="block text-gray-700  mb-1">Mobile Number</label>
                <input type="text" v-model="data.mobile_number" ref="mobile_number"
                  class="w-full rounded-lg border py-2 px-3  " :class="errors.mobile_number ? 'border-red-500' : ''">
                <small class="text-red-500" v-if="errors.mobile_number"> The Mobile Number field is required. </small>
              </div>
              <div class="mt-4">
                <label for="address" class="block text-gray-700  mb-1">Complete Address</label>
                <textarea type="text" v-model="data.address" ref="address" class="w-full rounded-lg border py-2 px-3  "
                  :class="errors.address ? 'border-red-500' : ''"></textarea>
                <small class="text-red-500" v-if="errors.address"> The Address field is required. </small>
              </div>


            </div>

            <!-- step 2 -->
            <div v-show="step == 2" class="my-10 space-y-10">


              <div>
                <label for="mobile_number" class="label-text">Letter of intent addressed to the
                  Regional
                  Director. Please include the position and its item number with corresponding Functional
                  Division/Section/Unit</label>
                <input type="file"  @change="fileUpload(1)" class="file-input  w-full file-input-ghost border-gray-300 "
                  accept="application/pdf">
              </div>

              <div>
                <label for="mobile_number" class="label-text">Duly accomplished Personal Data
                  Sheet(PDS) and Work Experience Sheet with recent passport-sized picture (CS Form No. 212, Revised
                  2017) which can be downloaded at <a href="https://www.csc.gov.ph/"
                    class="text-blue-500 hover:underline" target="_blank">www.csc.gov.ph.</a></label>
                <input type="file" @change="fileUpload(2)" class="file-input  w-full file-input-ghost border-gray-300  "
                  accept="application/pdf">
              </div>

              <div>
                <label for="mobile_number" class="label-text">Photocopy of valid and updated PRC
                  License/ID <span class="text-gray-500 ">(if applicable)</span></label>
                <input type="file" @change="fileUpload(3)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>

              <div>
                <label for="mobile_number" class="label-text">Photocopy of scholastic/academic
                  recored such as but not limited to Transcript of Records (TOR) and Diploma, including completion of
                  graduate and post-graduate units/degrees <span class="text-gray-500 ">(if applicable)</span></label>
                <input type="file" @change="fileUpload(4)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>


              <div>
                <label for="mobile_number" class="label-text">Photocopy of Certificate/s of
                  Training attended</label>
                <input type="file" @change="fileUpload(5)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>

              <div>
                <label for="mobile_number" class="label-text">Photocopy of Certificate of
                  Employment, Contract of Service, or duly signed Service Record, whichever is/are applicable</label>
                <input type="file" @change="fileUpload(6)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>

              <div>
                <label for="mobile_number" class="label-text">Photocopy of latest appointment
                  <span class="text-gray-500 ">(if applicable)</span></label>
                <input type="file" @change="fileUpload(7)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>

              <div>
                <label for="mobile_number" class="label-text">Photocopy of the Performance Rating
                  in the last rating period(s) covering one (1) year performance in the current/latest position prior to
                  the deadline of submission<span class="text-gray-500 ">(if applicable)</span></label>
                <input type="file" @change="fileUpload(8)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>


              <div>
                <label for="mobile_number" class="label-text">Checklist of Requirements and
                  Omnibus Sworn Statement on the Certification on the Authenticity and Veracity (CAV) of the documents
                  submitted and Data Privacy Consent Form pursuant to RA No. 10173 (Data Privacy Act of 2012), using the
                  form (Annex C) of DepEd Order No. 007, s. 2023, notorized by authorized official</label>
                <input type="file" @change="fileUpload(9)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>

              <div>
                <label for="mobile_number" class="label-text">Means of Verification (MOVS) showing
                  Outstanding Accomplishment, Application of Education, and Application of Learning and Development
                  reckoned from the date of last issurance of appointment.</label>
                <input type="file" @change="fileUpload(10)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>

              <div>

                <input type="checkbox" id="mobile_number" class=" py-2 px-3 mr-2">
                <span class="text-xs font-Roboto_bold">CERTIFICATION OF AUTHENTICITY AND VERACITY</span>
                <p class="text-sm opacity-70 pl-6">I hereby certify that all information above are true and correct, and
                  of my personal knowledge amd belief, and the documents submitted herewith are original and/or
                  certified
                  true copies thereof.</p>
              </div>


              <div>

                <input type="checkbox" id="mobile_number" class=" py-2 px-3 mr-2">
                <span class="text-xs font-Roboto_bold">DATA PRIVACY CONTENT</span>
                <p class="text-sm opacity-70 pl-6">I hereby certify that all information above are true and correct, and
                  of my personal knowledge amd belief, and the documents submitted herewith are original and/or
                  certified
                  true copies thereof.</p>
              </div>



            </div>

            <!-- all button -->
            <div class="mt-8 flex " :class="step == 1 ? 'justify-end' : 'justify-between'">
              <button type="button" v-show="step == 2" @click="step = 1"
                class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 ">Prev</button>
              <button type="button" v-show="step != 2" @click="nextStep()"
                class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 ">Next</button>
              <button v-show="step == 2" type="submit" :disabled="jobInfo.status == 0 ? true : false"
                class="bg-[#04508c] text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-600 "
                :class="jobInfo.status == 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'">SUBMIT
                APPLICATION</button>
            </div>
          </div>
        </form>

      </div>

      <!--title & description -->
      <div v-show="loading == false" class="flex-1">
        <div class="w-full max-w-screen-lg mx-auto py-8 ">
          <div class="bg-white  p-8 rounded-lg shadow-md border relative">
            <div class="flex justify-between">
              <!-- title and status -->
              <div>
                <h1 class="text-xl font-bold text-gray-800  mb-4 uppercase ">{{ route.params.position }}</h1>
                <p class="text-gray-500">Open until {{ moment(jobInfo.expiration_date).format('MMMM D, Y') }}</p>
              </div>
              <span v-if="jobInfo.status"
                class="bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  absolute font-Roboto_bold top-2 right-0">Open</span>
              <span v-else
                class="bg-red-100 text-red-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  absolute font-Roboto_bold top-2 right-0">Close</span>

            </div>
            <hr>
            <!-- descriptions -->
            <div>
              <div class="flex justify-between">
                <p class=" pt-2 opacity-70 ">Description</p>
                <button @click="toggleDecription = !toggleDecription">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>

                </button>
              </div>
              <p class="pt-2 px-4  mb-10 text-sm opacity-70 " :class="toggleDecription ? 'hidden xl:block' : 'block xl:hidden'">

              <article v-html="jobInfo.description" class="reset_apperance prose font-Roboto"></article>

              </p>
            </div>




          </div>
        </div>
      </div>
    </main>



    <!-- footer -->
    <Footer />


    <!-- success modal -->
    <dialog ref="successModal" class="modal z-50">
      <div class="modal-box w-11/12 max-w-lg bg-white">

        <div class="sm:flex sm:items-start">
          <div
            class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-bold text-gray-900">
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
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

  </div>
</template>