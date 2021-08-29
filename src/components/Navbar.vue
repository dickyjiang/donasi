<template>
  <nav
    class="
      flex
      justify-between
      p-3
      border-4
      bg-white
      border-gray-800
      mt-2
      shadow-2xl
    "
    v-if="user"
  >
    <div>
      <p class="font-semibold text-2xl">Halo {{ user.displayName }}</p>
      <p class="email font-medium">Currently logged in as {{ user.email }}</p>
    </div>
    <div class="flex items-center">
      <div
        class="
          font-semibold
          mx-3
          max-w-lg
          py-2
          px-6
          focus:outline-none
          focus:bg-yellow-800
          rounded
          border-2 border-gray-700
          text-lg
          shadow-lg
          transform
          hover:-translate-y-1
          ease-in-out
          duration-700
        "
      >
        <router-link :to="{ name: 'addProject' }">Add new Project</router-link>
      </div>
      <div
        class="
          font-semibold
          mx-3
          max-w-lg
          py-2
          px-6
          focus:outline-none
          focus:bg-yellow-800
          rounded
          border-2 border-gray-700
          text-lg
          shadow-lg
          transform
          hover:-translate-y-1
          ease-in-out
          duration-700
        "
      >
        <router-link :to="{ name: 'adddDonation' }">Donasi</router-link>
      </div>

      <button
        @click="handleClick"
        class="
          mx-3
          max-w-lg
          py-2
          px-6
          focus:outline-none
          focus:bg-yellow-800
          rounded
          bg-yellow-600
          text-lg
          font-semibold
          shadow-lg
          transform
          hover:-translate-y-1
          ease-in-out
          duration-700
        "
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      if (!error.value) {
        console.log('user logged out')
      }
    }

    return { handleClick, user }
  },
}
</script>

<style>
/* nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  } */
</style>