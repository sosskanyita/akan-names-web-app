//created a submit 
const submit = document.getElementById("submit");

//on click
submit.addEventListener("click",function() {
    

//var for days
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const male = document.getElementById("male");
        const female = document.getElementById("female");
        const century = year.slice(0,2);
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
        let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    
    console.log(day);

        if (parseInt(day) > 0 && parseInt(day) < 31);
        else {
            alert("invalid input");
            document.getElementById("me").style.display = "none"
        }
    
        if(male.checked){
            return 'Name: ' + maleNames[dayOfTheWeek] + ', ' + 'Day: ' + days[dayOfTheWeek];
        }else{
            return 'Name: ' + femaleNames[dayOfTheWeek] + ', ' + 'Day: ' + days[dayOfTheWeek];
        }
  
})
// return akan name








// function generateName(date, month, year){
//     daysTotal = date;
// }