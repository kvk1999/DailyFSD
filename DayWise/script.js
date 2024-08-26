let proPrice =1001

if (proPrice >=1000){
    console.log(">=1000"); // >=1000

} else if (proPrice >=800) {
    console.log(">=800"); // >=800

} else if (proPrice >=700) {
    console.log(">=700"); // >=800

} else {
    console.log("below 700"); // <800
}

//ternary
//syntax variable = (cond) ? true block : false block;

let price= 60;

const res = price >= 60 ? "greater than 60" : "less than 60";
//switch
let day = 3;
switch (day) {
    case 1:
        console.log("I ordered a Fitbit Charge 4");
        break;
    case 2:
        console.log("I ordered a Iphone 12");
        break;
    case 3:
        console.log("I ordered a Oppo Reno 5");
        break;
    default:
        console.log("Invalid Credentials");
        
}

//loop

//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while //entry check

let i=3
while (i<=5) {
     console.log("i=",i);
     i++;
     
}

//do while //exit check
let j=3
do {
    console.log("j=",j);
    j++;
} while (j<=5);


//for in loop
let obj = {name:"John", age:30, city:"New York"};
for (let key in obj) {
    console.log(key, obj[key]);
}

//break
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

//continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

//array
let arr = [200,400,600,800,1000]
console.log(arr.length);

//push pop
arr.push(1200);
console.log(arr);

arr.pop();
console.log(arr);

const retSlic = arr.slice(1,3)
console.log(retSlic);
