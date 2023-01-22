// Your code here
function greet(){
    var person = prompt ("What is your name?");
    console.log(person)
    if (person){
     alert("Hello, " + person);
    } else {
        alert ("Hello")
    }

    var age = prompt ("How old are you?");
    age = Number (age)
    console.log(parseInt(age));
    
    var birthdayYet = confirm ("Have you had a birthday yet this year?");
    console.log(birthdayYet);
    
    var currentYear = new Date().getFullYear();
    var birthYear = currentYear() - age;
    var birthYearPlusOne = currentYear() - age + 1;

    if (birthdayYet) {
        alert (birthYear);
    } else {
        alert (birthYearPlusOne);
    }


}

