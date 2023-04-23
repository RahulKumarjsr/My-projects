calcbtn.addEventListener('click', (e)=>{
    //accessing the input value of height and weight
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value

   /**calculating BMI using formula and fixing the decimal value to 1 place */
    let BMI = (weight/((height/100)**2))
       BMI = (BMI.toFixed(1))

       /**Displaying the result */
    document.getElementById("bmi").textContent = BMI
     
    console.log(BMI)

    let dis = document.getElementById("result")
           dis.style.display = "block"
    
    let emotion = document.getElementById("emotion")
    let status = document.getElementById("status")
    let status2 = document.getElementById("status2")
    /**The BMI of user is compared with the BMI chart and the status is displayed on the screen */
    if(BMI<16){ 

      status.textContent = "Severly Thin"

    }else if (BMI>16 && BMI<17){
        
        status.textContent = "Moderately Thin"

    }else if (BMI>17 && BMI<18.5){
    
        status.textContent = "Mild Thin"

    }else if (BMI>18.5 && BMI<25){

        
        status.textContent = "Normal Weight"
        

    }else if (BMI>25 && BMI<30){
    
        status.textContent = "Over Weight"

    }else if (BMI>30 && BMI<35){
    
        status.textContent = "Obese Class I"

    }else if (BMI>35 && BMI<40){
    
        status.textContent = "Obese Class II"

    }else if (BMI>40){
    
        status.textContent = "Obese Class III"

    }
/**See in this part we, based on the status of BMI the happy or sad emotion is expressed and to do that one is blocked in display and another is shown. (see style.css to understand more) */
   if(status.textContent === "Normal Weight"){
    emotion2.style.display = "block"
    emotion.style.display = "none"
    status.style.color = "green"
   }else{
    emotion2.style.display = "none"
    emotion.style.display = "block"
    status.style.color = "red"
   }

  // Clear input tags
//   document.getElementById("weight").value = '';
//   document.getElementById("height").value = '';
    
})