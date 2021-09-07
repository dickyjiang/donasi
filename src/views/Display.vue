<template>
  <div class="px-4 mt-10 mb-20">
    <h1>rupiah na{{ $route.query.rp }} kepada na {{ $route.query.kepada }} </h1>
  </div>
</template>
<script>
export default {
  name: "display",
  props: ["rp", "kepada"],
  data() {
    return {
      donations: [],
    };
  },
};
</script>

<style>
</style>