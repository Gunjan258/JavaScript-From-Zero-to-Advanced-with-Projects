//const tinderUser = new Object ()  // dono he empty object dega OP mai {} ye ek singelton object hai 

const tinderUser = {} //or yer nonsingelton object hai 

tinderUser.id ="123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {                // humne yaha object ke andr object ke andr object bnaya hai uska value ko access kaise kr shkte hai . se he krenfge
    email : "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Gunjan",
            lastname: "Singh",
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname); // is tarika se humlog object ke andr jo object hai usko acccess kr shkte hai

const obj1 = {1: "a", 2: "b"}  // in dono object ko combine kaise krenge wahi array wala tarika se
const obj2 = {3: "a", 4: "b"}
//const obj3 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2}
//console.log(obj3);// iska op e aaega { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }mtlb ek objecdt ke uske andr ye oject hai

//const obj3 = Object.assign(obj1, obj2)// yah beest tarika kya hai Object.assign({}, obj1, obj2) iske kya hoga ye ek opteional parameter hai isko dene se sb comibne ho jaaega or granteed hai ki result yahi aaega 
//console.log(obj3);// iska op yeaaega { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }object assign mdn ek baar  dekh lo 

const obj3 = {...obj1, ...obj2}
//console.log(obj3);// iska op ye aaega { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } or 90% time humlog ye wala he use karenge

// jab valus data base se aat hai tb hum aise use krenge maan ligiye aapke pass user aay hai to user jo hai database jb aatahai to max time array of object aata hai

const user = [
    { // ye hai aaray ka object 
        id: 1,
        email: "g@gmail.com",
    },
    {

    }, // aise , deke bhaut saara value aata jaaega 
]

user[1].email
//console.log(tinderUser);// op { id: '123abc', name: 'Sam', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // isse hum keys ko le shklte hai [ 'id', 'name', 'isLoggedIn' ] iska data type hai array or hum uske saare keys ko leke loop laga ke kai jgha use mai laga shkte hai 
console.log(Object.values(tinderUser)); // or isse values ko [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // isse hum check kr rahe rahe ki kya iske pass isloggedIn property hai agar hoga to true aaega or nahi hua to faklse aaega 
console.log(tinderUser.hasOwnProperty('isLoggeIn')); // false