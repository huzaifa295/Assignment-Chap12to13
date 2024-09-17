// // Question NO 01

var user_inp = prompt("Enter a character")
if (user_inp >= 'A' && user_inp <= 'Z') {
  alert("The entered character is an Uppercase letter.")
}
else if (user_inp >= 'a' && user_inp <= 'z') {
  alert("The entered character is a lowercase letter.")
}
else if (user_inp >= '0' && user_inp <= '9') {
    alert("The entered character is a number.")
  }

// // Question NO 02

var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
if (num1 > num2) {
  alert("The first number is larger.");
} else if (num1 < num2) {
  alert("The second number is larger.");
} else {
  alert("Both numbers are equal.");
}

// // Question NO 03

var num = +prompt("Enter a number");
if (num > 0) {
  alert("The number is positive.");
  } else if (num < 0) {
  alert("The number is negative.");
  } else {
  alert("The number is zero.");
}

// // Question NO 04

var userInput = prompt("Enter a character");
var flag = false
  var vowels = ['a', 'e', 'i', 'o', 'u','s'];
  for (var i = 0; i < vowels.length; i++) {
    if (userInput == vowels[i]) {
      flag = true;
    }
}
if(flag){
    alert(userInput + " is a vowel.");
}else{
    alert(userInput + " is not a vowel.");
}

// // Question NO 05

var pass="huzaifa295"
var user_pass=prompt("Enter your passward")
if(user_pass==pass){
    alert("Correct! The password you entered matches the original password.")
}
else if(user_pass==""){
    alert("Please enter your password")
}
else{
    alert("Incorrect password")
}

// // Question NO 06

var greeting;
var hour =+prompt("Enter an hour");
if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting)
}

// // Question No 07

var user_time=+prompt("Enter a time in 24 hours clock format (e.g., 1900 for 7pm)")
if(user_time>= 0 && user_time<=1200){
    alert("Good Morning!")
}
else if(user_time>1200 && user_time>1700){
    alert("Good Afternoon!")
}
else if(user_time>1700 && user_time>2100){
    alert("Good Evening!")
}
else if(user_time>2100 && user_time>2359){
    alert("Good Night!")
}