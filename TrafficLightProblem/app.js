function printvariable (){

let mycolor = prompt('Please input some color');
console.log(mycolor);

//conditions
if (mycolor == "Red") {
    
    alert("This is Red Light!");
  }

 else if (mycolor == "Green") {
    
    alert("This is Green Light!");
  }

  else if (mycolor == "Yellow") {
    
    alert("This is Yellow Light!");
  }

  else if (mycolor == "White" || mycolor == "Blue" || mycolor == "String.length(0);"){

    alert("Oops this is not a traffic light color!");
  }
}


