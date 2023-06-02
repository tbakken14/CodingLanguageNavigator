let form;
let dropDown1;
let input2;

function selectDropDown1(event) {
    event.preventDefault();
    console.log('selected drop down 1');
}

//Initializations to execute on window load
function InitializeVariables() {
    form = document.getElementsByTagName("form");
    dropDown1 = document.getElementById("input-1");
    console.log(dropDown1);
}

function InitializeEventFunctions() {
    dropDown1.addEventListener("change", selectDropDown1);
    console.log(dropDown1);
}

window.onload = function () {
    InitializeVariables();
    InitializeEventFunctions();
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