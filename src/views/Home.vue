<template>
  <div class="Home">
      <h1>HOME</h1>
      <PostList v-if="showPosts" :posts="posts" />
      <button @click="showPosts = !showPosts">toggle posts</button>
      <button @click="posts.pop()">Delete a Post</button>
    <!-- <div v-if="projects.length">
        <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
        </div>
    </div> -->
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
    name: 'Home',
    components: { SingleProject, PostList,},
    
    setup() {

    const posts = ref([])
    const showPosts = ref(true)
    const error = ref(null)

    const load = async () => {
        try{
            let data = await fetch('http://localhost:3000/projects')
            if (!data.ok) {
                throw Error('no data available')
            }
            
        }
        catch (err) {
            error.value = err.message
            console.log(error.value);

        }
    }
        load()

    return { posts, showPosts,  }

    },
    // data() {
    //     return {
    //         projects:[]
    //     }
    // },
    // mounted() {
    //     fetch('http://localhost:3000/projects')
    //     .then(res => res.json())
    //     .then(data => this.projects = data )
    //     .catch(err => console.log(err.message))
    // },
    // methods : {
    //     handleDelete(id) {
    //         this.projects = this.projects.filter((project) => {
    //             return project.id !== id
    //         })

    //     },
    //     handleComplete(id) {
    //         let p = this.projects.find(project => {
    //             return project.id == id 
    //         })
    //         p.complete = !p.complete

    //     }
    // }

}
</script>

<style>

</style>