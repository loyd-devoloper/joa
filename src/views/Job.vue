<script setup>


import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'
import BasicInformation from '@/views/Step/BasicInformation.vue'
import { useRoute } from 'vue-router';
import { onMounted, reactive, ref, watch } from 'vue';
import moment from 'moment';
import axios from 'axios';
const route = useRoute();
const step = ref(1);
const successModal = ref(null);
const previewModal = ref(null);
const application_code = ref('');
const jobInfo = ref({
  fname: 'dsad'
});
const loading = ref(true)
const applicationLoading = ref(false)
// preview
const letter_of_intent_preview = ref(null)
// all reactive data
const data = reactive({
  fname: '',
  lname: '',
  mname: '',
  religion: '',
  disability: '',
  ethnic_group: '',
  email: '',
  mobile_number: '',
  address: '',
  sex: '',
  civil_status: '',
  birth_date: '',
  letter_of_intent: null,
  pds: null,
  prc: null,
  eligibility: null,
  tor: null,
  training_attended: null,
  certificate_of_employment: null,
  latest_appointment: null,
  performance_rating: null,
  cav: null,
  movs: null,


})

// file upload
const fileUpload = (type) => {

  if (type === 1) {
    data.letter_of_intent = event.target.files[0];
    letter_of_intent_preview.value = data.letter_of_intent.name;
  } else if (type === 2) {
    data.pds = event.target.files[0];

  } else if (type === 3) {
    data.prc = event.target.files[0];
  } else if (type === 4) {
    data.eligibility = event.target.files[0];
  } else if (type === 5) {
    data.tor = event.target.files[0];
  } else if (type === 6) {
    data.training_attended = event.target.files[0];
  } else if (type === 7) {
    data.certificate_of_employment = event.target.files[0];
  } else if (type === 8) {
    data.latest_appointment = event.target.files[0];
  } else if (type === 9) {
    data.performance_rating = event.target.files[0];
  } else if (type === 10) {
    data.cav = event.target.files[0];
  } else if (type === 11) {
    data.movs = event.target.files[0];
  }

}
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
  const { data } = await axios.get(`/api/recruitment/job?id=${route.params.id}`)
  jobInfo.value = data;
  loading.value = false;
}

// submit application
const submitApplication = async () => {
  try {
    previewModal.value.showModal();
    // applicationLoading.value = true;
    // const formData = new FormData();
    // Object.entries(data).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

    // formData.append('job_id', route.params.id);
    // const res = await axios.post(`/api/recruitment/submit/application`, formData)
    // applicationLoading.value = false;
    // application_code.value = res.data;
    // successModal.value.showModal()

  } catch (error) {

  }
}
// reload page after cloosing modal
const reloadWindow = () => {
  location.reload();
}
const errors = reactive({
  fname: false,
  email: false,
  mobile_number: false,
  address: false,
});
// next step
const nextStep = () => {
  if (OpenNext.value) {
    form.value.reportValidity()
  } else {
    step.value = 2;
  }
}
const OpenNext = ref(true);

// check step one form in blank or not
watch(data, (newValue, OldValue) => {
  if (newValue.fname != '' && newValue.email != '' && newValue.mobile_number != '' && newValue.address != '' && newValue.birth_date != '' && newValue.civil_status != '' && newValue.sex != '' && newValue.lname != '') {
    OpenNext.value = false;
  } else {
    OpenNext.value = true;
  }
})

onMounted(async () => {
  await fetchJobInfo()

  previewModal.value.showModal();

})



</script>

<template class="">
  <div class="font-Roboto" ref="maincontainer">
    <Header />
    <div v-if="Object.keys(jobInfo).length === 0" class="bg-gray-100">
      <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl font-bold text-gray-800">404</h1>
        <p class="text-4xl font-medium text-gray-800">Page Not Found</p>
        <a href="/" class="mt-4 text-xl text-blue-600 hover:underline">Go back home</a>
      </div>
    </div>

    <main v-else class="flex flex-col-reverse xl:flex-row gap-x-8   px-8 bg-gray-100">

      <!-- loading -->
      <div v-show="loading" class="flex-1 flex-grow-[2.5]">
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
      <div v-show="loading" class="flex-1">
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
            <!-- info alert -->

            <div role="alert" class="alert alert-warning ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-red-600" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <li> <span> All <span class="text-red-500 font-extrabold">required</span> field must not be blank.
                    Leave it BLANK if not applicable. </span></li>
                <li> <span> Please make sure to submit a clear and legible copy of the file.</span></li>
              </div>
            </div>
            <!-- step 1 -->
            <div v-show="step == 1" class="mb-6">

              <!-- firstname and lastname -->
              <div class="grid grid-cols-2 gap-4 pt-10">

                <div>
                  <label for="fname" class="block text-gray-700  mb-1">First name<small
                      class="text-red-500 ">(Required)</small></label>
                  <input type="text" name="fname" v-model="data.fname" ref="fname"
                    class="w-full rounded-lg border py-2 px-3  " :class="errors.fname ? 'border-red-500' : ''" required
                    formnovalidate>
                  <small class="text-red-500" v-if="errors.fname"> The First name field is required. </small>
                </div>
                <div>
                  <label for="middlename" class="block text-gray-700  mb-1">Middle Name<small
                      class="text-red-500 ">(Required)</small></label>
                  <input type="middlename" v-model="data.mname" ref="mname" class="w-full rounded-lg border py-2 px-3  "
                    :class="errors.mname ? 'border-red-500' : ''" required>
                  <small class="text-red-500" v-if="errors.mname"> The Last name field is required. </small>
                </div>
                <div>
                  <label for="lastname" class="block text-gray-700  mb-1">Last name<small
                      class="text-red-500 ">(Required)</small></label>
                  <input type="lastname" v-model="data.lname" ref="lname" class="w-full rounded-lg border py-2 px-3  "
                    :class="errors.lname ? 'border-red-500' : ''" required>
                  <small class="text-red-500" v-if="errors.lname"> The Last name field is required. </small>
                </div>
              </div>

              <!-- email and Religion -->
              <div class="grid grid-cols-2 gap-4 pt-10">
                <div>
                  <label for="email" class="block text-gray-700  mb-1">Email<small
                      class="text-red-500 ">(Required)</small></label>
                  <input type="email" v-model="data.email" ref="email" class="w-full rounded-lg border py-2 px-3  "
                    :class="errors.email ? 'border-red-500' : ''" required>
                  <small class="text-red-500" v-if="errors.email"> The Email field is required. </small>
                </div>
                <div>
                  <label for="religion" class="block text-gray-700  mb-1">Religion</label>
                  <input type="text" name="religion" v-model="data.religion" ref="religion"
                    class="w-full rounded-lg border py-2 px-3  " :class="errors.religion ? 'border-red-500' : ''">

                </div>
              </div>
              <!-- mobile number and Birthdate -->
              <div class="grid grid-cols-2 gap-4 pt-10">
                <div>
                  <label for="mobile_number" class="block text-gray-700  mb-1">Mobile Number<small
                      class="text-red-500 ">(Required)</small></label>
                  <input type="text" name="mobile_number" v-model="data.mobile_number" ref="mobile_number"
                    class="w-full rounded-lg border py-2 px-3  " :class="errors.mobile_number ? 'border-red-500' : ''"
                    required>
                  <small class="text-red-500" v-if="errors.mobile_number"> The Mobile Number field is required. </small>
                </div>
                <div>
                  <label for="birthdate" class="block text-gray-700  mb-1">Birthdate<small
                      class="text-red-500 ">(Required)</small></label>
                  <input type="date" v-model="data.birth_date" ref="birth_date"
                    class="w-full rounded-lg border py-2 px-3  " :class="errors.birth_date ? 'border-red-500' : ''"
                    required>
                  <small class="text-red-500" v-if="errors.birth_date"> The Birthdate field is required. </small>
                </div>
              </div>
              <!-- Disability and ethnic group -->
              <div class="grid grid-cols-2 gap-4 pt-10">
                <div>
                  <label for="disability" class="block text-gray-700  mb-1">Disability</label>
                  <input type="text" name="disability" v-model="data.disability" ref="disability"
                    class="w-full rounded-lg border py-2 px-3  " :class="errors.disability ? 'border-red-500' : ''">

                </div>
                <div>
                  <label for="ethnic_group" class="block text-gray-700  mb-1">Ethnic Group</label>
                  <input type="text" v-model="data.ethnic_group" ref="ethnic_group"
                    class="w-full rounded-lg border py-2 px-3  " :class="errors.ethnic_group ? 'border-red-500' : ''">

                </div>
              </div>
              <!-- sex and civil status -->
              <div class="grid grid-cols-2 gap-4 pt-10">
                <div>
                  <label for="sex" class="block text-gray-700  mb-1">Sex<small
                      class="text-red-500 ">(Required)</small></label>

                  <select v-model="data.sex" class="w-full rounded-lg border py-2 px-3  "
                    :class="errors.sex ? 'border-red-500' : ''" required>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                  <small class="text-red-500" v-if="errors.sex"> The Sex field is required. </small>
                </div>
                <div>
                  <label for="civil_status" class="block text-gray-700  mb-1">Civil Status<small
                      class="text-red-500 ">(Required)</small></label>
                  <select v-model="data.civil_status" class="w-full rounded-lg border py-2 px-3  "
                    :class="errors.civil_status ? 'border-red-500' : ''" required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="separated">Separated</option>
                    <option value="widowed">Widowed</option>
                  </select>
                  <small class="text-red-500" v-if="errors.civil_status"> The Civil Status field is required. </small>
                </div>
              </div>

              <div class="mt-4">
                <label for="address" class="block text-gray-700  mb-1">Complete Address<small
                    class="text-red-500 ">(Required)</small></label>
                <textarea type="text" v-model="data.address" ref="address" class="w-full rounded-lg border py-2 px-3  "
                  :class="errors.address ? 'border-red-500' : ''" required></textarea>
                <small class="text-red-500" v-if="errors.address"> The Address field is required. </small>
              </div>
            </div>



            <!-- step 2 -->
            <div v-show="step == 2" class="my-10 space-y-10">


              <div>
                <label class="label-text">Letter of intent addressed to the
                  Regional
                  Director. Please include the position and its item number with corresponding Functional
                  Division/Section/Unit<small class="text-red-500 ">(Required)</small></label>
                <input type="file" @change="fileUpload(1)" class="file-input  w-full file-input-ghost border-gray-300 "
                  accept="application/pdf" required>
              </div>

              <div>
                <label class="label-text">Duly accomplished Personal Data
                  Sheet(PDS) and Work Experience Sheet with recent passport-sized picture (CS Form No. 212, Revised
                  2017) which can be downloaded at <a href="https://www.csc.gov.ph/"
                    class="text-blue-500 hover:underline" target="_blank">www.csc.gov.ph.</a><small
                    class="text-red-500 ">(Required)</small></label>
                <input type="file" @change="fileUpload(2)" class="file-input  w-full file-input-ghost border-gray-300  "
                  accept="application/pdf" required>
              </div>

              <div>
                <label class="label-text">Photocopy of valid and updated PRC
                  License/ID <span class="text-gray-500 ">(if applicable)</span></label>
                <input type="file" @change="fileUpload(3)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>
              <div>
                <label class="label-text">Photocopy of Certificate of Eligibility/Rating <span
                    class="text-gray-500 ">(if
                    applicable)</span></label>
                <input type="file" @change="fileUpload(4)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>

              <div>
                <label class="label-text">Photocopy of scholastic/academic
                  recored such as but not limited to Transcript of Records (TOR) and Diploma, including completion of
                  graduate and post-graduate units/degrees <span class="text-gray-500 ">(if applicable)</span></label>
                <input type="file" @change="fileUpload(5)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>


              <div>
                <label class="label-text">Photocopy of Certificate/s of
                  Training attended<small class="text-red-500 ">(Required)</small></label>
                <input type="file" @change="fileUpload(6)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf" required>
              </div>

              <div>
                <label class="label-text">Photocopy of Certificate of
                  Employment, Contract of Service, or duly signed Service Record, whichever is/are applicable</label>
                <input type="file" @change="fileUpload(7)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>

              <div>
                <label class="label-text">Photocopy of latest appointment
                  <span class="text-gray-500 ">(if applicable)</span></label>
                <input type="file" @change="fileUpload(8)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>


              <div>
                <label class="label-text">Photocopy of the Performance Rating
                  in the last rating period(s) covering one (1) year performance in the current/latest position prior to
                  the deadline of submission<span class="text-gray-500 ">(if applicable)</span></label>
                <input type="file" @change="fileUpload(9)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf">
              </div>


              <div>
                <label class="label-text">Checklist of Requirements and
                  Omnibus Sworn Statement on the Certification on the Authenticity and Veracity (CAV) of the documents
                  submitted and Data Privacy Consent Form pursuant to RA No. 10173 (Data Privacy Act of 2012), using the
                  form (Annex C) of DepEd Order No. 007, s. 2023, notarized by authorized official<small
                    class="text-red-500 ">(Required)</small></label>
                <input type="file" @change="fileUpload(10)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf" required>
              </div>

              <div>
                <label class="label-text">Means of Verification (MOVS) showing
                  Outstanding Accomplishment, Application of Education, and Application of Learning and Development
                  reckoned from the date of last issurance of appointment.<small
                    class="text-red-500 ">(Required)</small></label>
                <input type="file" @change="fileUpload(11)" class="file-input  w-full file-input-ghost border-gray-300"
                  accept="application/pdf" required>
              </div>


              <div>

                <input type="checkbox" id="mobile_number" class=" py-2 px-3 mr-2" required>
                <span class="text-xs font-Roboto_bold">CERTIFICATION OF AUTHENTICITY AND VERACITY</span>
                <p class="text-sm opacity-70 pl-6">I hereby certify that all information above are true and correct, and
                  of my personal knowledge amd belief, and the documents submitted herewith are original and/or
                  certified
                  true copies thereof.</p>
              </div>


              <div>

                <input type="checkbox" id="mobile_number" class=" py-2 px-3 mr-2" required>
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

              <button type="button"
                :disabled="moment(jobInfo.batch_info?.closing_date).isSameOrAfter(moment().format('MMM DD, YYYY')) ? false : true"
                v-show="step != 2" @click="nextStep()"
                class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 "
                :class="moment(jobInfo.batch_info?.closing_date).isSameOrAfter(moment().format('MMM DD, YYYY')) ? '' : 'opacity-20 cursor-not-allowed'">Next
              </button>

              <button v-show="step == 2" type="submit"
                :disabled="jobInfo.status_of_hiring == 0 || applicationLoading ? true : false"
                class="bg-[#04508c] text-white px-4 py-2 flex items-center gap-1 rounded-lg hover:bg-blue-700 dark:bg-blue-600 "
                :class="jobInfo.status_of_hiring == 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'">
                <svg xmlns="http://www.w3.org/2000/svg" v-show="applicationLoading" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>

                SUBMIT
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
              <span
                v-if="jobInfo.status_of_hiring && moment(jobInfo.batch_info?.closing_date).isSameOrAfter(moment().format('MMM DD, YYYY'))"
                class="bg-green-100 text-green-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  absolute font-Roboto_bold top-2 right-0">Open</span>
              <span v-else
                class="bg-red-100 text-red-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full  absolute font-Roboto_bold top-2 right-0">Close</span>

            </div>
            <hr>

            <!-- descriptions -->
            <div>
              <div class="flex justify-between">
                <p class=" pt-2 opacity-70 ">Job Description Summary</p>
                <button @click="toggleDecription = !toggleDecription">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>

                </button>
              </div>
              <p class="pt-2 px-4  mb-10 text-sm  max-h-[30rem] overflow-y-auto"
                :class="toggleDecription ? 'hidden xl:block' : 'block xl:hidden'">

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
          <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-bold text-gray-900">
              Successfully Submited!


            </h3>
            <div class="mt-2 space-y-8">
              <p class="text-sm leading-5 text-gray-500">
                You Have successfully submitted your application for the <strong>{{ route.params.position }}</strong>
                position in the <strong>{{ jobInfo?.place_of_assignment }}</strong>
              </p>
              <p class="text-sm leading-5 text-gray-500">
                Here is your application code:
              </p>
              <p class="text-2xl leading-5 text-gray-900">
                <strong>{{ application_code }}</strong>
              </p>
              <p class="text-sm leading-5 text-gray-500">
                The result of initial evaluation shall be sent to your respective email address for your information
              </p>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <button class="btn" @click="reloadWindow">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    <!-- preview modal -->
    <dialog ref="previewModal" class="modal z-50">
      <div class="modal-box  max-w-screen-xl bg-white">

        <div class="">

          <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left space-y-10">
            <h3 class="text-lg leading-6 font-bold text-gray-900">
              Preview
            </h3>
            <div class="mt-2 space-y-4 ">
                 <!-- Basic Information -->
              <div class="collapse  collapse-arrow  	 bg-base-200 border-none outline-none ring-0">
                <input type="checkbox" checked />
                <div class="collapse-title text-xl font-medium"> Basic Information</div>
                <div class="collapse-content">
               

                  <div class="mb-6">

                    <!-- input -->
                    <div class="grid grid-cols-1 gap-4 pt-10">

                      <div>
                        <label for="fname" class="block text-gray-700  mb-1">First name<small
                            class="text-red-500 ">(Required)</small></label>
                        <input type="text" name="fname" v-model="data.fname" ref="fname"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  " :class="errors.fname ? 'border-red-500' : ''"
                          required formnovalidate disabled="true">
                        <small class="text-red-500" v-if="errors.fname"> The First name field is required. </small>
                      </div>
                      <div>
                        <label for="middlename" class="block text-gray-700  mb-1">Middle Name<small
                            class="text-red-500 ">(Required)</small></label>
                        <input type="middlename" v-model="data.mname" ref="mname"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  " :class="errors.mname ? 'border-red-500' : ''"
                          required disabled="true">
                        <small class="text-red-500" v-if="errors.mname"> The Last name field is required. </small>
                      </div>
                      <div>
                        <label for="lastname" class="block text-gray-700  mb-1">Last name<small
                            class="text-red-500 ">(Required)</small></label>
                        <input type="lastname" v-model="data.lname" ref="lname"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  " :class="errors.lname ? 'border-red-500' : ''"
                          required disabled="true">
                        <small class="text-red-500" v-if="errors.lname"> The Last name field is required. </small>
                      </div>
                      <div>
                        <label for="email" class="block text-gray-700  mb-1">Email<small
                            class="text-red-500 ">(Required)</small></label>
                        <input type="email" v-model="data.email" ref="email"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  " :class="errors.email ? 'border-red-500' : ''"
                          required disabled="true">
                        <small class="text-red-500" v-if="errors.email"> The Email field is required. </small>
                      </div>
                      <div>
                        <label for="religion" class="block text-gray-700  mb-1">Religion</label>
                        <input type="text" disabled="true" name="religion" v-model="data.religion" ref="religion"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  " :class="errors.religion ? 'border-red-500' : ''">

                      </div>
                      <div>
                        <label for="mobile_number" class="block text-gray-700  mb-1">Mobile Number<small
                            class="text-red-500 ">(Required)</small></label>
                        <input type="text" disabled="true" name="mobile_number" v-model="data.mobile_number"
                          ref="mobile_number" class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  "
                          :class="errors.mobile_number ? 'border-red-500' : ''" required>
                        <small class="text-red-500" v-if="errors.mobile_number"> The Mobile Number field is required.
                        </small>
                      </div>
                      <div>
                        <label for="birthdate" class="block text-gray-700  mb-1">Birthdate<small
                            class="text-red-500 ">(Required)</small></label>
                        <input type="date" disabled="true" v-model="data.birth_date" ref="birth_date"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  "
                          :class="errors.birth_date ? 'border-red-500' : ''" required>
                        <small class="text-red-500" v-if="errors.birth_date"> The Birthdate field is required. </small>
                      </div>
                      <div>
                        <label for="disability" class="block text-gray-700  mb-1">Disability</label>
                        <input type="text" disabled="true" name="disability" v-model="data.disability" ref="disability"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  "
                          :class="errors.disability ? 'border-red-500' : ''">

                      </div>
                      <div>
                        <label for="ethnic_group" class="block text-gray-700  mb-1">Ethnic Group</label>
                        <input type="text" disabled="true" v-model="data.ethnic_group" ref="ethnic_group"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  "
                          :class="errors.ethnic_group ? 'border-red-500' : ''">

                      </div>
                      <div>
                        <label for="sex" class="block text-gray-700  mb-1">Sex<small
                            class="text-red-500 ">(Required)</small></label>

                        <select v-model="data.sex" disabled="true" class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  "
                          :class="errors.sex ? 'border-red-500' : ''" required>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                        <small class="text-red-500" v-if="errors.sex"> The Sex field is required. </small>
                      </div>
                      <div>
                        <label for="civil_status" class="block text-gray-700  mb-1">Civil Status<small
                            class="text-red-500 ">(Required)</small></label>
                        <select v-model="data.civil_status" disabled="true" class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  "
                          :class="errors.civil_status ? 'border-red-500' : ''" required>
                          <option value="" disabled selected>Select an option</option>
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="divorced">Divorced</option>
                          <option value="separated">Separated</option>
                          <option value="widowed">Widowed</option>
                        </select>
                        <small class="text-red-500" v-if="errors.civil_status"> The Civil Status field is required.
                        </small>
                      </div>
                      <div>
                        <label for="address" class="block text-gray-700  mb-1">Complete Address<small
                            class="text-red-500 ">(Required)</small></label>
                        <textarea type="text" v-model="data.address" disabled="true" ref="address"
                          class="w-full rounded-lg border py-2 px-3 bg-[#fafafa] cursor-not-allowed  " :class="errors.address ? 'border-red-500' : ''"
                          required></textarea>
                        <small class="text-red-500" v-if="errors.address"> The Address field is required. </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Attachment -->
              <div class="collapse  collapse-arrow  	 bg-base-200">
                <input type="checkbox" checked />
                <div class="collapse-title text-xl font-medium">Attachment</div>
                <div class="collapse-content">


                  <div class="my-10 space-y-10">


                    <div>
                      <label class="label-text">Letter of intent addressed to the
                        Regional
                        Director. Please include the position and its item number with corresponding Functional
                        Division/Section/Unit<small class="text-red-500 ">(Required)</small></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img v-if="!!letter_of_intent_preview" src="/assets/pdf.png" alt="">
                        <img v-else src="/assets/no-file.png" class="size-10" alt="">
                        <small v-if="!!letter_of_intent_preview" class="grow">{{ letter_of_intent_preview }}</small>
                        <small v-else>No Attachment</small>
                      </div>
                    </div>

                    <div>
                      <label class="label-text">Duly accomplished Personal Data
                        Sheet(PDS) and Work Experience Sheet with recent passport-sized picture (CS Form No. 212,
                        Revised
                        2017) which can be downloaded at <a href="https://www.csc.gov.ph/"
                          class="text-blue-500 hover:underline" target="_blank">www.csc.gov.ph.</a><small
                          class="text-red-500 ">(Required)</small></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>

                    <div>
                      <label class="label-text">Photocopy of valid and updated PRC
                        License/ID <span class="text-gray-500 ">(if applicable)</span></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>
                    <div>
                      <label class="label-text">Photocopy of Certificate of Eligibility/Rating <span
                          class="text-gray-500 ">(if
                          applicable)</span></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>

                    <div>
                      <label class="label-text">Photocopy of scholastic/academic
                        recored such as but not limited to Transcript of Records (TOR) and Diploma, including completion
                        of
                        graduate and post-graduate units/degrees <span class="text-gray-500 ">(if
                          applicable)</span></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>


                    <div>
                      <label class="label-text">Photocopy of Certificate/s of
                        Training attended<small class="text-red-500 ">(Required)</small></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>

                    <div>
                      <label class="label-text">Photocopy of Certificate of
                        Employment, Contract of Service, or duly signed Service Record, whichever is/are
                        applicable</label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>

                    <div>
                      <label class="label-text">Photocopy of latest appointment
                        <span class="text-gray-500 ">(if applicable)</span></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>


                    <div>
                      <label class="label-text">Photocopy of the Performance Rating
                        in the last rating period(s) covering one (1) year performance in the current/latest position
                        prior
                        to
                        the deadline of submission<span class="text-gray-500 ">(if applicable)</span></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>


                    <div>
                      <label class="label-text">Checklist of Requirements and
                        Omnibus Sworn Statement on the Certification on the Authenticity and Veracity (CAV) of the
                        documents
                        submitted and Data Privacy Consent Form pursuant to RA No. 10173 (Data Privacy Act of 2012),
                        using
                        the
                        form (Annex C) of DepEd Order No. 007, s. 2023, notarized by authorized official<small
                          class="text-red-500 ">(Required)</small></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>

                    <div>
                      <label class="label-text">Means of Verification (MOVS) showing
                        Outstanding Accomplishment, Application of Education, and Application of Learning and
                        Development
                        reckoned from the date of last issurance of appointment.<small
                          class="text-red-500 ">(Required)</small></label>
                      <div class="flex items-center mt-2 bg-gray-100 rounded-md p-2">
                        <img src="/assets/pdf.png" alt="">
                        <small class="grow">Letter of intent addressed to the Regional Director. Please include the
                          position
                          and its item number with corresponding Functional Division/Section/Unit(Required).pdf </small>
                      </div>
                    </div>





                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
        <div class="modal-action">
          <form method="dialog" class="space-x-2">
            <!-- if there is a button, it will close the modal -->
            <button class="btn btn-outline" @click="previewModal.modalClose()">Edit</button>
            <button class="btn btn-error text-white" @click="reloadWindow">Submit</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>