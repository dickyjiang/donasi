<template>
  <div class="card-donation rounded-xl shadow-xl mx-auto bg-yellow-600 p-10 my-5">
    <div class="actions  justify-between items-baseline" >
      <h1 class="text-7xl font-bold text-center" >{{ donation.amount }}</h1>
    </div>
      <h3 class=" mt-8 text-center font-bold text-5xl font-serif" @click="showDetails = !showDetails">{{ donation.pesan }}</h3>
      <div class="mt-8">
        <h3 class="text-lg text-right font-bold"> Pengirim : </h3>
        <h1 class="font-bold text-right text-4xl">{{ donation.displayName }}</h1>
      </div>
      <button @click="deleteDonation">
        delete
      </button>
  </div>
</template>

<script>
import { projectFirestore } from '../firebase/config' 

export default {
  props: ["donation"],
  data() {
    return {
      // showDetails: false,
      uri: "http://localhost:3000/donations/" + this.donation.id,
    };
  },
  methods: {
    async deleteDonation() {
      try {
        await projectFirestore.collection('donasi').doc(this.donation.id).delete();
        this.$emit("delete", this.donation.id);
      }
      catch(err) {
        console.log({err})
      }

      // fetch(this.uri, { method: "DELETE" })
      //  .then(() => this.$emit("delete", this.donation.id))
      //  .catch((err) => console.log(err));
    },

    // toggleComplete() {
    //   fetch(this.uri, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ complete: !this.project.complete }),
    //   })
    //     .then(() => {
    //       this.$emit("complete", this.project.id);
    //     })
    //     .catch((err) => console.log(err));
    // },
  },
};
</script>

<style scoped>

.card-donation {
  position: relative;
  display: flex;
  flex-direction: column;
}

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
