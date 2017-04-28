// Set the key we'll use in local storage.
// Go to Chrome dev tools, application tab, click "Local Storage" and "http://localhost:8080"
// and you'll see this key set below (if logged in):
export const STORAGE_KEY = 'todo-vue-project'

let syncedData = {
  auth: {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null
  },
  user: {
    name: null
  },
  todos: [
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

// Sync with local storage.
if (localStorage.getItem(STORAGE_KEY)) {
  syncedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
}

export const state = syncedData
