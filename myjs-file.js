const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,                          //Date.now is just a unique id 
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    };
    console.log(taskData);


    const newCard = `
    
    <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="card-body">
    <img src=${taskData.imageUrl} alt="..." />
    <h5 class="card-title mt-3 fw-bolder text-primary">${taskData.taskTitle}</h5>
    <p class="card-text">${taskData.taskDescription}</p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
    </div>
    </div>
    `

    taskContainer.insertAdjacentHTML("afterend", newCard);
};