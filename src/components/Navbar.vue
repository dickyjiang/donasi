<template>
  <nav class="px-3 pt-3 pb-4 border bg-white border-gray-400 shadow-lg" v-if="user">
    <div class="w-full">
      <div class="flex justify-between items-baseline">
        <p class="font-bold text-lg text-gray-500">
          Halo {{ user.displayName }}
        </p>
        <p class="hidden email font-medium text-gray-500">
          logged in as {{ user.email }}{{ user.uid }}
        </p>
        <div class=" flex gap-3 items-center">
          <router-link
            class="text-gray-500 font-semibold"
            :to="{ name: 'UserProfile', params: { id: user.uid } }"
            >Profile</router-link
          >
          <router-link
            class="text-gray-500 font-semibold"
            :to="{ name: 'UserProfile', params: { id: user.uid } }"
            >Setting</router-link
          >
          <button
            @click="handleClick"
            class=" py-1 px-3 text-center focus:outline-none focus:bg-yellow-800 hover:bg-red-600 hover:text-white rounded  border-gray-500 hover:border-transparent text-base font-semibold text-gray-500 ease-in-out duration-300 "
          >
            Logout
          </button>
        </div>
      </div>
      <div class="mt-4 w-1/2 mx-auto">
            <router-link class="font-semibold tracking-tight py-2 px-3 text-turkis focus:bg-turkis bg-white rounded border-2 border-turkis shadow-lg transform hover:-translate-y-1 ease-in-out duration-300  focus:outline-none focus:ring-1 flex gap-3 items-center justify-center"
              :to="{
                name: 'adddDonation',
                params: { id: user.uid, nama: user.displayName },
              }"
            >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 54 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44 0C38.5 0 34 4.5 34 10C34 11.1211 34.1875 12.207 34.5312 13.2188L17.4062 24.3438C15.5742 22.3086 12.9374 21 10 21C4.50005 21 4.95911e-05 25.5 4.95911e-05 31C4.95911e-05 36.5 4.50005 41 10 41C12.9492 41 15.6016 39.707 17.4375 37.6562L34.5316 48.7812C34.18 49.8007 34.0003 50.8671 34.0003 52C34.0003 57.5 38.5003 62 44.0003 62C49.5003 62 54.0003 57.5 54.0003 52C54.0003 46.5 49.5003 42 44.0003 42C41.0628 42 38.4261 43.3086 36.5941 45.3438L19.4691 34.2188C19.8129 33.2071 20.0004 32.125 20.0004 31C20.0004 29.8672 19.8207 28.8008 19.4691 27.7812L36.5631 16.6562C38.399 18.707 41.0514 20 44.0006 20C49.5006 20 54.0006 15.5 54.0006 10C54.0006 4.5 49.5006 0 44.0006 0H44Z"
                    fill="#65A9BB"
                  />
                </svg>
                <h2>
                  Share link Donasi anda
                </h2>

            </router-link>


      </div>
    </div>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logged out");
      }
    };

    return { handleClick, user };
  },
};
</script>

<style>
</style>

