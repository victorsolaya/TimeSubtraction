// Events
document.getElementById('calculateTotal').addEventListener('click', calculateTotalTime)
document.getElementById('addInputs').addEventListener('click', addInput)
document.getElementById('subtractTime').addEventListener('click', subtractTime)

<<<<<<< HEAD
//Creation of inputs that we will use to do a minus between the later hour and the earlier hour.
function createPairOfInputs() {
    const container = document.getElementById('parentContainer');
    const divContainer = document.createElement('div');
    divContainer.className = 'container';
    const divFirstElement = document.createElement('div');
    divFirstElement.className = 'inputs';
    const divSecondElement = document.createElement('div');
    divSecondElement.className = 'inputs';
    const firstElement = document.createElement('input');
    const secondElement = document.createElement('input');
    container.appendChild(divContainer);
    divFirstElement.appendChild(firstElement);
    divSecondElement.appendChild(secondElement);
    divContainer.appendChild(divFirstElement);
    divContainer.appendChild(divSecondElement);
=======
/** Adds a new input field. */
function addInput() {
    const inputsContainer = document.getElementById('inputs')
    const input = document.createElement('input')
    input.placeholder = '00:00'
    inputsContainer.appendChild(input)
>>>>>>> 42e77cb14c0810888f0d4df771dfd16aa8b634e4
}

/** Calculates and displays the total time by adding up the inputs. */
function calculateTotalTime() {
    const arrayTimes = []
    const floatTimes = Array.from(document.querySelectorAll('input'))
        // Only take the inputs that are not empty
        .filter(inputValue => inputValue.value != '')
        // Map the strings to numbers representing the seconds
        .map(input => parseTimeString(input.value))
    // Add up the inputs
    const getTotal = floatTimes.reduce((valueBefore, valueAfter) => (valueBefore + valueAfter), 0)
    // Put the value inside the textarea
    displayOutput(getTotal)
}

/** Calculates and displays the difference between the two inputs.  */
function subtractTime() {
    const subtractTimes = []
    const subtraction = Array.from(document.querySelectorAll('input'))
        .filter(inpValue => inpValue.value != '')
        .map(input => parseTimeString(input.value))
    const getSubtraction = subtraction.reduce((valueBefore, valueAfter) => (valueAfter - valueBefore), 0)
    displayOutput(getSubtraction)
}

/** Parses a time string and returns the seconds. */
function parseTimeString(timeString) {
    const floats = timeString.split(':')
    return floats.length > 1 ? (parseFloat(floats) * 60) + parseFloat(floats[1]) : (parseFloat(floats) * 60)
}

/** Transforms seconds to minutes and displays the output. */
function displayOutput(time) {
    const minutes = Math.floor(time / 60)
    const minutesString = ('' + minutes).padStart(2, '0')
    const seconds = time - (minutes * 60)
    const secondsString = ('' + seconds).padStart(2, '0')
    document.getElementById('result').innerHTML = `${minutesString}:${secondsString}`
}
