let form;
let dropDown1;
let section2;

function selectDropDown1(event) {

    section2.removeAttribute("class");
}

//Initializations to execute on window load
function InitializeVariables() {
    form = document.getElementsByTagName("form");
    dropDown1 = document.getElementById("input-1");
    section2 = document.getElementById("section-2");
    console.log(dropDown1);
}

function InitializeEventListeners() {
    dropDown1.addEventListener("change", selectDropDown1);
    console.log(dropDown1);
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