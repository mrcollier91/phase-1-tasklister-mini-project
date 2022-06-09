document.addEventListener("DOMContentLoaded", () => {

  let NewTaskDescription = document.getElementById('new-task-description')

document.getElementById('new-task-submit').addEventListener('click', (e) => {
    //once clicked need to add preventDefult & create path and function to get input text value from new-task-description
    e.preventDefault()
    addNewToDo(NewTaskDescription.value, getSelectorValue.value)

  })
  
//function to create element of value typed into input box li text content = todo because todo is text input box
  function addNewToDo(toDo, option) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = ' x '
    li.textContent = `${toDo} - ${option}`
    li.appendChild(btn)
    document.querySelector('#tasks').appendChild(li)
  }
  function handleDelete(e) {
    e.target.parentNode.remove()
  }

  // create drop down selector to style input value to a color to show priority 
let selector = document.createElement("select")
document.getElementById("create-task-form").append(selector)
selector.setAttribute('id', 'drop-down')
let option1 = document.createElement('option')
let option2 = document.createElement('option')
document.querySelector('select').append(option1)
document.querySelector('select').append(option2)
option1.setAttribute('id', 'Urgent')
option2.setAttribute('id', 'Not-Ugent')
option1.textContent = "Urgent"
option2.textContent = "Not Urgent"

//create a function that checks value of selector 
let getSelectorValue = document.querySelector('#drop-down')

document.getElementById('create-task-form').addEventListener('submit', (e)=>{
  e.preventDefault()
  console.log(getSelectorValue.value)
  colorNewTask(e.target.value)
})

//create function to grab todo and color based on drop down input 
function colorNewTask(getSelectorValue) {
  let tasks = document.getElementById('tasks')
  if (tasks === 'Urgent') {
    console.log('got it')
  } 
}


})

