// Variabler deklaration
const completedElement = document.querySelector("#completed");
const inputTodo = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const infoTextElement = document.querySelector("small");
const todolist = document.querySelector("#todolist");

let todoText = "";
let completed = 0;
    // Eventlistener för knappen
addTodoButton.addEventListener("click", addToDo);



// Funktion för att lägga till todo

function addToDo() {
    infoTextElement.textContent = "";
    todoText = inputTodo.value;

    if (todoText.length == 0) {
        infoTextElement.textContent = "Skriv en uppgift!";
        return;
    }
    
    //Att deklarera Li element och sedan addera li element i ul listan
    const item = document.createElement("li");
    todolist.appendChild(item);
    // span element för att kunna markera som klar endast texten.
    const itemText = document.createElement("span");
    itemText.innerText = todoText;
    // Eventlistener på varje li element för att kunna markera som klar.
    itemText.addEventListener("click", 
     function() {
        if (item.getAttribute("class") == "completed") {
        item.setAttribute("class", "");
        completed--;
         completedElement.textContent = "Utförda uppgifter: " + completed;
        
        }else {
            item.setAttribute("class", "completed");
            completed++;
            completedElement.textContent = "Utförda uppgifter: " + completed;
        }

    });
    // för att få in texten i li elementet
    item.appendChild(itemText);
    
    // För att kunna tomma inputfältet.
    inputTodo.value = "";
}
