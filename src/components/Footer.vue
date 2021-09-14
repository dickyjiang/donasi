<template>
  <div class="w-full pt-8 pb-4 bg-gray-800 text-gray-400 mx-auto">
    <div
      class="flex flex-col px-10 justify-between items-center w-full md:max-w-3xl mx-auto text-sm font-serif"
    >
      <div class=" flex flex-col md:flex-row items-center md:items-start gap-8 justify-between w-full mt-8">
        <div class="flex flex-col gap-2 items-center">
          <div>
             <router-link @click="scrollToTop" :to="{ name: 'Welcome' }">
                <img class="w-12" src="../assets/logo.png"/>
              </router-link>
          </div>
          <h2 class="font-serif font-bold text-lg ">Way2Give</h2>
        </div>

        <ul class="leading-loose">
          <li>
            <router-link @click="scrollToTop" :to="{ name: 'FAQ' }">F.A.Q.</router-link>
          </li>
          <li>
            <router-link @click="scrollToTop" :to="{ name: 'HowItWorks' }">How it Works</router-link>
          </li>
          <li>
            <router-link @click="scrollToTop" :to="{ name: 'AboutUs' }"
              >Mengenai Kami</router-link
            >
          </li>
        </ul>
        <div class="flex flex-col gap-4">
          <div class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#D3D3D3"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              />
            </svg>
            <p><a href="mailto:dickyjuwono@gmail.com">Kontak kami</a></p>
          </div>
          <div class="flex gap-2">
            <svg
              width="24"
              height="20"
              viewBox="0 0 74 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.438 1.4062C24.696 -2.4844 33.805 22.2972 27.45 28.0542C25.4617 29.8511 17.5594 32.8589 17.6141 35.148C19.493 45.714 31.7431 63.207 41.2311 68.878C43.3639 69.7139 48.8913 63.3116 51.2621 62.0616C58.8441 58.0577 79.0161 75.0966 71.8521 83.4016C53.4261 104.765 25.6721 75.7805 15.7391 61.5926C5.8055 47.4046 -11.9409 11.4126 14.4383 1.4046L14.438 1.4062Z"
                fill="#D3D3D3"
              />
            </svg>
            <a href="tel:+628122489890">08122489890</a>
          </div>
          <div class="font-sans text-xs pl-8">
            Alamat: <br>
            Komp. Kopo Permai 30A No.8<br>
            BANDUNG - INDONESIA
          </div>
        </div>
      </div>
      <p class="mt-8">Palapa After School © 2021</p>
    </div>
  </div>
</template>

<script>
export default {

  methods: { 
           scrollToTop() {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                }
                );
           },
           
        }
  
};
</script>

<style></style>
