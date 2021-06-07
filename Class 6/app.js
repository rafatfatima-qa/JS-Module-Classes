/*
1- Declare a variable

2- get any property from inline style tag

3- assign this property (for exmaple: border property) to your initialized variable

4- print it on console.

5- then put this all functionality in a function

6- call this function on button click

7- change styling from js file by giving new property values

8- Check to see if you are addressing a property which is not written in html file

9- give backgroundColor in html and then change it from js property.

*/

function styleFunc() {

  let divElement1, divElement2, headingElement, classListElement;

  divElement1 = document.querySelector(".container").style.border = "5px dotted red";
  divElement2 = document.querySelector(".container").style.backgroundColor = "grey";

  console.log(divElement1);
  console.log(divElement2);
  
  console.log(divElement2 = document.querySelector(".container").style.margin);
  console.log(divElement2 = document.querySelector(".container").className);
  console.log(divElement2 = document.querySelector(".container").className = "newContainer");

  headingElement = document.querySelector("#heading1").style.color = "green";
  console.log(headingElement);

  //add new class using classList
  // classListElement = document.querySelector(".container").classList.add("abc", "xyz", "def");
  // console.log(classListElement);
}

// function helloWorld(){

//   alert("Hello World");
// }
//   document.getElementById("myBtn").addEventListener("click", function helloWorld(){
//   alert("Hello World");
//   });

//getElementsByClassName always returns an array so access it thru array index.  

function helloWorld(){

    alert("Hello World");
  }
    document.getElementsByClassName("myBtnClass")[0].addEventListener("click", function helloWorld(){
    alert("Hello World");
    });
  