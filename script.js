let outputScreen = document.getElementById("output-screen");

function Display(num) {
    outputScreen.value += num;
}

function calculator() {
    try {
        outputScreen.value = eval(outputScreen.value);

    } catch (err) {
        alert("Invalid ")
    }
}

function Clear() {
    outputScreen.value = "";
}

function Del() {
    outputScreen.value = outputScreen.value.slice(0, -1);

}

function square() {
    outputScreen.value = Math.pow(outputScreen.value, 2);
}


function cubed() {
    outputScreen.value = Math.pow(outputScreen.value, 3);
}


function sqrt2() {
    outputScreen.value = Math.pow(outputScreen.value, 1 / 2);
}


function sqrt3() {
    outputScreen.value = Math.pow(outputScreen.value, 1 / 3);
}