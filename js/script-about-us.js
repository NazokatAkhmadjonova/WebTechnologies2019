$(document).ready(function(){  
    
/////////////////////////////////////////////The functionality for the gallery//////////////////////////////////////////////////////////

$('#small a').on("click", function (e) {                              
    e.preventDefault();                                             //by default a click on the small photo will show the big one in a page                      
    var link = $(this).attr("href");                                
    $("#big >img").fadeOut(700, function () {                       //to make the privious photo to be hidding slowly fadeOut
        $("#big >img").attr("src", link).fadeIn(700);               //to show the next photo slowly
    });
})
 
})
