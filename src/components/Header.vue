<template>

<header class="bg-[#04508c]x  bg-[#A40404] h-[6.5rem]">
    <div class="max-w-screen-xl mx-auto flex  h-full justify-between items-center px-5 md:px-0 ">
      <router-link :to="{ name: 'home'}" class="font-Roboto_bold text-gray-100 text-3xl">
        <img src="/logo.png" class="w-[16rem] md:w-[25rem]" alt="">
      </router-link> 
      <img v-lazy="'/assets/website-banner-4.png'" loading="lazy" class="w-[36rem] hidden md:block" alt="">
      <img v-lazy="'/assets/r4a.png'" loading="lazy" class="w-[4rem] block md:hidden" alt="">
    </div>
  </header>
</template>
