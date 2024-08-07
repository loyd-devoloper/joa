<template>
  <footer class="bg-[#efefef]">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 py-2 px-5 md:px-0">
      <!-- republic and logo -->
      <div class="flex flex-col md:flex-row col-span-2">
        <img v-lazy="'/assets/govph-seal-mono-footer.png'" class="w-[16rem] mx-auto md:mx-0 md:w-[12rem]" alt="">
        <div class="pt-10">
          <h2 class="font-Roboto_bold whitespace-nowrap text-sm"> REPUBLIC OF THE PHILIPPINES</h2>
          <p class="text-xs ">
            All content is in the public domain unless otherwise stated.
          </p>
        </div>
      </div>
      <!-- about GOVPH -->
      <div class="col-span-2 grid grid-cols-1 md:grid-cols-2">
        <div class=" pt-10 ">
        <h2 class="font-Roboto_bold whitespace-nowrap text-sm"> ABOUT GOVPH</h2>
        <p class="text-xs ">
          Learn more about the Philippine government, its structure, how government works and the people behind it.
        </p>


        <ul class=" pt-4">
          <li class="text-sm hover:underline list-disc list-inside"><a href="">GOV.PH</a></li>
          <li class="text-sm hover:underline list-disc list-inside"><a href="">Open Data Portal</a></li>
          <li class="text-sm hover:underline list-disc list-inside"><a href="">Official Gazette</a></li>

        </ul>

      </div>

      <div class="pt-10 ">
        <h2 class="font-Roboto_bold whitespace-nowrap text-sm">GOVERNMENT LINKS</h2>
        <ul class=" ">
          <li class="text-sm hover:underline list-disc list-inside"><a href="">Office of the President</a></li>
          <li class="text-sm hover:underline list-disc list-inside"><a href="">Office of the Vice President</a></li>
          <li class="text-sm hover:underline list-disc list-inside"><a href="">Senate of the Philippines</a></li>
          <li class="text-sm hover:underline list-disc list-inside"><a href="">House of Representatives</a></li>
          <li class="text-sm hover:underline list-disc list-inside"><a href="">Supreme Court</a></li>
          <li class="text-sm hover:underline list-disc list-inside"><a href="">Court of Appeals</a></li>
          <li class="text-sm hover:underline list-disc list-inside"><a href="">Sandiganbayan</a></li>
        </ul>


      </div></div>
    </div>
  </footer>
</template>