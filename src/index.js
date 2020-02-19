
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //let button = document.getElementById('ourbutton')
  let button = document.getElementsByTagName('input')[1]
  let form = document.getElementById('create-task-form')
  let selectbox = document.getElementById('priority-select')

  form.addEventListener("submit", function(e){

    e.preventDefault()
    let theList = document.getElementById('tasks')
    let doneList = document.getElementById('done')
    let button = e.target 
    const userInput = document.getElementById("new-task-description").value
    let newLi = document.createElement("LI")
    newLi.innerHTML = userInput
    let checkBox = document.createElement("INPUT")
    checkBox.type = "checkbox"
    checkBox.classList = "check"

    if (selectbox.value == "low") {
      newLi.style.backgroundColor = "green"
    } else if (selectbox.value == "medium") {
      newLi.style.backgroundColor = "yellow"
    } else {
      newLi.style.backgroundColor = "red"
    }

    newLi.append(checkBox)
    theList.append(newLi)


    checkBox.addEventListener("change", function(e){
      //console.log("worked...")
      //let targ = e.target
      doneList.append(e.target.parentNode)
      //e.target.parentNode.remove()
    })

    ourCheckBox = document.getElementsByClassName('check')
    checks = Array.from(ourCheckBox)
    console.log(checks)
  })


  checks.forEach( console.log(checks))

  
});

//check => check.addEventListener("change", function (e) {