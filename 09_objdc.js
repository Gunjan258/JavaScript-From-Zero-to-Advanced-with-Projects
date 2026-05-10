const course = {
    coursename : "jsin hindi",
    price: 999,
    coursetacher : "Gunjan",
}

// agr value lo use krnahai to hum kya kya krte hai cource.courseteacher aise lakin kai baar jb code clean bna na hota hai tb 
//agar 3 baar use krna hai ro 3 baar likhna hoga
// humlog ek syntax use krte hai uske liye hum likhenge const phir { iske andr hum likhnege kya valus humko extract jkrna hai } phir kaha se value extract krnahai  

const {coursetacher: teacher} = course // agar maan lo ki aapko ye courseteacher naam bara lg rahahai to hum const {coursetacher: teacher (de dengee)} = course 
//console.log(course.coursetacher);// actuallu mai aise kaam krtahai biuna de structure ke 
//console.log(coursetacher); 
console.log(teacher); // aise bbi kaam klrta hai 
/*

===============================API===============================================
API KUCJ MNAHI HAI AAPKE PASS KUCH VALUE AAATE HAI BACKEND SE UN VALUE KO AAP KAISE LIKHTE  HAI VALUE YE VALUEES XML STRUCTURE MAI AATI THI WO BAHUT COMPLEX HOTA THA  AB SARE VALUS MOSTLY AATE HAI JSON MAI
 {
    "name": "Gunjan",
    "coursename": "javascript"
    "fees": "free"
}
JSON AISA DIKHTA HAI jisme keys bhi string hota hai or valus bhi string hota hai

kai baar API array ke format mai bhi milta hai to us array ke andr kaafi saare objct hote hai 

[
    {},
    {}
]

ek api bahut famous hai "Randoum user me " json formator ek tool hai waha se hum study kr shkte hai api data ko*/