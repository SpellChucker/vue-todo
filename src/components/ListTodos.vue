<template>
  <div class="box">
    <h1 class="title">{{ header }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in items">
          <td><router-link :to="{ name: 'edit', params: { id: todo.id }}">{{ todo.title }}</router-link></td>
          <td>{{ todo.description }}</td>
        </tr>
      </tbody>
      <tfoot>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      header: 'Todos List',
      // Mocked right now.
      items: this.$store.state.todos
    }
  }
}
</script>
