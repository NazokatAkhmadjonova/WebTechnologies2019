
/////////////////////////////VALUES OF THE COMPANY///////////////////////////////////////

var ourValues = document.querySelector("#values");
var str = ourValues.innerHTML;                                              //take the value of the paragraph chosen
ourValues.innerHTML = ' ';                                                  //clear the paragraph
var i=0;                                                                    
function showValue(){                                                            
    ourValues.innerHTML = ourValues.innerHTML + str.charAt(i);              //empty paragraph + the n-th letter of the the paragraph
    i++;                                                                    //n+1
    setTimeout(showValue, 50);                                              //showValue is a function
                                                                            //each letter will appear every 50millisecond
}
showValue();                                                                // the function is called                                      


