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

    //creating a <div> for each button with the "col-12 mb-2 classname. This way the buttons stack ontop of each other"
    var newDiv = document.createElement("div");
    newDiv.className = "col-12 mb-2";
  
    const listItem = document.createElement('button'); //creates a button which will be used as a listItem that displays the task
    listItem.className = 'btn btn-secondary w-100';
    listItem.innerText = task; //the text property of the object = the string task which gets passed as a parameter in this function
    
    //when a task is clicked, the newDiv is removed, which deletes the task from the list 
    listItem.addEventListener('click', function(){ 
        taskList.removeChild(newDiv);
    });

    //the newDiv appends the listItem and the taskList appends the newDiv
    newDiv.append(listItem);
    taskList.appendChild(newDiv);
}