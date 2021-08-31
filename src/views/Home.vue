<template>
  <Navbar />

  <div class=" Home mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-lg mx-auto ">
    <div v-if="projects && projects.length">
      <div
        v-for="project in projects"
        :key="project.id"
      >
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import Navbar from "../components/Navbar.vue";
import { watch } from "vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import getCollection from "../composables/getCollection";

export default {
  name: "Home",
  components: { Navbar, SingleProject },
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
    const { error, documents } = getCollection("messages1", user._value.uid);
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