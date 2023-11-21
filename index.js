import { 
    multiply,
    sum,
    PI
} from './math.js';
import Model from './model.js';

const aInputNode = document.querySelector('#a');
const bInputNode = document.querySelector('#b');
const resBtnNode = document.querySelector('#result-btn');
const outputNode = document.querySelector('#output');

const model = new Model()

resBtnNode.addEventListener('click', () => {
    const a = parseInt(aInputNode.value);
    const b = parseInt(bInputNode.value);

    outputNode.innerText = multiply(a, b);

    console.log(PI);
    console.log(model.getTodos());
})