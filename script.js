document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if(name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } 
    else if(!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter valid email address";
        isValid = false;
    }

    if(message === "") {
        document.getElementById("messageError").innerText = "Message is required";
        isValid = false;
    }

    if(isValid) {
        alert("Form Submitted Successfully!");
        document.getElementById("contactForm").reset();
    }

});

document.getElementById("addBtn").addEventListener("click", function() {

    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if(taskValue === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${taskValue}
        <button class="deleteBtn">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    li.querySelector(".deleteBtn").addEventListener("click", function() {
        li.remove();
    });

});