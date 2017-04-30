export const UPDATE_TODO = (state, todo) => {
  state.todos.filter(function (obj) {
    if (obj.id === todo.id) {
      obj = todo
    }
    return obj.id === todo.id
  })
}

export const ADD_TODO = (state, todo) => {
  let maxId = 0
  state.todos.filter(function (obj) {
    if (obj.id > maxId) {
      maxId = obj.id
    }
  })
  todo.id = ++maxId
  state.todos.push(todo)
}
