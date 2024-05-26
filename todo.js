let apple = 0;//this will be used as currency for when tasks are completed

document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const taskInput = document.getElementById('newTask'); //creating an object that is the users inputed task
  //if the input is empty it will not add a task
  if (taskInput.value.trim() !== ''){
    addTask(taskInput.value.trim()); //Add the task
    taskInput.value = ''; //Clear the input field
  }
});

function addTask(task){
  const taskList = document.getElementById('taskList');

  //creating a <div> for each button with the "col-12 mb-2 classname. This way the buttons stack on top of each other"
  var newDiv = document.createElement("div");
  newDiv.className = "col-md-6";

  const listItem = document.createElement('button'); //creates a button which will be used as a listItem that displays the task
  listItem.className = 'btn btn-secondary w-100';
  listItem.innerText = task; //the text property of the object = the string task which gets passed as a parameter in this function
  listItem.id = 'strikeButton';

  //these are the edit buttons that appear next to each task. They will appear as invisible and locked until the user clicks the edit button.
  var editDiv = document.createElement("div");
  editDiv.className = "col-md-6";
  editDiv.style.visibility = 'hidden';
  const editItem = document.createElement('button');
  editItem.className = 'btn btn-secondary w-100';
  editItem.innerText = 'delete';

  //when a task is clicked, the newDiv is removed, which deletes the task from the list 
  listItem.addEventListener('click', function(){
    taskList.removeChild(newDiv);
    taskList.removeChild(editDiv);
    apple += 1; //task is completed so you earn an apple
    console.log(apple)
  });

  editItem.addEventListener('click', function(){
    taskList.removeChild(newDiv);
    taskList.removeChild(editDiv);
  });

  //the newDiv appends the listItem and the taskList appends the newDiv
  newDiv.append(listItem);
  taskList.appendChild(newDiv);
  editDiv.append(editItem);
  taskList.appendChild(editDiv);
}

//makes the editDiv which holds the delete buttons visible
function toggleEdit(){
  const taskList = document.getElementById('taskList');
  const taskInput = document.getElementById('newTask'); // Ensure taskInput is referenced correctly

  //if the there is no second child then the list is empty, so pressing edit again enables the list
  if(taskList.lastChild = 1){
    taskInput.disabled = false;
  }

  for(let i=0; i<taskList.childElementCount; i++){
    //checks to see if the button is visible and even(an odd button will always be a delete button)
    if(taskList.children[i].style.visibility == 'visible' && i % 2 != 0){
      taskList.children[i].style.visibility = 'hidden';
      taskInput.disabled = false;
    } else {
      taskList.children[i].style.visibility = 'visible'; //makes button visible if it is already hidden
      taskInput.disabled = true; // Disable the task input field
    }
  }
}
