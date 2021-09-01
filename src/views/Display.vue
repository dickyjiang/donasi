<template>

  <div class=" Home mt-8 max-w-screen-md mx-auto">
    <div v-if="projects && projects.length">
      <div
        v-for="project in projects"
        :key="project.id"
      >
        <SingleDonation
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />

        <!-- <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import SingleDonation from "../components/SingleDonation.vue";
import Navbar from "../components/Navbar.vue";
import { watch } from "vue";
// import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import getCollection from "../composables/getCollection";

export default {
  name: "display",
  components: { Navbar, SingleDonation },
  // setup() {
  //   // const { user } = getUser();
  //   // const router = useRouter();
  //   // watch(user, () => {
  //   //   if (!user.value) {
  //   //     router.push({ name: "Welcome" });
  //   //   }
  //   // });
  // },
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
</style>