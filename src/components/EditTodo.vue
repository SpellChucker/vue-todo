<template>
  <div class="box">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>

    <label for="title" class="label">Title</label>
    <input type="text" name="title" v-model="todo.title" class="input">
    <label for="description" class="label">Description</label>
    <textarea name="description" class="textarea" v-model="todo.description"></textarea>
    <div class="block" style="margin-top: 10px;">
      <button class="button is-primary">Submit</button>
      <button class="button" @click="$router.push('/todos')">Cancel</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'todo-list',
  data () {
    return {
      title: 'Edit Todo Item',
      subtitle: 'Provide a title and description for your to-do item.',
      todo: {},
      allTodos: []
    }
  },
  created () {
    this.allTodos = this.$store.state.todos
    // Call the endpoint here or find a better way to get the information
    // for the item we're editing.
    let id = parseInt(this.$route.params.id) - 1

    if (this.allTodos[id] !== undefined) {
      this.todo = this.allTodos[id]
    }
  }
}
</script>
