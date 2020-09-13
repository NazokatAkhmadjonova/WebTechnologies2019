//////////////////////////////////SERVICES page//////////////////////////////////////////
/////////////////////////////HIDE/SHOW PRICE LIST////////////////////////////////////////
$(document).ready(function(){ //when the page is ready


$(".service-title").on("click", function() { //when the element with the class="service-title" is clicked the following should happen
  $(this).next().slideToggle(500);//the price list of only the service clicked will appear.
    // $(".prices-list").not(prices).slideUp(500); this could be used to close other divs accept the one which was clicked. However, this can annoy users as they will prefer to see what they have chosen from one service type.
    
    
    var icon =$(this).children(".hide-show");
    icon.toggleClass("rotate180"); // the toogle class to add the class if the element has no class named rotate180 and delete it if there is one on click;

})

///////////////////Calculate the prices and show it on the page//////////////////////////////

var message = document.querySelector("aside > .amountOfMoney");
var serviceType = document.querySelectorAll(".prices-list > div");
// var checkbox =document.querySelectorAll("#checkbox");

function sum(){
    var sum = 0;
    for(let i = 0; i < serviceType.length; i++){                        //to make the function to run the function on each iteration ()
        
        if (serviceType[i].classList.contains("service-active")) {      //
            sum = sum + +serviceType[i].getAttribute("price");          // +serviceType to change the string type data into numeric one 
                                                                        // without this (+) the function will give us the lines' concatenation
        } else{ 
            
        }
    }                   
    return sum;
}

for (var i = 0; i < serviceType.length; i++) {                                                      
    serviceType[i].addEventListener("click", function(event) {
        this.classList.toggle("service-active");                         // .service-active have the style to outline the div clicked with green line
                                                                         // toogle the put or delete the class on each click
        message.innerHTML = ("Dear, Client. The amount of money you will need to pay to use chosen services is " + sum()); 
        ////////////////////////the message with the sum that should be shown when any div is clicked////////////////////
        })  
    }   
})
