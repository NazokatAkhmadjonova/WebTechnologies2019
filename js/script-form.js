$(document).ready(function(){
//////////////////////////////Dynamically generated form////////////////////////////////
// ////////////////////////////////First step: building a structure of the form/////////////////////////////////

var formBox = document.querySelector(".form-box");                  //the variable formBox-where the form will be located
var form = document.createElement("form");                          //the Form element created in html <form></form>
formBox.appendChild(form);                                          //to put the form inside the body
var inputFirstName =document.createElement("input");                // <input></input>
inputFirstName.setAttribute("type", "text");                        //
inputFirstName.setAttribute("placeholder", "First Name");           //
inputFirstName.setAttribute("class","name");                        //<input type="text" placeholder="First Name" class="name">
var inputLastName =document.createElement("input");                 
form.appendChild(inputFirstName);                                   //to put an input into the form element
inputLastName.setAttribute("type", "text");
inputLastName.setAttribute("placeholder", "Last Name");
inputLastName.setAttribute("class","l_name");
form.appendChild(inputLastName);
var age =document.createElement("input"); 
age.setAttribute("type", "text");
age.setAttribute("placeholder", "Your Age");
age.setAttribute("class","age");
form.appendChild(age);
var address =document.createElement("input");                       //to create the input for address with drop-down list
address.setAttribute("list", "districts");                          // drop-down list
address.setAttribute("placeholder", "Your District");               //to show the value which needs to be put in the field
address.setAttribute("class","address");                             
form.appendChild(address);      
var dataList = document.createElement("datalist");                  //element datalist which will hold the option values
dataList.setAttribute("id", "districts");                       
form.appendChild(dataList);
var option1 =document.createElement("option");                      //11 options for 11 districts in Tashkent
var option2 =document.createElement("option");
var option3 =document.createElement("option");
var option4 =document.createElement("option");
var option5 =document.createElement("option");
var option6 =document.createElement("option");
var option7 =document.createElement("option");
var option8 =document.createElement("option");
var option9 =document.createElement("option");
var option10 =document.createElement("option");
var option11 =document.createElement("option");
                                                                    //to put the options inside of the datalist              
dataList.appendChild(option1);
dataList.appendChild(option2);
dataList.appendChild(option3);
dataList.appendChild(option4);
dataList.appendChild(option5);
dataList.appendChild(option6);
dataList.appendChild(option7);
dataList.appendChild(option8);
dataList.appendChild(option9);
dataList.appendChild(option10);
dataList.appendChild(option11);

var phoneNumber =document.createElement("input");                   
phoneNumber.setAttribute("type", "text");
phoneNumber.setAttribute("placeholder", " Phone Number");
phoneNumber.setAttribute("class","phone_num");
form.appendChild(phoneNumber);

var button = document.createElement("button");                      //creating the button
button.setAttribute("onclick", 'makeJson()');
form.appendChild(button);
var buttonList = document.createElement("a");
formBox.appendChild(buttonList);

/////////////////////////////////////////////Second Step. Setting the values for the elements//////////////////////////////////////////////////////////////

option1.innerHTML=("Almazar District");
option2.innerHTML=("Bektemir District");
option3.innerHTML=("Mirzo-Ulug'bek District");
option4.innerHTML=("Uchtepa District");
option5.innerHTML=("Yunusabad District");
option6.innerHTML=("Khamza District");
option7.innerHTML=("Mirabad District");
option8.innerHTML=("Yakkasarayy District");
option9.innerHTML=("Chilanzar District");
option10.innerHTML=("Zangiata District");
option11.innerHTML=("Sergeli District");

button.innerHTML=("To get in a line");
buttonList.innerHTML=("See my number in a waiting list");
buttonList.setAttribute("href", "pms.html");



// ////////////////////////////////////Validation//////////////////////////////////////////

    button.addEventListener("click", function(){
        event.preventDefault();
    var letter =/^[A-Za-z]+$/;
    var number =/^[0-9]+$/;
    
    if(inputFirstName.value === "" && inputLastName.value === "" && address.value ==="" && phoneNumber.value ==="" && age.value ===""){
        alert("Please, fill all the required fields");
        inputFirstName.focus();                                ////if none of the fields are filled the coursor will focus to the first field
        return false; 
    }else if(inputFirstName.value === ""){                     ////if First name is not mentioned show the following message in alert
        alert("Please, write your name");
        inputFirstName.focus(); 
        return false;

    }else if(inputFirstName.value.match(number)){              ////if the value of the First name field is a number show the message
        alert("Your Name cannot include numbers");
        inputFirstName.focus(); 
        return false; 

    }else if(inputLastName.value === ""){
        alert("Please, write your surname");
        inputLastName.focus(); 
        return false;

    }else if(inputLastName.value.match(number)){
        alert("Your last Name cannot include numbers");
        inputLastName.focus(); 
        return false;

    }else if(phoneNumber.value.match(letter)){
        alert("The phone number cannot include letters");
        inputFirstName.focus(); 
        return false;

    }else if(phoneNumber.value.includes("+998") ===false) {                            ////the field shoud contain the code +998
        alert("Please, write you full phone number with the code (+998)");
        inputLastName.focus(); 
        return false; 

    }else if (age.value.match(letter)){
        alert("Please, write your age with numbers");
        age.focus(); 
        return false; 
    
    }else if(age.value<=0){                                                             ///the age cannot be the negative number
        alert("Your age cannot be a negative number or 0");
        inputFirstName.focus(); 
        return false;
        
    } else{
        alert("Dear, "+inputFirstName.value +" " + inputLastName.value +" you made an appointment. We will call you back in a day and say you the time and date. Thank you for using out services!");
        form.reset();
        return true;             // if everithing is alright show the message containing the name and surname of the user and clear the fields 
    };
    
})

})

/////////////////////////JSON connected to take the values of the first 3 inputs and send it to the memory of the browser//////////////////////////////////////////////////////////////////////

var globalArray = [];
    function ObjConstructor(name, surname, age) {
        this.name = name +" " + surname;
        this.age = age;
    }

function makeJson() {
    var consumerProfile = new ObjConstructor(inputFirstName.value, inputLastName.value, age.value);
    globalArray.push(consumerProfile);

    localStorage.setItem('anArray', JSON.stringify(globalArray));
}


