
//No.1//
let a = prompt("Enter string a");
let b = prompt("Enter string b");
let c = a.length + b.length;
fizzbuzz(a,b);

function fizzbuzz(a,b){
    if ( typeof a === 'string' && typeof b === 'string'){

        if(c % 3 == 0 && c % 5 == 0){
            console.log("fizzbuzz")
        }
        else if(c % 3 == 0){
            console.log("fizz")
        }
        else if(c % 5 == 0){
            console.log("buzz")
        }
    } else {
            console.log("Not string")
    }
}



//No.2//
let yearofbirth = prompt("Enter year of birth?")

let age = 2023 - yearofbirth;


if (age > 38)
    {console.log("Oldie")}
else if (age <= 38 & age >= 18 )
    {console.log("Right age")}
else if (age < 18)
    {console.log("Youngen")}



for (let chip = 0; chip < 11; chip++){
    console.log("count" + chip)
}



//No.3//
let nums = [2, 7, 11, 15];
let target = 9;

const result = twoSum(nums, target);


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                console.log('['+ nums[i] +','+nums[j]+']');
                return nums[i], nums[j];
            }
        }
    }
    return null; 
}
