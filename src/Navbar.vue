<template>
  <div class="header">
    <nav class="nav">
      <router-link :to="{ name: 'list' }" class="nav-item">List</router-link>
      <router-link :to="{ name: 'create' }" class="nav-item">Create</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
