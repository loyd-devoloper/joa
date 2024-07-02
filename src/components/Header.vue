<template>

<header class="bg-[#04508c] h-[6.5rem]">
    <div class="max-w-screen-xl mx-auto flex  h-full justify-between items-center py-2">
      <router-link :to="{ name: 'home'}" class="font-Roboto_bold text-gray-100 text-3xl">
        <img src="/logo.png" class="w-[25rem]" alt="">
      </router-link> 
      <img v-lazy="'/assets/website-banner-4.png'" loading="lazy" class="w-[40rem]" alt="">
    </div>
  </header>
</template>
