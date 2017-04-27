<template>
  <div class="header">
    <nav class="nav">
      <div class="nav-center">
        <router-link :to="{ name: 'list' }" class="nav-item is-tab" exact>List</router-link>
        <router-link :to="{ name: 'create' }" class="nav-item is-tab" exact>Create</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
