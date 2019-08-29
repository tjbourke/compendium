<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <photos />
  </div>
</template>

<script>
// @ is an alias to /src
import Photos from '../views/Photos.vue';
//import Photos from '@/components/Photos.vue'; // Why does this not work?

export default {
  name: 'home',
  components: {
    Photos
  }
}
</script>
