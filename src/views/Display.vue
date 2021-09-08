<template>
<div class="min-h-screen bg-turkis p-4">
    <div class="flex flex-col h-screen justify-center items-center  font-semibold max-w-lg mx-auto ">

      <div class="border-2 border-green-300 py-8 px-8 rounded-3xl text-white  shadow-xl w-full">

          <div class="flex justify-between gap-10 items-stretch">
                <div class="flex-1 flex  items-end text-6xl">
                  <div class="text-2xl">IDR</div>
                  <div> {{ formattedDate}} </div>
                </div>
                
          </div>

          <div class="font-serif font-semibold text-4xl my-8 text-center">
              " {{ $route.query.pesan }} "
          </div>

          <div class="w-full text-right">
                  <p class="text-md">
                    Pengirim 
                  </p>
                  <div class="text-4xl font-bold">
                    {{ $route.query.kepada }}
                  </div>
                  </div>


      </div>
    </div>

</div>
</template>
<script>
export default {
  name: "display",
  props: ["rp", "kepada", "pesan"],

    setup(props) {
      let date = new Date(props.rp);
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();

      let formattedDate = day + "/" + month + "/" + year;

      return { formattedDate }
    },

  data() {
    return {
      donations: [],
    };
  },
};
</script>

<style>
</style>