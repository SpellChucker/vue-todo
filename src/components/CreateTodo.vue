<template>
  <div class="box">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>

    <label for="title" class="label">Title</label>
    <input type="text" name="title" v-model="todo.title" class="input">
    <label for="description" class="label">Description</label>
    <textarea name="description" class="textarea" v-model="todo.description"></textarea>
    <button class="button is-primary" style="margin-top: 10px;" @click="addTodo">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      title: 'Create Todo Item',
      subtitle: 'Provide a title and description for your to-do item.',
      todo: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('ADD_TODO', this.todo)
      this.$router.push('/todos')
    }
  }
}
</script>
