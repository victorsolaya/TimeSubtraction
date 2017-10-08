//Events
document.getElementById('calc').addEventListener('click', CalculateTotalTime);
document.getElementById('addInputs').addEventListener('click', createPairOfInputs);
document.getElementById('subtractTime').addEventListener('click', SubtractTime);

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
}

//Calculate of times. Now, we plus what's inside the inputs and we put in a textarea.
function CalculateTotalTime() {
    const arrayTimes = [];
    const floatTimes = Array.from(document.querySelectorAll('input'))
        //Only take the inputs with sth inside them
        .filter(inputValue => inputValue.value != "")
        //We returned the values split 
        .map(stringTime => {
            const arrayFloat = stringTime.value.split(':');
            const valueReturned = arrayFloat.length > 1 ? (parseFloat(arrayFloat) * 60) + parseFloat(arrayFloat[1]) : (parseFloat(arrayFloat) * 60)
            return valueReturned;
        })
    //We plus all the amounts
    const getTotal = floatTimes.reduce((valueBefore, valueAfter) => (valueBefore + valueAfter), 0);
    //Put the value inside the textarea
    TransformToMinutes(getTotal)
}

function SubtractTime() {
    const subtractTimes = [];
    const subtraction = Array.from(document.querySelectorAll('input'))
        .filter(inpValue => inpValue.value != "")
        .map(stringTime => {
            const arrayFloats = stringTime.value.split(':');
            const valueSubtractedReturned = arrayFloats.length > 1 ? (parseFloat(arrayFloats) * 60) + parseFloat(arrayFloats[1]) : (parseFloat(arrayFloats) * 60)
            return valueSubtractedReturned;
        })
    const getSubtraction = subtraction.reduce((valueBefore, valueAfter) => (valueAfter - valueBefore), 0);
    TransformToMinutes(getSubtraction);
}

function TransformToMinutes(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time - (minutes * 60);
    document.getElementById('total').innerHTML = `Total: -->  ${minutes}:${seconds}`;
}