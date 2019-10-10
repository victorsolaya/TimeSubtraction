// Events
document.getElementById('calculateTotal').addEventListener('click', calculateTotalTime);
document.getElementById('addInputs').addEventListener('click', addInput);
document.getElementById('removeInputs').addEventListener('click', removeInput);
document.getElementById('subtractTime').addEventListener('click', subtractTime);

/** Adds a new input field. */
function addInput() {
    const inputsContainer = document.getElementById('inputs');
    const input = document.createElement('input');
    const input2 = document.createElement('input');
    input.placeholder = '00:00';
    input2.placeholder = '00:00';
    inputsContainer.appendChild(input);
    inputsContainer.appendChild(input2);
}

function removeInput() {
    const inputContainer = document.getElementById('inputs');
    let lastInputs = Array.from(document.querySelectorAll('input'));
    lastInputs = lastInputs.slice(lastInputs.length - 2);
    lastInputs.forEach(item => inputContainer.removeChild(item));
}

/** Calculates and displays the total time by adding up the inputs. */
function calculateTotalTime() {
    const arrayTimes = [];
    const floatTimes = Array.from(document.querySelectorAll('input'))
        // Only take the inputs that are not empty
        .filter(inputValue => inputValue.value != '')
        // Map the strings to numbers representing the seconds
        .map(input => parseTimeString(input.value));
    // Add up the inputs
    const getTotal = floatTimes.reduce((valueBefore, valueAfter) => (valueBefore + valueAfter), 0);
    // Put the value inside the textarea
    displayOutput(getTotal);
}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

/** Calculates and displays the difference between the two inputs.  */
function subtractTime() {
    const subtractTimes = [];
    const subtraction = Array.from(document.querySelectorAll('input'))
        .filter(inpValue => inpValue.value != '')
        .filter(inpValue => inpValue.value != null)
        .map(input => parseTimeString(input.value))
    const getSubtraction = subtraction.reduce((valueBefore, valueAfter) => (valueAfter - valueBefore), 0);
    displayOutput(getSubtraction);
}

/** Parses a time string and returns the seconds. */
function parseTimeString(timeString) {
    const floats = timeString.replace('.').split(':');
    return floats.length > 1 ? (parseFloat(floats) * 60) + parseFloat(floats[1]) : (parseFloat(floats) * 60);
}

/** Transforms seconds to minutes and displays the output. */
function displayOutput(time) {
    const minutes = Math.floor(time / 60);
    const minutesString = ('' + minutes).padStart(2, '0');
    const seconds = time - (minutes * 60);
    const secondsString = ('' + seconds).padStart(2, '0');
    document.getElementById('result').innerHTML = `${minutesString}:${secondsString}`;
}
