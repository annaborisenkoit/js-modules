import { 
    multiply,
    sum,
    PI
} from './math.js';

const aInputNode = document.querySelector('#a');
const bInputNode = document.querySelector('#b');
const resBtnNode = document.querySelector('#result-btn');
const outputNode = document.querySelector('#output');

resBtnNode.addEventListener('click', () => {
    const a = parseInt(aInputNode.value);
    const b = parseInt(bInputNode.value);

    outputNode.innerText = multiply(a, b);

    console.log(PI);
})