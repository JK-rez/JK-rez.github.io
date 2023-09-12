
let todoItems= [];

document.querySelector('#add').onclick = function(mylist){
        
    if(document.querySelector('#newtask input').value.length !== 0){
        document.querySelector('.container2').innerHTML += `
            <div class='task'>
                <span id='taskname'>
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class='delete'>
                    <i class='far fa-trash-alt'></i>
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll('.delete');
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        mylist.push(document.querySelector('#newtask input').value)
        console.log(mylist)
    }
}

// function addTodo(text) {
//     const todo = {
//       text,
//       checked: false,
//       id: Date.now(),
//     };
  
//     todoItems.push(todo);
//     renderTodo(todo);
//   }
  





//   // Select the form element
//   const form = document.querySelector('#add');
//   // Add a submit event listener
//   form.addEventListener('click', event => {
//     // prevent page refresh on form submission
//     event.preventDefault();
//     // select the text input
//     const input = document.querySelector('#newtask input');
//     // Get the value of the input and remove whitespace
//     const text = input.value.trim();
//     if (text !== '') {
//       addTodo(text);
//       input.value = '';
//       input.focus();
//     }
//   });


//   function renderTodo(todo) {
//     // Select the first element with a class of `js-todo-list`
//     const list = document.querySelector('.container2');
//     const item = document.querySelector(`[data-key='${todo.id}']`);

//     if (todo.deleted) {
//         item.remove();
//         retrun
//     }
//     // Use the ternary operator to check if `todo.checked` is true
//     // if so, assign 'done' to `isChecked`. Otherwise, assign an empty string
//     // const isChecked = todo.checked ? 'done': '';
//     // Create an `li` element and assign it to `node`
//     const node = document.createElement();
//     // Set the class attribute
//     // node.setAttribute('class', `todo-item ${isChecked}`);
//     // // Set the data-key attribute to the id of the todo
//     // node.setAttribute('data-key', todo.id);
//     // Set the contents of the `li` element created above
//     node.innerHTML = `
//                 <div class='task'>
//                     <span id='taskname'>
//                         ${document.querySelector('#newtask input').value}
//                     </span>
//                     <button class='delete'>
//                         <i class='far fa-trash-alt'></i>
//                     </button>
//                 </div>
//             `;
  
//     // Append the element to the DOM as the last child of
//     // the element referenced by the `list` variable
//     if (item) {
//         list.replaceChild(node, item);
//       } else {
//         list.append(node);
//       }
//   }


//   function deleteTodo(key) {
//     // find the corresponding todo object in the todoItems array
//     const index = todoItems.findIndex(item => item.id === Number(key));
//     // Create a new object with properties of the current todo item
//     // and a `deleted` property which is set to true
//     const todo = {
//       deleted: true,
//       ...todoItems[index]
//     };
//     // remove the todo item from the array by filtering it out
//     todoItems = todoItems.filter(item => item.id !== Number(key));
//     renderTodo(todo);
//   }

//   const list = document.querySelector('.delete');
//   list.addEventListener('click', event => { 
//     if (event.target.classList.contains('delete')) {
//       const itemKey = event.target.parentElement.dataset.key;
//       deleteTodo(itemKey);
//     }
//   });