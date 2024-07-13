const todoList = [{
    name:'make dinner',
    deuDate:'2024-07-13'
},
{
    name:'Wash dishes',
    deuDate:'2024-07-13'
}]; //default array

renderTodoList();

function renderTodoList()
{
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++)
    {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const deuDate = todoObject.deuDate;
        const { name, deuDate } = todoObject;
        const html = `
        
        <div>${name}</div>
        <div>${deuDate}</div>
          <button class="delete" onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
          ">Delete</button>

        `;
        todoListHTML += html;

        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML ;

    }

}


function addTodo()
{
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;  //. value used to get element outside.

   const dateInputElement = document.querySelector('.js-deu-date-input');
   const deuDate = dateInputElement.value;


   todoList.push({
    // name: name,
    // deuDate : deuDate
    name,
    deuDate
    });

   inputElement.value = ''; //this is used for reset the textarea input
   dateInputElement.value = '';
   renderTodoList();

}