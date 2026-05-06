// singlton

// object literals 
// ye humara object literals hai

/*const JsUser = {
    name : "Gunjan",
    "full name" : "Gunjan Singh",
    age : 18,
    location : "Asansol",
    email : "Dairgunjan@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Satuday"]

}

//console.log(JsUser.email); // aise bhi kaam krta hai or ek tarika hai 
//console.log(JsUser["email"]); // ye wala dusra tarika hai bhai cool [email] ye lenge to error aaega kyu ye string ke trh le raha hai isliye humko string ke trh dena hoga
//console.log(JsUser["full name"]);// iskop hum . se acces nahi kr shkte hai 
===================================================================================

*/

 /*symbol kaise declear krte hai 
 jaise maan ligiye 
const mySym = Symbol("key1")
 question ek symbol lo or object ke key mai add kro or mujhe print kr ke dikha do
const JsUser = {
    name : "Gunjan",
    "full name" : "Gunjan Singh",
    mySum : "myKey1", // ye aise nahi hoga
    age : 18,
    location : "Asansol",
    email : "Dairgunjan@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Satuday"]

}

console.log(JsUser.mySum); // iska type of check krenge to string bataega lakin humne symbol liya hai 

//ab sahi tarika kya hai symbol ko decalear krne ka or output mai typeof bhi symbl aae 

*/

const mySym = Symbol("key1")
// question ek symbol lo or object ke key mai add kro or mujhe print kr ke dikha do
const JsUser = {
    name : "Gunjan",
    "full name" : "Gunjan Singh",
    // [mySym] : "myKey1", yaha mera value string hai to iska typeof bhi string he aaega  
    [mySym] : Symbol("myKey1"), // ye aise hoga
    age : 18,
    location : "Asansol",
    email : "Dairgunjan@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday", "Satuday"]

}

//console.log(typeof JsUser[mySym]); 

//value ko change kaise krte hai

JsUser.email = "Sam@chatgpt.com"
// valus ko lock kaise krte hai agar aap chahte hai ki koi bhi uske value ka change na kr shke to hum us objct ko freez kr shkte hai
//Object.freeze(JsUser);
JsUser.email= "sam@microsoft.com" // yaha humne freeeze kr diya haio to ye micrpsoft wala update nahi hoga
//console.log(JsUser);

// ab ek function decleare krenge 
JsUser.greeting = function (){
    console.log("Hello Js User");
}

JsUser.greetingtwo = function (){
    console.log(`Hello Js User, ${this.name}`);  // isko string intepolation or isko use krne ke liye back tick use krte hai ` ye or ye &this deke hum same object ko refer kr rahe haib yaha this ke baad . lagane se uske andr jitna bhi property hsi wo sb aaega 
}

console.log(JsUser.greeting());  //yee undefineed aaega kyu ki ye sahi syntax nahi hai 
console.log(JsUser.greetingtwo());