let inputBox = document.querySelector('#input-box');
let listContainer = document.querySelector('.list-container');

/* function sur le bouton */
function addTask() {
    if (inputBox.value != "") {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        li.appendChild(span);
    } else {
        alert("Écrivez quelque chose pour ajouter une tâche");
    }
    inputBox.value = "";
    saveData();
}

/* si j'appuie sur Entrée, ça enclenche le bouton addTask() */
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", function (e) {
    /* si je clique sur la tâche */
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } /* si je clique sur la corbeille */
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

/* sauvegarde des données locales */
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

/* affiche les données */
function displayData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();