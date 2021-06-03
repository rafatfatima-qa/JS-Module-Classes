/* while loop excercise */
function WhileLoop (){

    let games = ['Cricket', 'Football', 'Hockey', 'Chess', ];
    let i = 0;

   while (i < games.length){
    
            // console.log(games[i]);
            document.write(games[i]);
            document.write('\<br>');
            i++;
    }  
}



/* "foreach" loop excercise */

// let games = ['Cricket', 'Football', 'Hockey', 'Chess', ];

// games.forEach(foreachLoop);

// function foreachLoop(item) {
//             document.write(item);
//             document.write('\<br>');
// }


/* "for of" loop excercise */

// let games = ['Cricket', 'Football', 'Hockey', 'Chess', ];

// for (let x of games) {
    
//     document.write(x);
//     document.write('\<br>');
// }


/* Switch Case without user input */
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//     default:
//       day = "Looking forward to the Weekend";
//   }

//   document.write(day);

/* Anothe example of switch by taking user input*/
// function printvariable (){

//     let mycolor = prompt('Please input some color');
//     console.log(mycolor);

// switch(mycolor){

// case "Red":
// case "red":
//     //document.write(mycolor);
//    {alert(mycolor);
//     break;}

//     case "Blue":
//     case "blue":
//    // document.write(mycolor);
//     {alert(mycolor);
//     break;}

// default:
//     //document.write("This is not a color");
//     alert("This is not a color");
//     break;

//   }
// }

/* Put if-else condition on an array element*/
// let games = ['Cricket', 'Football', 'Hockey', 'Chess', ];

// for (let i=0; i < games.length; i++){

//     if (games[i] == "Cricket"){
//     document.write("Cricket exists");
//     document.write('<br>');
//     break; /* Use break statement to break the loop here, comment it if you wanna see other loop entries too*/
//     }

//     else {
//     document.write("This is some other game, Cricket does not exists");
//     document.write('<br>');
//     }
// }

/* Add more items in array*/
// let games = ['Cricket', 'Football', 'Hockey', 'Chess'];
// 

// games.push("Ludo");
// games.push("Tennis");
// //games.pop();
// //games.shift();

// for (let i=0; i < games.length; i++){

//         document.write(games[i]);
//         document.write('<br>');
//         console.log(games[i]);
        
// }

/*use splice() function */
let games = ['Cricket', 'Football', 'Hockey', 'Chess'];
games.splice(2, 0, "Lemon", "Kiwi");

for (let i=0; i < games.length; i++){

        document.write(games[i]);
        document.write('<br>');
}