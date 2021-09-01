<template>

  <div class=" Home mt-8 max-w-screen-md mx-auto">
    <transition-group tag="ul" name="list" 
    appear
    @before-enter="beforeEnter"
    @enter="Enter"
    @after-enter="afterEnter"
    >
      <li>
        <div v-if="projects && projects.length">
          <div v-for="project in projects" :key="project.id">
          <SingleDonation  :project="project" @delete="handleDelete" @complete="handleComplete" />
          </div>
        </div>
        <div v-else class="text-center text-xl font-bold">Belum ada Donasi</div>
      </li>
    </transition-group>
  </div>
  <!-- <div class=" Home mt-8 max-w-screen-md mx-auto">
    <div v-if="projects && projects.length">
      <div v-for="project in projects" :key="project.id"
      >
      <SingleDonation 
        :project="project"
        @delete="handleDelete"
        @complete="handleComplete"
      />
      </div>
    </div>
  </div> -->
</template>

<script>
import SingleDonation from "../components/SingleDonation.vue";
import Navbar from "../components/Navbar.vue";
import { ref, watch } from "vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import getCollection from "../composables/getCollection";

export default {
  setup() {
  

    const beforeEnter =()=>{
      console.log("before enter")
    }
    const Enter =()=>{
      console.log(" enter")

    }
    const afterEnter =()=>{
        console.log("after enter")

    }
    return { beforeEnter, Enter, afterEnter, }
  },

  name: "display",
  components: { Navbar, SingleDonation },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
  data() {
    return {
      projects: [],
    };
  },

  async mounted() {
    const { user } = getUser();
    const { error, documents } = getCollection("donasi", user._value.uid);
    this.projects = documents;
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.projects.find((project) => {
        return project.id == id;
      });
      p.complete = !p.complete;
    },
  },
};
</script>

<style>
/* list transition */
.list-enter-from {
  opacity: 0;
  transform: scale(0.4);
}
.list-enter-active {
  transition: all .8s ease;
}
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  transition: all .8s ease;
}


</style>