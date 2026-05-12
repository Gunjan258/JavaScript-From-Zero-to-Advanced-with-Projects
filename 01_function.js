// What do you man by function?
// whatever code you have written either its 20 line 0r 10 lines of code you close them in a package, and whenever you wantv you can the copy the the pacakage

//lets suppose 

// console.log("G");
// console.log("u");
// console.log("n");
// console.log("j");
// console.log("a");
// console.log("n");

// function sayMyName() {  // here function is kayword, saymyname we gave like wegave variable name then () then scope{} yaani ki function ka defination
// console.log("G");
// console.log("u");
// console.log("n");
// console.log("j");
// console.log("a");
// console.log("n");
// }

// sayMyName()// here saymyname is reference and if you want to execute it then use (), if we give saMyName then nothing will come in Op

//function addnumber(number1, number2){ // yaha pe number1 number2 ko parameter bolte hai, jb aap function ka defination bnate hai to uske andr jo bhi aap input letehai number he nahi bhle he string he q na ho usko humlog parameters bolte hai, or function ko jb aap call karate hai tb jo uske andr aap value dete hai usko bolte hai arguments 
   // console.log(number1 + number2);
//}

//addnumber(); // iska op Nan aaega 
//addnumber(3,4) // iska op 7 aaega or () ke andr jo humlog de rahe hai usko humliog argument bolte hai, problem tb aata hai jb hum iske andr number nahi dete hai

//addnumber(3, "4") // iska op 34 aaega kyu ki yaha pr 4 string hai to isne soch 3 bhi string hai 
//addnumber(3, "a") // iska op 3a aaega  (3, "a"),  ye hum argument bolte hai isko, hum addnumbr ko ek variable ke andr bhi store kra shkte hai 
//addnumber(3, null) // iska op 3 aaega 
//const result = addnumber(3, 4) // yaha humne result ke andr addnumber store kra diya hai

//console.log("Result : ", result); // yaha hum check kr rahe ki rsult ka andr kya value aa raha hai jo ki aa raha hai = Result :  undefined




// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// const result = addTwoNumbers(3,5)  // yaha humnee add two numbers ko ek variable ke andr daal diya hai 

// // console.log("Result : ", result); yaha humara op jo aa raha hai wo Result :  undefined aa raha yahi sb se intresting hai ki function se aapnse waaps kya bheja ab yaha pe consloe mai dikh raha to yahi value waaps ki gyi hai aisanahi hai consloe prinmt krne ka mtlb ye nahi ki wo function ko value he return kr raha hai , rturn apne aap mai ek concept hai or console sirf console print krnma hai 

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2 // yaha humne return ek variable liye hai 
//     return result // yaha pe jo bhi result aaya uske piche ek keyword lagae hai return, yaani ki jb mere function execte hojaaega uske baad is result ko return krdo
//     console.log("gunjan"); // ye gunjan kabhi excute nahi hoga q ki by dafault function ka ek defination ka eek rule hota hai ki return jo aapne kr diya uske baad koi naam nahi krega function agar gunjan ko ek line uppere leke chle jaaenge return ka tb ye kaam krega 
// }  

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); // ab iska op Result:  8 ye aay hai



// function addTwoNumbers(number1, number2){
//    return number1 + number2 // is tarika se bhi like shkte hai taaki ek variabke na bna pre or ye kaam bhi krta hai
// }  

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result)

function loginUsermassage(username){
    return `${username} just logged in`
}



console.log(loginUsermassage("Gunjan"));// yaha ek confusion hai isko hum add number ki trh q nahi kr paa rahe hai