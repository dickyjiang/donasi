<template>
  <div class="welcome mx-auto lg:w-2/4 md:w-3/4 mt-10 text-center">
    <p class=" text-center text-4xl lg:text-4xl font-serif font-bold text-gray-800 ">
      Masukan Donasi {{ id }}
    </p>
    <div class="p-2 border-4 bg-white border-gray-800 mt-8 shadow-2xl">
      <addDonationForm />
    </div>
  </div>
</template>

<script>
import AddDonationForm from "../components/AddDonationForm.vue";
import Navbar from "../components/Navbar.vue";

export default {
  props: ["id"],
  components: { Navbar, AddDonationForm },
};
</script>

<style></style>
