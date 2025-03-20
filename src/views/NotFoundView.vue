<template>
  <div id="error-page">
    <h1>Oops!</h1>
    <p>Route not found</p>
    <router-link to="/">Back to home</router-link>
  </div>
</template>
<script>
import Header from "../components/Header.vue";

export default {
  components: {Header}
}
</script>
