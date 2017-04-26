<template>
  <div id="app">
    <Navbar></Navbar>
    <section class="section">
      <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>
