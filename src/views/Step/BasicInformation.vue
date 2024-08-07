<template>
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
        <input type="text" v-model="data.mobile_number" ref="mobile_number" class="w-full rounded-lg border py-2 px-3  "
            :class="errors.mobile_number ? 'border-red-500' : ''">
        <small class="text-red-500" v-if="errors.mobile_number"> The Mobile Number field is required. </small>
    </div>
    <div class="mt-4">
        <label for="address" class="block text-gray-700  mb-1">Complete Address</label>
        <textarea type="text" v-model="data.address" ref="address" class="w-full rounded-lg border py-2 px-3  "
            :class="errors.address ? 'border-red-500' : ''"></textarea>
        <small class="text-red-500" v-if="errors.address"> The Address field is required. </small>
    </div>

</template>
<script setup>
import { ref, reactive } from 'vue'
const fname = ref(null)
const email = ref(null)
const mobile_number = ref(null)
const address = ref(null)

const data = reactive({
    fname: '',
    email: '',
    mobile_number: '',
    address: '',
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

const errors = reactive({
    fname: false,
    email: false,
    mobile_number: false,
    address: false,
});
</script>