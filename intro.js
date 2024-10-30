secret.addEventListener("click",function(){
    alert("Noot noot"); //alert is a pop-up on the website//
}) 

//when the user presses the 'lights_on' button I want to replace the image in 'lightbulb' with the version that shows the ligh on
lights_on.addEventListener("click",function(){
    console.log("lights turned on");
    document.getElementById("lightbulb").src="lightbulb_on.webp";
    document.getElementById("lights_on").style.display="none";
    document.getElementById("lights_off").style.display="initial";

    //Apply the "light" class to the body of the page
    document.body.classList.toggle("light");
})



lights_off.addEventListener("click",function(){
    console.log("lights turned off");
    document.getElementById("lightbulb").src="lightbulb_off.webp";
    document.getElementById("lights_on").style.display="initial";
    document.getElementById("lights_off").style.display="none";
    
    //Apply the "light" class to the body of the page
    document.body.classList.toggle("light");
})