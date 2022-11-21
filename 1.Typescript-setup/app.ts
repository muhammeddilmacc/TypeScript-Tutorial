
const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;

const button = document.querySelector('button') as HTMLButtonElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener('click', () => {

    const num1 = input1.value;
    const num2 = input2.value;
    const result = add(+num1, +num2); // +num1 converts string to number
});