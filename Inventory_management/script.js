document.querySelector("form").addEventListener("submit", formSubmit);

//to get the array of object from localstorage
var inventoryArr = JSON.parse(localStorage.getItem("inventory")) || []
 

displayInv() //to display the complete data

/*data=inventoryArr helps us assign all the values of inventoryArr to data and then the data id passed as parameter into the function and later on we run map on data not inventoryArr it is done because when we add search functionality then at that time the text searched is used to match and filter the data into the aray and the filtered data is then passed as argument into displayInv so, our displayInv should be capable of accepting the arguments*/

function displayInv(data=inventoryArr){
  document.querySelector("tbody").textContent=""
  let total = document.querySelector('#total-price span')
  let totalPrice=0;
  
  data.map((elem, index)=>{

   let td0 = document.createElement("td")
   td0.textContent = index+1

    let td1 = document.createElement("td")
    td1.textContent = elem.name

  let td2 = document.createElement("td")
    td2.textContent = elem.category

  let td3 = document.createElement("td")
    td3.textContent = elem.brand

  let td4 = document.createElement("td")
    td4.textContent = elem.price

  let td5 = document.createElement("td")
    td5.textContent = elem.delivery

    let td6 = document.createElement("td")
      
      if(elem.price>1000){
        td6.textContent = "Expensive"
      }else{
        td6.textContent = "Not-Expensive"
      }
    

  let td7 = document.createElement("td")
    td7.textContent = "Delete"

    /* we cannot simply pass the deleteRow function as the event listener, because it expects an argument (the index of the row to be deleted), which is not provided by the event itself.

To solve this issue, we create an anonymous function as the event listener, which then calls the deleteRow function with the appropriate index as an argument. The index can be obtained from the current iteration of the map function, which is creating the table rows. So, the anonymous function essentially acts as a wrapper around the deleteRow function, allowing us to pass the required argument to it.*/
   td7.addEventListener("click", function(){
    deleteRow(index)
   })

    let tr = document.createElement("tr")
    tr.append(td0, td1, td2, td3, td4, td5, td6, td7)

    document.querySelector("tbody").append(tr)

    totalPrice = totalPrice + parseInt(elem.price);
    
  })
  total.textContent = totalPrice
}


//total is accessing the span tag where the price will be updated
let total = document.querySelector('#total-price span')

/*formSubmit function accesses the values from all the inputs of the form when the form is submited. it creates an object for all the values and pushes this object into an array inventoryArr. and the current inventoryArr is updated on the localStorage */

function formSubmit(){
  event.preventDefault()
  
  let name = document.getElementById("name").value
  let category = document.getElementById("category").value
  let brand = document.getElementById("brand").value
  let price = parseInt(document.getElementById("price").value) 
  let delivery = document.getElementById("deliveredBy").value
  
  /**these if conditions will give an alert if the respective input field is empty and the user is submiting the form */
  if (!name) {
    alert("Please Enter product Name")
    return
  }
  if (!category) {
    alert("Please Enter Category")
    return
  }
  if (!brand) {
    alert("Please Enter Brand")
    return
  }
  if (!delivery) {
    alert("Please Enter Delivery option")
    return
  }
  var obj = {
    name: name,
    category: category,
    brand: brand,
    price: price,
    delivery: delivery,
  }

  inventoryArr.push(obj)
  localStorage.setItem("inventory", JSON.stringify(inventoryArr))
    
   displayInv() 
}


/*deleteRow is helping us delete the entire row of table of we can say it is deleting the entire object at particular index of array inventoryArray it accepts index as a parameter and removes it from the array. the current values of array is updated into the local Storage */
  function deleteRow(index){
    var remaining = inventoryArr.splice(index, 1)
  console.log(index)
      
       localStorage.setItem("inventory",JSON.stringify(inventoryArr))
       displayInv()
    }


    /*searchData is an input tag which accepts the values inthe form of string and match it with the the data in the inventoryArr(these data are displayed in table), and if match is found then the filtered data is displayed on screen but no change is made in the array till now.
    the price is a number so it is converted into the string and then compared. */
    function searchData(){
      let searchInput = document.getElementById("search").value.toUpperCase();
      let filteredData = inventoryArr.filter(function(elem) {
        return (
          elem.name.toUpperCase().includes(searchInput) ||
          elem.category.toUpperCase().includes(searchInput) ||
          elem.brand.toUpperCase().includes(searchInput) ||
          elem.delivery.toUpperCase().includes(searchInput) ||
          elem.price.toString().includes(searchInput)
        );
      });
      displayInv(filteredData);
    }