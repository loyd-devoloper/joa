<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="about">
    <RouterLink :to="{name: 'home'}"  active-class="bg-red-500">Home</RouterLink>
    <RouterLink :to="{name: 'about'}"  active-class="bg-red-500">About</RouterLink>
    <h1>This is an about page</h1>
  </div>
</template>

