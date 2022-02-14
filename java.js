//============================
//JAVASCRIPT/CLIENT SIDE STORAGE
//===========================
function ClickCount(){
    if (typeof(Storage)!=="undefined"){
     if(localStorage.clickcount){
         localStorage.clickcount = Number(localStorage.clickcount)+1;
     }
        else{
            localStorage.clickcount=1;
        }
       document.getElementById("RandomCount").innerHTML = "Your randomness has increased to " + localStorage.clickcount;
    }

else{
    alert("web storage is not supported!");
}
}

//============================
//JQUERY
//===========================
$(document).ready(function(){
 
    //INDEX PAGE
    $("#indexaboutme").unbind('click');
    $("#indexaboutmetext11").unbind('click');
    $("#indexaboutmetext22").unbind('click');
   $("#ContentBlock11").unbind('click'); 
   $("#ContentBlock22").unbind('click'); 
   $("#ContentBlock33").unbind('click'); 
   $("#ContentBlock44").unbind('click'); 
   $("#RandomButton").unbind('click'); $("#indexaboutme").click(function(){
      $("#indexaboutmetext").slideToggle();
     
   });
    
   $("#indexaboutmetext11") .click(function(){
       $("#indexaboutmetext1").slideToggle();
   });
   $("#indexaboutmetext22").click(function(){
       $("#indexaboutmetext2").slideToggle();
   });
$("#ContentBlock11").click(function(){
    $("#ContentBlock1").slideToggle();
})   ; 
    
 $("#ContentBlock22").click(function(){
        $("#ContentBlock2").slideToggle();
    })
   $("#ContentBlock33").click(function(){
       $("#ContentBlock3").slideToggle();
   }); 
   
   $("#ContentBlock44").click(function(){
       $("#ContentBlock4").slideToggle();
   });
   //EDUCATION PAGE 
    $("#CCAAchievements").click(function(){
 $("#CCAAchievementsSlideDown").fadeToggle("slow");
    });
    $("#RandomButton").click(function(){
        alert("It is really random");
    });
    //FAVS

   $("#Confirm").unbind('click'); $("#ClickMe").mouseenter(function(){
     $("#Confirm").fadeIn();
    });
    $("#Confirm").click(function(){
        $("#Confirm1").fadeIn();
    });
    $("#Confirm1").click(function(){
        $("#Confirm2").fadeIn();
    });
    $("#Confirm2").click(function(){
        $("#Confirm3").fadeIn();
    });
    $("#Confirm3").click(function(){
        $("#Confirm4").fadeIn();
    });
    $("#Confirm4").click(function(){
        alert("no");
    });
   //========================= 
   //GOING BACK TO OTHER CONTENTS
   //=========================
    $(".JumpToOther").unbind('click'); $(".JumpToOther").mouseenter(function(){
    $(this).animate({opacity: 1})
});
   $(".JumpToOther").mouseleave(function(){
        $(this).animate({opacity:0.5})
    });
    $(".JumpToOther").click(function(){
  $(".JumpToOtherSlideDown").slideToggle();
        $(".JumpToOther").hide();
    });

    $(".JumpToOtherSlideDown").click(function(){ $(".JumpToOtherSlideDown").slideToggle();
    $(".JumpToOther").show();
    });
    
    $(".JumpToOtherSlideDown").mouseenter(function(){
    $(this).animate({opacity: 1})
});
    
    $(".JumpToOtherSlideDown").mouseleave(function(){
        $(this).animate({opacity:0.5})
    });

//========================= 
   //JQUERY ANIMATION
   //=========================
    function AnimateForward(){
        $('#Square').animate({
        width:'100%'},"slow");
$('#Square').animate({left:'95%'},"slow");
 $('#Square').animate({width:'5%'},"slow");
$('#Square').css("background-color","yellow");
    document.getElementById("button").innerHTML = "Tadaa! (now click >)";
    $("#tada").fadeIn("fast");
    }
    
    function AnimateBackward() {
$('#Square').animate({width:'95%'},"slow");
$('#Square').animate({left:'0%'},"slow");
 $('#Square').animate({width:'5%'},"slow");
$('#Square').css("background-color","dodgerblue"); 
        document.getElementById("button").innerHTML = "Click!";
        $("#tada").fadeOut("fast");
    }
    $("#button").unbind('click');
    $("#button").click(function(){
  AnimateForward();
   }); 
    $("#tada").click(function(){
        AnimateBackward();
    });
    });

    

