calcbtn.addEventListener('click', (e)=>{
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value

    let BMI = (weight/((height/100)**2))
       BMI = (BMI.toFixed(1))

    document.getElementById("bmi").textContent = BMI
     
    console.log(BMI)

    let dis = document.getElementById("result")
           dis.style.display = "block"
    
    let emotion = document.getElementById("emotion")
    let status = document.getElementById("status")
    let status2 = document.getElementById("status2")

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