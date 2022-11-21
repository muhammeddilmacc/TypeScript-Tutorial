var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    var num1 = input1.value;
    var num2 = input2.value;
    var result = add(+num1, +num2); // +num1 converts string to number
});
