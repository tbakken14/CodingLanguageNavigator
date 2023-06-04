//Global Variables
let form;
let dropDown1;
let dropDown2;
let section2;

function selectDropDown1(event) {
    //Reset drop down options
    removeOptionsFromDropDown(dropDown2);
    addOptionToDropDown(dropDown2, "Choose an option", true);
    //Add new options
    switch (dropDown1.value) {
        case ("Software Engineering"):
            addOptionToDropDown(dropDown2, "Frontend");
            addOptionToDropDown(dropDown2, "Backend");
            break;
        case ("Data Science"):
            addOptionToDropDown(dropDown2, "Database Management");
            addOptionToDropDown(dropDown2, "Machine Learning");
            addOptionToDropDown(dropDown2, "Statistics");
            break;
        default:
            break;
    }
    section2.removeAttribute("class");
}

function removeOptionsFromDropDown(dropDown) {
    //Remove all options
    while (dropDown.children.length > 0) {
        child = dropDown.children[0];
        dropDown.remove(child);
    }
}

function addOptionToDropDown(dropDown, optionText, isDefault = false) {
    //Create option element
    optionElement = document.createElement("option");
    optionValue = document.createTextNode(optionText);
    optionElement.appendChild(optionValue);
    //Set default properties
    if (isDefault) {
        optionElement.setAttribute("selected", "true");
        optionElement.setAttribute("disabled", "disabled");
        optionElement.setAttribute("hidden", "hidden");
    }
    //Add element to dropdown
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