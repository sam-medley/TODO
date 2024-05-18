document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const taskInput = document.getElementById('newTask'); //creating a object that is the users inputed task
  //if the input is empty it will not add a task
  if (taskInput.value.trim() !== ''){
    addTask(taskInput.value.trim()); //Add the task
    taskInput.value = ''; //Clear the input field
  } 
});

function addTask(task){
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li'); //must be li element so it stays in column, bootstrap rule bruh
    listItem.className = 'list-group-item';
    listItem.innerText = task; //the text property of the object = the string task which gets passed as a parameter 
    listItem.addEventListener('click', function(){ //when the add button is clicked, the item text color becomes green
        this.classList.toggle('list-group-item-success');
    });

    const removeBtn = document.createElement('button'); //creating remove object for when we want to remove tasks.
    removeBtn.className = 'btn btn-danger btn-sm float-end'; //a remove button is created and implemented into the task itself
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);
}