function pinGenerator() {
    const pin = Math.round(Math.random() * 100000);
    if ((pin / 10000) > 1 && (pin / 10000) <= 9) {
        return pin;
    }
    else {
        console.log('hi');
        return pinGenerator();
    }
}

document.getElementById('generatePin').addEventListener('click', function () {
    const pin = pinGenerator();
    const pinDisplay = document.getElementById('displayPin');
    pinDisplay.value = pin;
})

document.getElementById('calculatorBody').addEventListener('click', function (event) {
    const clickedDigits = event.target.innerText;

    const displayClickedDigits = document.getElementById('displayDigits');
    const previousClickedDigits = displayClickedDigits.value;
    const currentClickedDigits = previousClickedDigits + clickedDigits;

    if (isNaN(clickedDigits)) {
        if (clickedDigits == 'C') { displayClickedDigits.value = ''; }
        else if (clickedDigits == '<') {
            const splitCurrentClickedDigits = currentClickedDigits.split('');
            splitCurrentClickedDigits.pop();
            splitCurrentClickedDigits.pop();
            const joinDigits = splitCurrentClickedDigits.join('');
            displayClickedDigits.value = joinDigits;
        }
    }
    else {
        displayClickedDigits.value = currentClickedDigits;
    }
})

document.getElementById('submitBtn').addEventListener('click', function () {
    const generatePinField = document.getElementById('displayPin');
    const displayDigits = document.getElementById('displayDigits');

    if (generatePinField.value == displayDigits.value) {
        document.getElementById('successfulPin').style.display = 'block'
        return;
    }
    else {
        const startingTry = document.getElementById('tryLeft');
        const startingTryString = startingTry.innerText;
        const startingTryNumber = parseInt(startingTryString);
        const tryLeft = startingTryNumber - 1;
        if (tryLeft <= -1) {
            return alert('access blocked');
        }
        startingTry.innerText = tryLeft;
        document.getElementById('incorrectPin').style.display = 'block'
    }
})