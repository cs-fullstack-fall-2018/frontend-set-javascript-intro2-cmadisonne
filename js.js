// var arrayOfNubers = [30,37,38,45,47];
//
// var stringOfArray = "";
// for(var i = 0; i < arrayOfNubers.length; i++)
// {
//     stringOfArray += arrayOfNubers[i] + ", ";
// }
//
// document.getElementById("something").textContent= stringOfArray;

//EXERCISE 1
var MaddiArray = ["Maddi", "Lotus", "Indigo", "Asa"]; //this is the same but using names
var newStringArray = "";

for(var init=0; init < MaddiArray.length; init++)
{
    newStringArray += MaddiArray[init] + ", ";
}

document.getElementById("something").textContent=newStringArray;

//EXERCISE 2
var MaddiNumArray = [3,5,7,9,11];
var newNumArray = "";

for (i=0; i<MaddiNumArray.length; i++)
{
    newNumArray += MaddiNumArray[i] + ", ";
}
document.getElementById("somethingNew").textContent= newNumArray;

MaddiNumArray.pop();
MaddiNumArray.pop();
var newNumArray2 = ""; //created a new variable instead of using the var newNumArray i created
// bc that variable is now changed and saved based on the for loop above

for (i=0; i<MaddiNumArray.length; i++)
{
  newNumArray2 += MaddiNumArray[i] + ", ";
}
document.getElementById("something2").textContent=newNumArray2;

//I hope this is what you're asking for becuase I understand everything I just did

// This is perfect Maddi. From Kenn.