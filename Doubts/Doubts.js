// EXAMPLE 1 ||
const ages = [3, 10, 18, 20];

document.getElementById("demo").innerHTML = ages.find(checkAge);

function checkAge(age) {
    return age > 18;
}


// EXAMPLE 2 ||
const ages1 = [4, 12, 16, 20];

function checkAge1(age) {
    return age > document.getElementById('ageToCheck').value;
}

function myFunction() {
    document.getElementById('demo1').innerHTML = ages1.find(checkAge1);
}