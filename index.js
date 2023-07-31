let email =document.getElementById('email')
let password = document.getElementById('password').value
let gmail= document.getElementById("gmail")
let yahoo = document.getElementById("yahoo")
let microsoft = document.getElementById("microsoft")
let login = document.getElementById("login")
// let text = 

login.addEventListener(onclick, clickEvent()) 

function clickEvent(){
    console.log("working")
}

login.onclick((e) => {
    console.log(password)
    document.getElementById("ptext").innerHtml = password
})


// login.onclick = go
console.log(password)
// function go(){
//     if ((password.length) >= 8){
//         alert("Welcome")
// }
//     else {
//         alert("Your password must be more than or 8 characters")
//     }

// }