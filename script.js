const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//to add task through the input field into list//
function addTask(){
    if(inputBox.value === '') {
        alert("You must write something");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    getData();
}
//when any tasked is click, to reflect done or remove//
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        getData()
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        getData()
    }
})
//to store the task input so when browser is refreshed, it keep it//
function getData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
//to show saved tasked on refreshed wwebsite//
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();