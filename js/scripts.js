//Global Variables
let form;
let dropDown1;
let dropDown2;
let section2;

function selectDropDown1(event) {
    section2.removeAttribute("class");
    newOption = document.createElement("option");
    newValue = document.createTextNode("test");
    newOption.appendChild(newValue);
    dropDown2.appendChild(newOption);
}

function removeOptionsFromDropDown(dropDown) {
    children = dropDown.children;
    while (dropDown.children.length > 0) {
        child = dropDown.children[0];
        dropDown.remove(child);
    }
}

function addOptionToDropDown(dropDown, optionText) {
    optionElement = document.createElement("option");
    optionValue = document.createTextNode(optionText);
    optionElement.appendChild(optionValue);
    dropDown.appendChild(optionElement);
}

//Initializations to execute on window load
function InitializeVariables() {
    form = document.getElementsByTagName("form");
    dropDown1 = document.getElementById("input-1");
    dropDown2 = document.getElementById("input-2");
    section2 = document.getElementById("section-2");
}

function InitializeEventListeners() {
    dropDown1.addEventListener("change", selectDropDown1);
}

window.onload = function () {
    InitializeVariables();
    InitializeEventListeners();
};

/*
Branching Ideas:

Data Science: 
    Database Management:
        SQL
    Machine Learning: 
        Python
    Statistics: 
        R

Software Engineering: 
    Frontend: 
        Javascript  
    Backend: 
        C#


*/