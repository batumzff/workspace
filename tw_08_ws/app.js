// senkron

// promise
// asenkron

// callback

fetch('https://jsonplaceholder.typicode.com/users')
  .then(e => {
    return e.json()
  })
  .then(e => {
    console.log(e)
  })
  .catch(e => {
    console.log(e)
  })



// callback hell

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(e => {
//     return e.json()
//   })
//   .then(e => {
//     const userId = e.filter(user => user.id === 2)[0].id
//     console.log('userId', userId)
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(todos => {
//         const userTodos = todos.filter(todo => todo.userId === userId)
//         const id30 = userTodos.filter(todo => todo.id === 30)[0]
//         console.log('id30', id30)

//         fetch(`https://jsonplaceholder.typicode.com/todos/${id30.id}`)
//           .then(response => response.json())
//           .then(todo => {
//             console.log('todo', todo)
//           })
//           .catch(e => {
//             console.log(e)
//           })
//       })
//   })
//   .catch(e => {
//     console.log(e)
//   })


// async await