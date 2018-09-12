//Create three numbers x, y, and z.  Set them equal to some random number of your choosing.

let x= 26;
let y = 95;
let z = 45;

/*
*
*  Create a series of numeric expressions which evaluate to TRUE or FALSE.
*
*/

//just using x
let positiveX = (x > 0);
let negativeX = (x - x*2);

//using all 3 variables
let allPositive = (x + y + Z) ;
let allNegative = (x-x*2 + ) ;

//using all 3 variables
let atLeastOnePositive;
let atLeastOneNegative;


/*
*
*  This section of code below here shows the product of your work.
*
*/

function showResults(){
    const intro =
    `The variable x = ${x}
    The variable y = ${y}
    The variable z = ${z}`;

    const posneg = 
    `positive x : ${positiveX}
    negative x : ${negativeX}`;

    const allornothing =
    `All the variables are positive ${allPositive}
    All the variables are negative ${allNegative}`;

    const atLeastOne =
        `At least one variable is positive: ${ atLeastOnePositive}
        At least one variable is negative: ${ atLeastOneNegative}`;

    console.log(intro);
    console.log(posneg);
    console.log(allornothing);
    console.log(atLeastOne)
    
}
showResults()