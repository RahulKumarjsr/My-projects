document.querySelector("form").addEventListener("submit", submitForm)
let empArr = JSON.parse(localStorage.getItem("employee")) || []

displayEmp()

function displayEmp(data = empArr){
    let tbody = document.querySelector("tbody")
    tbody.textContent = ""
   data.map((elem, index) => {
    let tr = document.createElement("tr")

    let td0 = document.createElement("td")
    td0.textContent = index+1

    let td1 = document.createElement("td")
    td1.textContent = elem.name

    let td2 = document.createElement("td")
    td2.textContent = elem.id

    let td3 = document.createElement("td")
    td3.textContent = elem.department

    let td4 = document.createElement("td")
    td4.textContent = elem.experience

    let td5 = document.createElement("td")
    td5.textContent = elem.email

    let td6 = document.createElement("td")
    td6.textContent = elem.mobile

    let td7 = document.createElement("td")
    if(elem.experience>5){
        td7.textContent = "Senior"
    }else if(elem.experience>=2 && elem.experience<=5){
        td7.textContent = "Junior"
    }else{
        td7.textContent = "Fresher"
    }

    let td8 = document.createElement("td")
    td8.textContent = "Delete"
    td8.style.backgroundColor = "#ef9797"
    
    td8.addEventListener("click", () => {
        deleteRow(index)
    })

    tr.append(td0, td1, td2, td3, td4, td5, td6, td7, td8)

    tbody.append(tr)
   }) 
}



function submitForm() {
    event.preventDefault()
let name = document.getElementById("name").value
let id = document.getElementById("employee_id").value
let department = document.getElementById("department").value
let experience = document.getElementById("experience").value
let email = document.getElementById("email").value
let mobile = document.getElementById("mobile").value

let obj = {
    name: name,
    id: id,
    department: department,
    experience: experience,
    email: email,
    mobile: mobile
}
if(!name){
    alert("Please Enter Employee Name")
    return
}

empArr.push(obj)
localStorage.setItem("employee",JSON.stringify(empArr))

displayEmp()
}




function deleteRow(index){
    empArr.splice(index, 1)
    localStorage.setItem("employee",JSON.stringify(empArr))

displayEmp()
}

function handleFilter(){
    let selected  = document.getElementById("filter").value
    
    let filter = empArr.filter((elem) => {
        if(selected == "HR"){
            return elem.department == "HR"
        }else if(selected == "Finance"){
            return elem.department == "Finance"
        }else if(selected == "Engineering"){
            return elem.department == "Engineering"
        }else if(selected == ""){
            return true
        }
           
        
    })
    displayEmp(filter)
}


// function searchData(){
//     let search1 =  document.getElementById("search").value.toUpparCase()
 
//    let filterSearch =  empArr.filter((elem) => {
//      return elem.department.toUpparCase().includes(search1)
     
//    })
//    displayEmp(filterSearch)
//  }

function searchData(){
    let search = document.getElementById("search").value.toUpperCase()
    
    let filterSearch = empArr.filter((elem)=>{
      return (
        elem.name.toUpperCase().includes(search)||
        elem.id.toUpperCase().includes(search)||
        elem.department.toUpperCase().includes(search)||
        elem.experience.toUpperCase().includes(search)||
        elem.email.toUpperCase().includes(search)||
        elem.mobile.toString().includes(search)
      )
    })
    displayEmp(filterSearch)
   }