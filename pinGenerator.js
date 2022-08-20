function pinGenerator() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin / 1000) > 1 && (pin / 1000) <= 9) {
        return pin;
    }
    else {
        return pinGenerator();
    }
    // OR
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
// generatePin button
document.getElementById('generatePin').addEventListener('click', function () {
    const pin = pinGenerator();
    const pinDisplay = document.getElementById('displayPin');
    pinDisplay.value = pin;
})

// clickedDigit calculator
document.getElementById('calculatorBody').addEventListener('click', function (event) {
    const displaynumber = event.target.innerText;
    const clickedDigit = document.getElementById('displayDigits');
    const previousclickedDigit = clickedDigit.value;
    // check NaN value
    if (isNaN(displaynumber)) {
        if (displaynumber == 'C') { clickedDigit.value = ''; }

        else if (displaynumber == '<') {
            // setting '<' functionality
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
// submit button's functionality
document.getElementById('submitBtn').addEventListener('click', function () {
    // get value from generatePin field
    const displayPinField = document.getElementById('displayPin');
    const currentPin = displayPinField.value;
    // get value from calculator field
    const displayDigitsField = document.getElementById('displayDigits');
    const currentDisplayDigit = displayDigitsField.value;
    // comparing generatePin and calculator value
    if (currentPin == currentDisplayDigit) {
        document.getElementById('successfulPin').style.display = 'block';
    }

    else {
        // counting false tries
        let chancesLeft = document.getElementById('tryLeft');
        let triesLeft = chancesLeft.innerText;
        let triesLeftNumber = parseInt(triesLeft);
        let chanceLeft = triesLeftNumber - 1;
        if (chanceLeft <= -1) {
            alert('access blocked');
            return;
        };
        chancesLeft.innerText = chanceLeft; //stop counting at 0.
        document.getElementById('incorrectPin').style.display = 'block';
    }
})