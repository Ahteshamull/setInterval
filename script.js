// let user = {
//     name : 'hasan',
//     email : 'hasan@gmail.com',
//     age : 20
// }

// class User {
//     constructor(name, id, email){
//         this.name = name,
//         this.id = id,
//         this.email = email
//     }
// }
// class Vip extends User {
//     constructor(name, id, email, phone){
//         super(name, id, email)
//         this.phone = phone
//     }

// }
// class Vip2 extends User {
//     constructor(name, id, email, phone, age){
//         super(name, id, email, phone)
//         this.age = age
//     }

// }


// class Vip3 extends User {
//     constructor(name, id, email, phone, age,fathersname){
//         super(name, id, email, phone, age)
//         this.fathersname = fathersname
//     }

// }
// let hasan = new Vip3('hasan', '123', 'hasan@gmail.com', '012455546', '20', 'tofazzal')




// let hasan = new Vip2('hasan', '123', 'hasan@gmail.com', '012455546', '20')

// let kayesBhai = new User('kayes', 12345678, 'kayes@gmail.com')


// console.log(hasan);
// console.log(kayesBhai);


// <----------------setInterval-------------------------->
// setInterval

// setInterval(() => {
//     console.log('hasan mahmud')
// }, 2000);

// setTimeout
// function number(){
// }
// setTimeout(()=>{
//     console.log("hassan")
// }, 2000);



let type = document.querySelector('.type');
let typetext = type.innerHTML;

let typearray = typetext.split('');

let count = 0;

type.innerHTML =''

function typejs (){
    if (typetext.length > count) {
        type.innerHTML += typetext.charAt(count++) 
        typearray = typetext.split('');  
    }
    else{
      typearray.pop();
      type.innerHTML = typearray.join('');

        if (typearray.length== 0) {
            count = 0
        }
    }

}
setInterval(() => {
    typejs();
}, 200);

