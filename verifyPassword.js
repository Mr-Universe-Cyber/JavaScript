//Set correct password
let correctPassword = "admin123";
let userPassword = prompt("Enter your password:");
if (userPassword === correctPassword){
    alert("Login successful");
} else{
    alert("Incorrect password");
}
console.log("correctPassword");
console.log("userPassword");