<template>
  <Navbar />

  <div class="Home mt-10 mb-20 px-4 max-w-screen-md mx-auto">
    <div v-if ="donations.length">
      <div v-for="donat in donations" :key="donat.id">
        <SingleDonation 
        :donation="donat" 
        @delete="handleDelete"/>
      </div>
    </div>
    <!-- <div v-if="projects && projects.length">
      <div v-for="project in projects" :key="project.id"
      >
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import Navbar from "../components/Navbar.vue";
import { watch } from "vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import getCollection from "../composables/getCollection";
import SingleDonation from "../components/SingleDonation.vue";
import { projectFirestore } from '../firebase/config' 

export default {
  name: "Home",
  components: { Navbar, SingleDonation,},
    data() {
      return {
        donations: [],
      }
    },

    async mounted() {
      await this.getDonations();
    },

  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },

  methods: {
    handleDelete(id) {
      this.donations = this.donations.filter((donation) => {
        return donation.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.donations.find((donation) => {
        return donation.id == id;
      });
      p.complete = !p.complete;
    },
    
    async getDonations() {
      try {
      const res = await projectFirestore.collection('donasi').orderBy('createdAt', 'desc').get()
      console.log(res.docs)

      this.donations = res.docs.map(doc => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      console.log({err})
      // error.value = err.message
    }

    }
  },

  // async mounted() {
  //   const { user } = getUser();
  //   const { error, documents } = getCollection("messages1", user._value.uid);
  //   this.projects = documents;
  // },
  // methods: {
  //   handleDelete(id) {
  //     this.projects = this.projects.filter((project) => {
  //       return project.id !== id;
  //     });
  //   },
  //   handleComplete(id) {
  //     let p = this.projects.find((project) => {
  //       return project.id == id;
  //     });
  //     p.complete = !p.complete;
  //   },
  // },
};
</script>

<style>
</style>