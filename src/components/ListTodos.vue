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
      items: [
        {
          id: 1,
          title: 'Test todo #1',
          description: 'Test todo description #1'
        },
        {
          id: 2,
          title: 'Test todo #2',
          description: 'Test todo description #2'
        },
        {
          id: 3,
          title: 'Test todo #3',
          description: 'Test todo description #3'
        }
      ]
    }
  },
  created () {
    // Initialize the todos in Vuex.
    this.$store.commit('INIT_TODOS', this.items)
  }
}
</script>
