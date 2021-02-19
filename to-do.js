const addButton = document.getElementById("add");



addButton.addEventListener("click", () =>{
    
    const newTask = document.createElement("li");
    const wTask = document.getElementById("task");
    newTask.innerHTML = wTask.value;
    wTask.value = "";
    document.getElementById("toDo").append(newTask);

    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-button");
    removeButton.textContent = "X";
    newTask.append(removeButton);
    
    
    removeButton.addEventListener("click", () =>{
        newTask.remove();
        
        
    });
   
});
const itemChecked = document.querySelector("ul");

itemChecked.addEventListener("click",function(line){
    if (line.target.tagName === "LI"){
        line.target.classList.toggle("done");
        

    }
}, false);
