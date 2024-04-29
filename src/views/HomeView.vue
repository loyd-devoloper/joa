<script setup>
import { RouterLink } from 'vue-router';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div>
      <RouterLink :to="{name: 'home'}" active-class="bg-red-500">Home</RouterLink>
      <RouterLink :to="{name: 'about'}">About</RouterLink>

      <h1 class="bg-red-500">dsadsad</h1>
    </div>
</template>
