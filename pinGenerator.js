function pinGenerator() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin / 1000) > 1 && (pin / 1000) <= 9) {
        return pin;
    }
    else {
        return pinGenerator();
    }

    // or
    /* let Pin = Math.round(Math.random() * 10000);
    let newPin = Pin + '';
    if (newPin.length === 4) {
        return Pin;
    }
    else {
        console.log('pin incorrect');
        return pinGenerator();
    } */
}

document.getElementById('generatePin').addEventListener('click', function () {
    const pin = pinGenerator();
    const pinDisplay = document.getElementById('displayPin');
    pinDisplay.value = pin;
})

document.getElementById('calculatorBody').addEventListener('click', function (event) {
    const displaynumber = event.target.innerText;
    const clickedDigit = document.getElementById('displayDigits');
    const previousclickedDigit = clickedDigit.value;

    if (isNaN(displaynumber)) {
        if (displaynumber == 'C') { clickedDigit.value = ''; }
        else if (displaynumber == '<') {
            let splitArray = previousclickedDigit.split('');
            splitArray.pop();
            let newNumber = splitArray.join('');
            clickedDigit.value = newNumber;
        }
    }
    else {
        const newDisplayNumber = previousclickedDigit + displaynumber;
        clickedDigit.value = newDisplayNumber;
    }
})

document.getElementById('submitBtn').addEventListener('click', function () {
    const displayPinField = document.getElementById('displayPin');
    const currentPin = displayPinField.value;

    const displayDigitsField = document.getElementById('displayDigits');
    const currentDisplayDigit = displayDigitsField.value;

    if (currentPin == currentDisplayDigit) {
        document.getElementById('successfulPin').style.display = 'block';
    }
    else {
        let chancesLeft = document.getElementById('tryLeft');
        let triesLeft = chancesLeft.innerText;
        let triesLeftNumber = parseInt(triesLeft);
        let chanceLeft = triesLeftNumber - 1;
        chancesLeft.innerText = chanceLeft;
        if (chanceLeft == 0) {
            alert('Access blocked');
            return;
        };
        document.getElementById('incorrectPin').style.display = 'block';
    }
})