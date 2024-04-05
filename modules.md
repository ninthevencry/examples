https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

## Implementations of Modules in JavaScript: Node.js vs ES6
Before we dive in, it should be noted that there are multiple ways of implementing modules depending on the runtime environment in which your code is executed. In JavaScript, there are two runtime environments and each has a preferred module implementation:

The Node runtime environment and the module.exports and require() syntax.
The browser’s runtime environment and the ES6 import/export syntax.
This article will focus on using the ES6 import/export syntax in a browser’s runtime environment. For more information, you can read the articles linked below.

## ES6 Named Export Syntax
A module must be entirely contained within a file. So, let’s first consider where a new module may be placed within the file system. Since it needs to be used by both of these projects, you may want to put it in a mutually accessible location. The entire file structure containing both projects and this new module, let’s call it dom-functions.js, could look like this:

secret-image/
|-- secret-image.html
|-- secret-image.js
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
modules/
|-- dom-functions.js    <-- new module file

Inside dom-functions.js, the functions you wish to reuse can be exported using the named export syntax below:

export { resourceToExportA, resourceToExportB, ...}

Using this syntax, the name of each exported resource is listed between curly braces and separated by commas. Below, you can see how this is implemented in the new module file dom-functions.js:

/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
        
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

export { toggleHiddenElement, changeToFunkyColor };

In addition to the syntax above, in which all named exports are listed together, individual values may be exported as named exports by simply placing the export keyword in front of the variable’s declaration. Here is the same example using this syntax:

/* dom-functions.js */
export const toggleHiddenElement = (domElement) => {
  // logic omitted...
}

export const changeToFunkyColor = (domElement) => {
  // logic omitted...
}

## ES6 Import Syntax
The ES6 syntax for importing named resources from modules is similar to the export syntax:

import { exportedResourceA, exportedResourceB } from '/path/to/module.js';

Let’s update the secret-messages program such that it now imports functionality from dom-functions.js. Doing so requires two important steps. First, update secret-messages.js:

/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

Now, you must also update secret-messages.html:

<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script type="module" src="./secret-messages.js"> </script>
  </body>
</html>

The change here is subtle, can you spot it? In secret-messages.html, the only thing that changes is the addition of the attribute type='module' to the script element. Failure to do so can cause some browsers to throw an error. For example, in Chrome you might see this error:

## Renaming Imports to Avoid Naming Collisions
Inevitably, you will run into a situation where the resources you wish to import share a name with some other value that already exists in your program (or from another imported module).

For example, suppose you had access to two modules, greeterEspanol.js and greeterFrancais.js. Each exports a function called greet():

/* inside greeterEspanol.js */
const greet = () => {
  console.log('hola');
}
export { greet };

/* inside greeterFrancais.js */
const greet = () => {
  console.log('bonjour');
}
export { greet };

Now, let’s say you wanted to use each of these functions in a program, called main.js, that simulates a conversation between a spanish-speaker and a french-speaker.

import { greet } from 'greeterEspanol.js';
import { greet } from 'greeterFrancais.js';

The code above will throw an error on line 2 due to the fact that the identifier greet has already been defined on line 1. Thankfully, ES6 includes syntax for renaming imported resources by adding in the keyword as. It looks like this:

import { exportedResource as newlyNamedResource } from '/path/to/module'

Let’s see how this could work within main.js

/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';

greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour

Now, both of the imported functions can be called within main.js using their new identifiers, greetEspanol() and greetFrancais().

## Default Exports and Imports
So far, the examples shown have used the named export syntax, in which a module’s resources are exported individually by name. Every module also has the option to export a single value to represent the entire module called the default export. Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.

The syntax for exporting a default object looks like this:

const resources = { 
  valueA, 
  valueB 
}
export { resources as default };

With this syntax, the object containing the module’s resources is first declared and then is exported on the next line. At first glance, it looks like the resources object is being exported as a named export. However, the clause as default renames the exported object to default, a reserved identifier that can only be given to a single exported value.

You may also see this shorthand syntax where the value follows export default is the default value to be exported:

const resources = {
  valueA,
  valueB
}
export default resources;

## Importing default values.
The syntax for importing default exports looks like this:

import importedResources from 'module.js';

Notice that the curly braces are gone from the import statement. This syntax is actually shorthand for import { default as importedResources } from 'module.js and the imported default value may be given any name the programmer chooses.

It should be noted that if the default export is an object, the values inside cannot be extracted until after the object is imported, like so:

// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;

// This will not work...
import { valueA, valueB } from 'module.js'

Let’s return to the prior example. The dom-functions.js module from above could be rewritten to use default exports like so:

/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
        
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;

This default exports object can now be used within secret-messages.js like so:

import domFunctions from '../modules/dom-functions.js';

const { toggleHiddenElement, changeToFunkyColor } = domFunctions;

const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

Notice how toggleHiddenElement() and changeToFunkyColor() are now methods of the imported object called domFunctions and are extracted using ES6 destructuring syntax! It should be noted that the identifier domFunctions can be chosen as the programmer sees fit. If you recall, the syntax used in the snippet above is shorthand for:

import { default as domFunctions } from '../modules/dom-functions.js';

Continue on to the challenges below before the final review at the end of the article.


