const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to library',
    completed: false
  },
  {
    id: 3,
    title: 'Go shopping',
    completed: true
  }

]

// for(let i = 0; i < todos.length; i++){
//   let todo = todos[i];
//   if(todo.completed === true){
//       console.log(i, todo.title);
//   }
// }

// for(let i in todos){
//   let todo = todos[i];
//   if(todo.completed === true){
//       console.log(i, todo.title);
//   }
  for(let todo of todos){
    if(todo.completed === true){
        console.log(todo.title);
    }
}