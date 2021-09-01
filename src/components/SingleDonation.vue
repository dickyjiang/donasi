<template>
  <div class="rounded-xl shadow-xl mx-auto bg-yellow-600 py-2 px-3 my-5">
    <div class="actions  justify-between items-baseline" >
      <h1 class="text-lg font-bold text-center" >{{ project.amount }}</h1>
    </div>
      <h3 class=" mt-2 text-center font-bold text-lg font-serif" @click="showDetails = !showDetails">{{ project.pesan }}</h3>
      <div class="mt-2">
        <h3 class="text-md text-right font-bold"> Pengirim : </h3>
        <h1 class="font-bold text-right text-lg" @click="showDetails = !showDetails">{{ project.displayName }}</h1>
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
