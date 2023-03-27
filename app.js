let btn = document.querySelector('#button')
let display = document.querySelector("#display")

function determineZodiac(){
let date = document.getElementById("date").value;
let month = document.getElementById("month").value;
let name = document.getElementById("name").value;


 //aries
 if((month == 03 && date >= 21 && date <= 31) || (month == 04 && date >= 1 && date <= 19)){
    console.log("You are an Aries!")
    display.innerHTML = "Hey " + name + "," + " You are an Aries!"
    display.style.backgroundColor = "white";
}

//taurus
else if((month == 04 && date >= 20 && date <= 30) || (month == 05 && date >= 1 && date <= 20)){
console.log("You are a Taurus!")
display.innerHTML = "Ohh, You are a Taurus baby!"
display.style.backgroundColor = "white";
}

//gemini
else if((month == 05 && date >= 21 && date <= 31 ) || (month == 06 && date >= 1 && date <= 21)){
display.innerHTML = "Your sign is gemini! " + name
display.style.backgroundColor = "white";
}

//cancer
else if((month == 06 && date >= 22 && date <= 30 ) || (month == 07 && date >= 1 && date <= 22)){
display.innerHTML = "You are a cancer! " + name
display.style.backgroundColor = "white";
}
//leo

else if((month == 07 && date >= 23 && date <= 31) || (month == 08 && date >= 1 && date <= 22)){
display.innerHTML = "wow, You are a Leo!"
display.style.backgroundColor = "white";
}

//virgo
else if((month == 08 && date >= 23 && date <= 31 ) || (month == 09 && date >= 1 && date <= 22)){
display.innerHTML = name + " , You are a Virgo!"
display.style.backgroundColor = "white";
}

//libra
else if ((month == 09 && date >= 23 && date <= 30) || (month == 10 && date >= 1 && date <= 23)){
display.innerHTML = "Your zodiac sign is  Libra! " + name
display.style.backgroundColor = "white";
}

//scorpio

else if((month == 10  && date >= 24 && date <= 31 ) || (month == 11 && date >= 1 && date <= 21 )){
display.innerHTML = "You are a Scorpio!"  
display.style.backgroundColor = "white";
}
//sagittarius

else if((month == 11 && date >= 22 && date <= 30) || (month == 12  && date >= 1  && date <= 21)){
display.innerHTML = name + " , " + "You are a Saggitarius!"
display.style.backgroundColor = "white";
}


//capricon
else if((month == 12  && date >= 22 && date <= 31) || (month == 1 && date >= 1  && date <= 19)){
display.innerHTML = "Your sign is Capricon!"
display.style.backgroundColor = "white";
}
//aquarius
else if((month == 1 && date >= 20 && date <= 31 ) || (month == 2 && date >= 1 && date <= 18)){
display.innerHTML = name + " , " + "You are an Aquarius!"
display.style.backgroundColor = "white";
}

//pisces
else if( (month == 2 && date >= 19 && date <= 28) || (month == 3 && date >= 1 && date <= 20)){
display.innerHTML = name + " , " + "You are a Pisces baby!"
display.style.backgroundColor = "white";
}



else{
console.log("Oops! cannot determine your sign due to incorrect date")
display.innerHTML = "Oops! cannot determine your sign due to incorrect date :(" 
display.style.backgroundColor = "white";


}

    
}

btn.addEventListener("click", determineZodiac);