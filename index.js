function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "red";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 

  function myFunction1(y) {
    var a=document.getElementById('more');
    var b=document.getElementById('nav');
    var c=document.getElementById('m');
    var d=document.getElementById('footer');

     var i;
     console.log(a);
     if (y.matches) { // If media query matches
     c.style.display="block";
     a.style.display="block";
     b.style.display="none";
     d.style.display="none";
          }
else{
    a.style.display="none"; 
    b.style.display="flex";
    c.style.display="none";
    d.style.display="flex";
}
  }
  var y= window.matchMedia("(max-width: 770px)")
  myFunction1(y) // Call listener function at run time
  y.addListener(myFunction1) 
    
  function myFunction2(z) {
    
    var b=document.getElementById('car');
     var c=document.getElementById('car1');
     var d=document.getElementById('sign');
     var i;
     if (z.matches) { // If media query matches
     b.style.font=16;
     b.style.display="block";
     c.style.display="block";
     d.style.width="18rem";
     console.log(c);
      }
     else{
     b.style.display="flex";
      c.style.display="flex";
      d.style.width="30rem";
       }
  }

  
  var z = window.matchMedia("(max-width: 780px)")
  myFunction2(z) // Call listener function at run time
  z.addListener(myFunction2) 

 
function functionSign(){
  location.replace("sign.html");
}