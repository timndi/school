function myFunction(){
  var x, text;


// get the value of the input field with the id = "pin"

 x=document.getElementById("pin").value;

 if (x==123){
   // text = "Hi Peace, Your result slip is below";
   window.open("file:///C:/Users/TIM/Documents/Web%20Development/Galaxy%20Gem%20School%202/result.html");
 }

 else if (x==231) {
   window.open("https://www.google.com");
 }

 else{
   text = "invalid code";
 }

 document.getElementById("pin").innerHTML = text;

}
