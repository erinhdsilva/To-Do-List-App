function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskText=taskInput.value;
    if(taskText.trim()!==""){
        const taskList = document.getElementById("taskList");
        const newTaskDiv=document.createElement("div");
        newTaskDiv.className='task';

        const taskSpan=document.createElement("span");
        taskSpan.innerText=taskText;
        taskSpan.onclick=function(){
            this.classList.toggle('completed');
        };
        const deleteButton=document.createElement("button");
        deleteButton.innerText='Delete';
        deleteButton.className='delete';
        deleteButton.onclick=function(){
          taskList.removeChild(newTaskDiv);
        };
        newTaskDiv.appendChild(taskSpan);
        taskList.appendChild(newTaskDiv);
        newTaskDiv.appendChild(deleteButton)
       
        taskList.appendChild(newTaskDiv);
        taskInput.value="";

    }
    else{
        alert("Please enter a task");

    }
}