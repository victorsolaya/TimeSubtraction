// Events
document.getElementById('calc').addEventListener('click', calculateTotalTime)
document.getElementById('addInputs').addEventListener('click', createPairOfInputs)
document.getElementById('subtractTime').addEventListener('click', subtractTime)

/** Creates the inputs that will be used to do the calculations. */
function createPairOfInputs() {
    const container = document.getElementById('inputContainer')
    const divFirstElement = document.createElement('div')
    divFirstElement.className = 'inputs'
    const divSecondElement = document.createElement('div')
    divSecondElement.className = 'inputs'
    const firstElement = document.createElement('input')
    const secondElement = document.createElement('input')
    divFirstElement.appendChild(firstElement)
    divSecondElement.appendChild(secondElement)
    container.appendChild(divFirstElement)
    container.appendChild(divSecondElement)
}

/** Calculates the total time by adding up the inputs. */
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
    transformToMinutes(getTotal)
}

/** Calculates and displays the difference between the two inputs.  */
function subtractTime() {
    const subtractTimes = []
    const subtraction = Array.from(document.querySelectorAll('input'))
        .filter(inpValue => inpValue.value != '')
        .map(input => parseTimeString(input.value))
    const getSubtraction = subtraction.reduce((valueBefore, valueAfter) => (valueAfter - valueBefore), 0)
    transformToMinutes(getSubtraction)
}

/** Parses a time string and returns the seconds. */
function parseTimeString(timeString) {
    const floats = timeString.split(':')
    return floats.length > 1 ? (parseFloat(floats) * 60) + parseFloat(floats[1]) : (parseFloat(floats) * 60)
}

/** Transforms seconds to minutes and displays the output. */
function transformToMinutes(time) {
    const minutes = Math.floor(time / 60)
    const seconds = time - (minutes * 60)
    document.getElementById('total').innerHTML = `Total: -->  ${minutes}:${seconds}`
}
