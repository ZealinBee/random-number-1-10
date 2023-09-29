const input = document.querySelector('input');
const button = document.querySelector('.button');
let randomNumber = Math.floor(Math.random() * 10) + 1;

button.addEventListener('click', function() {
    var guess = parseInt(input.value);
    if (guess === randomNumber) {
        alert('You got it right!');
    } else {
        alert('Sorry, try again!');
        input.value = '';
    }
})




