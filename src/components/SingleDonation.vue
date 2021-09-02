<template>
  <div class="rounded-xl shadow-xl mx-auto my-5 overflow-hidden relative p-3 h-40 bg-black max-w-lg">
    <img class=" opacity-60 absolute inset-0 w-full h-full object-cover " src="../assets/always-state-wonder-awe_opt.jpg" alt="">
      <div class="w-full h-full absolute text-white">
      <h1 class=" text-4xl font-bold text-left" ><span class="text-2xl">IDR</span> {{ project.amount }}</h1>
      <h3 class=" mt-2 font-bold text-2xl font-serif" @click="showDetails = !showDetails">"{{ project.pesan }}"</h3>
      <h1 class="font-medium italic absolute bottom-6 right-6 text-right text-2xl" @click="showDetails = !showDetails">{{ project.displayName }}</h1>
      </div>

  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: " http://localhost:3000/projects/" + this.project.id,
    };
  },
//   methods: {
//     deleteProject() {
//       fetch(this.uri, { method: "DELETE" })
//         .then(() => this.$emit("delete", this.project.id))
//         .catch((err) => console.log(err));
//     },

//     toggleComplete() {
//       fetch(this.uri, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ complete: !this.project.complete }),
//       })
//         .then(() => {
//           this.$emit("complete", this.project.id);
//         })
//         .catch((err) => console.log(err));
//     },
//   },
};
</script>

<style scoped>
/* .project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
} */
</style>
