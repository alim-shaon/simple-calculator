var displayScreen = document.getElementById('display-screen');
var displayScreenTop = document.getElementById('display-screen-top');
var displayScreenLeft = document.getElementById('display-screen-left');

function calculatorMath() {
    var currentValue = parseFloat(displayScreen.value);
    if (displayScreenTop.value == '') {
        displayScreenTop.value = 0;
    }
    displayScreenTop.value = currentValue + parseFloat(displayScreenTop.value);
    return displayScreenTop.value;
}
const clickButton = document.getElementsByClassName('click-button');
for (const clicked of clickButton) {
    clicked.addEventListener('click', function () {

        const buttonId = clicked.getAttribute('id');
        var clickedValueText = clicked.innerText;
        console.log('button ckicked', clickedValueText);
        if (clickedValueText == 'AC') {
            displayScreen.value = '';
            displayScreenTop.value = '';
            displayScreenLeft.value = ''
        }
        else if (clickedValueText == '+') {
            calculatorMath();

            displayScreenLeft.value = clickedValueText;
            displayScreen.value = '';
        }
        else if (clickedValueText == '=') {
            displayScreen.value = calculatorMath();;
            displayScreenLeft.value = '';
            displayScreenTop.value = ''
        }

        //Work in progress (remove element from string)
        else if (clickedValueText == 'C') {
            const kk = displayScreen.value;
            console.log(typeof kk, kk);
            console.log(kk[3]);
        }
        //-----to display multiple number in the screen
        else {
            displayScreen.value = displayScreen.value + clickedValueText;
        }

    })
}
