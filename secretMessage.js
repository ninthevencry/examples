/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from './domFunctions.js';
//example of when you can rename the imported method
//import { toggleHiddenElement as anotherName, changeToFunkyColor } from './domFunctions.js';

//example of importing this at defaults
//import domFunctions from './domFunctions.js';
//const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(buttonElement);
    alert('test');
});