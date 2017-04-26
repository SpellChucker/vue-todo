import Vue from 'vue'
import Router from 'vue-router'
import ListTodos from '@/components/ListTodos.vue'
import CreateTodo from '@/components/CreateTodo.vue'
import EditTodo from '@/components/EditTodo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/todos'
    },
    {
      path: '/todos',
      name: 'list',
      heading: 'Todos',
      component: ListTodos
    },
    {
      path: '/todos/create',
      name: 'create',
      heading: 'Create Todo',
      component: CreateTodo
    },
    {
      path: '/todos/edit/:id',
      name: 'edit',
      heading: 'Edit Todo',
      component: EditTodo
    }
  ]
})
