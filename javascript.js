document.addEventListener('DOMContentLoaded', function () {
    function isPalindrome(input) {
        input = String(input);
        var cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanInput === cleanInput.split('').reverse().join('');
    }

    const txtInput = document.querySelector('#input');
    const checkBtn = document.querySelector('#btn');
    const outputElement = document.getElementById('Ans');

    checkBtn.addEventListener('click', function () {
        var input = txtInput.value;
        outputElement.style.display="block";
        if (isPalindrome(input)) {
            outputElement.innerText = "Yes, '" + input + "' is a palindrome!";
        } else {
            outputElement.innerText = "No, '" + input + "' is not a palindrome!";
        }
    });

    txtInput.addEventListener('input', (event) => {
        var input = event.target.value.trim();
        outputElement.style.display="none";
        if (input === "") {
            outputElement.innerText = "";
            checkBtn.classList.remove("active");
        } else {
            checkBtn.classList.add("active");
        }
    });

    document.getElementById('input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
});
