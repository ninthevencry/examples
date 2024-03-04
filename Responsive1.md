Viewport Meta Tag
Thus far, we have been learning about creating responsive web designs with CSS. However, in order for us to enable this responsive CSS to work, we need to get familiar with the HTML viewport meta tag!

Let’s start with the viewport, which is the total viewable area for a user; this area varies depending on device. The viewport is smaller on a mobile device and larger on a desktop.

Based on the size of the viewport, the meta tag (<meta>) is used to instruct the browser on how to render the webpage’s scale and dimensions. For instance, say if a web page is 960px and the device is 320px wide. Adding the viewport meta tag will squish the content down until it is 320px — there is no need for the user to zoom out and view the whole page!

Inside the <head> element, we will find where the <meta> tag syntax is implemented:

<!DOCTYPE html> 
<html lang="en"> 
  <head> 
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
  </head> 

We can break down the added <meta> tag into the following essential components:

the name="viewport" attribute: tells the browser to display the web page at the same width as its screen
the content attribute: defines the values for the <meta> tag, including width and initial-scale
the width=device-width key-value pair: controls the size of the viewport in which it sets the width of the viewport to equal the width of the device
the initial-scale=1 key-value pair: sets the initial zoom level (Read more about scale at MDN’s viewport documentation)
The viewport meta tag allows our web pages to be responsive and adapt a site’s contents to the users’ screen size. 

**Media Queries
CSS uses media queries to adapt a website’s content to different screen sizes. With media queries, CSS can detect the size of the current screen and apply different CSS styles depending on the width of the screen.

@media only screen and (max-width: 480px) {
  body {
    font-size: 12px;
  }
}

The example above demonstrates how a media query is applied. The media query defines a rule for screens smaller than 480 pixels (approximately the width of many smartphones in landscape orientation).

Let’s break this example down into its parts:

@media — This keyword begins a media query rule and instructs the CSS compiler on how to parse the rest of the rule.
only screen — Indicates what types of devices should use this rule. In early attempts to target different devices, CSS incorporated different media types (screen, print, handheld). The rationale was that by knowing the media type, the proper CSS rules could be applied. However, “handheld” and “screen” devices began to occupy a much wider range of sizes and having only one CSS rule per media device was not sufficient. screen is the media type always used for displaying content, no matter the type of device. The only keyword is added to indicate that this rule only applies to one media type (screen).
and (max-width : 480px) — This part of the rule is called a media feature, and instructs the CSS compiler to apply the CSS styles to devices with a width of 480 pixels or smaller. Media features are the conditions that must be met in order to render the CSS within a media query.
CSS rules are nested inside of the media query’s curly braces. The rules will be applied when the media query is met. In the example above, the text in the body element is set to a font-size of 12px when the user’s screen is less than 480px.

**Range
Specific screen sizes can be targeted by setting multiple width and height media features. min-width and min-height are used to set the minimum width and minimum height, respectively. Conversely, max-width and max-height set the maximum width and maximum height, respectively.

By using multiple widths and heights, a range can be set for a media query.

@media only screen and (min-width: 320px) and (max-width: 480px) {
    /* ruleset for 320px - 480px */
}

The example above would apply its CSS rules only when the screen size is between 320 pixels and 480 pixels. Notice the use of a second and keyword after the min-width media feature. This allows us to chain two requirements together.

The example above can be written using two separate rules as well:

@media only screen and (min-width: 320px) { 
    /* ruleset for >= 320px */
}


@media only screen and (min-width: 480px) { 
    /* ruleset for >= 480px */
}

The first media query in the example above will apply CSS rules when the size of the screen meets or exceeds 320 pixels. The second media query will then apply CSS rules when the size of the screen meets or exceeds 480 pixels, meaning that it can override CSS rules present in the first media query or apply additional CSS rules that are not already present in the first.

Both examples above are valid, and it is likely that you will see both patterns used when reading another developer’s code.

**Dots Per Inch (DPI)
Another media feature we can target is screen resolution. Many times we will want to supply higher quality media (images, video, etc.) only to users with screens that can support high resolution media. Targeting screen resolution also helps users avoid downloading high resolution (large file size) images that their screen may not be able to properly display.

To target by resolution, we can use the min-resolution and max-resolution media features. These media features accept a resolution value in either dots per inch (dpi) or dots per centimeter (dpc). Learn more about resolution measurements here.

@media only screen and (min-resolution: 300dpi) {
    /* CSS for high resolution screens */
}

The media query in the example above targets high resolution screens by making sure the screen resolution is at least 300 dots per inch. If the screen resolution query is met, then we can use CSS to display high resolution images and other media.

**And Operator
In previous exercises, we chained multiple media features of the same type in one media query by using the and operator. It allowed us to create a range by using min-width and max-width in the same media query.

The and operator can be used to require multiple media features. Therefore, we can use the and operator to require both a max-width of 480px and to have a min-resolution of 300dpi.

For example:

@media only screen and (max-width: 480px) and (min-resolution: 300dpi) {
    /* CSS ruleset */
}

By placing the and operator between the two media features, the browser will require both media features to be true before it renders the CSS within the media query. The and operator can be used to chain as many media features as necessary.

**Comma Separated List
If only one of multiple media features in a media query must be met, media features can be separated in a comma separated list.

For example, if we needed to apply a style when only one of the below is true:

The screen is more than 480 pixels wide
The screen is in landscape mode
We could write:

@media only screen and (min-width: 480px), (orientation: landscape) {
    /* CSS ruleset */
}

In the example above, we used a comma (,) to separate multiple rules. The example above requires only one of the media features to be true for its CSS to apply.

Note that the second media feature is orientation. The orientation media feature detects if the page has more width than height. If a page is wider, it’s considered landscape, and if a page is taller, it’s considered portrait.

Breakpoints
We know how to use media queries to apply CSS rules based on screen size and resolution, but how do we determine what queries to set?

The points at which media queries are set are called breakpoints. Breakpoints are the screen sizes at which your web page does not appear properly. For example, if we want to target tablets that are in landscape orientation, we can create the following breakpoint:

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    /* CSS ruleset */
}

The example above creates a screen size range the size of a tablet in landscape mode and also identifies the orientation.

However, setting breakpoints for every device imaginable would be incredibly difficult because there are many devices of differing shapes and sizes. In addition, new devices are released with new screen sizes every year.

Rather than set breakpoints based on specific devices, the best practice is to resize your browser to view where the website naturally breaks based on its content. The dimensions at which the layout breaks or looks odd become your media query breakpoints. Within those breakpoints, we can adjust the CSS to make the page resize and reorganize.

By observing the dimensions at which a website naturally breaks, you can set media query breakpoints that create the best possible user experience on a project by project basis, rather than forcing every project to fit a certain screen size. Different projects have different needs, and creating a responsive design should be no different.

Check out this li![alt text](screen-sizes.png)st of breakpoints by device widths. Use it as a reference of screen widths to test your website to make certain it looks great across a variety of devices.

https://codepip.com/games/grid-garden/
https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/
https://css-tricks.com/snippets/css/complete-guide-grid/


##THE SCRIPT ELEMENT

HTML creates the skeleton of a webpage, but JavaScript introduces interactivity

The <script> element has an opening and closing tag. You can embed JavaScript code inbetween the opening and closing <script> tags.

You link to external JavaScript files with the src attribute in the opening <script> tag.

By default, scripts are loaded and executed as soon as the HTML parser encounters them in the HTML file, the HTML parser waits to load the entire script before from proceeding to parse the rest of the page elements.

The defer attribute ensures that the entire HTML file has been parsed before the script is executed.

The async attribute will allow the HTML parser to continue parsing as the script is being downloaded, but will execute immediately after it has been downloaded.

The old convention was to put scripts right before the </body> tag to prevent the script from blocking the rest of the HTML content. Now, the convention is to put the script tag in the <head> element and to use the defer and async attributes.

## What is the DOM?
The Document Object Model, abbreviated DOM, is a powerful tree-like structure that allows programmers to conceptualize hierarchy and access the elements on a web page.

The DOM is one of the better-named acronyms in the field of Web Development. In fact, a useful way to understand what DOM does is by breaking down the acronym but out of order:

The DOM is a logical tree-like Model that organizes a web page’s HTML Document as an Object.
The DOM is implemented by browsers to allow JavaScript to access, modify, and update the structure of an HTML web page in an organized way.

For this reason, we like to think of the DOM as the link between an HTML web page and scripting languages.

The DOM as a Tree Structure
Tree-like modeling is used in many fields, including evolutionary science and data analytics. Perhaps you’re already familiar with the concept of family trees: these charts represent the familial relationships amongst the descendants of a given family name.

The DOM tree follows similar logic to that of a family tree. A family tree is made up of family members and their relationships to the family name. In computer science, we would call each family member a node.

We define a node as an intersecting point in a tree that contains data.

In the DOM tree, the top-most node is called the root node, and it represents the HTML document. The descendants of the root node are the HTML tags in the document, starting with the <html> tag followed by the <head> and <body> tags and so on.

Parent Child Relationships in the DOM
Following the metaphor of a family tree, let’s define some key terminology in the DOM hierarchy:

A parent node is any node that is a direct ancestor of another node.

A child node is a direct descendant of another node, called the parent node.

Knowing these terms will allow you to understand and discuss the DOM as a tree-like structure. In fact, you will also see this terminology used when referring to the nesting structure of HTML code. Programmers refer to elements nested inside other elements as the children elements and parent elements respectively.

The DOM is a structural model of a web page that allows for scripting languages to access that page.
The system of organization in the DOM mimics the nesting structure of an HTML document.
Elements nested within another are referred to as the children of that element. The element they are nested within is called the parent element of those elements.
The DOM also allows access to the attributes of an HTML element such as style, id, etc.

##Select and Modify Elements
In the previous exercise, we accessed the <body> element with the document keyword!

What if we wanted to select a specific element besides the entire <body> element? The DOM interface allows us to access a specific element with CSS selectors.

CSS selectors define the elements to which a set of CSS rules apply, but we can also use these same selectors to access DOM elements with JavaScript! Selectors can include a tag name, a class, or an ID.

The .querySelector() method allows us to specify a CSS selector as a string and returns the first element that matches that selector. The following code would return the first paragraph in the document.

document.querySelector('p');

Along with .querySelector(), JavaScript has more targeted methods that select elements based on their class, id, or tag name.

For example, if you want to access an element directly by its id, you can use the aptly named .getElementById() method:

document.getElementById('bio').innerHTML = 'The description';

In this example, we’ve selected the element with an ID of 'bio' and set its .innerHTML to the text 'The description'. Notice that the ID is passed as a string, wrapped in quotation marks (' ').

There are also the .getElementsByClassName() and .getElementsByTagName() methods which return an array of elements, instead of just one element. You can use bracket notation to access individual elements of an array:

// Set first element of .student class as 'Not yet registered'
document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';

// Set second <li> tag as 'Cedric Diggory'
document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;

In the above example code, the first element with the 'student' class and the second <li> element have had their inner HTML changed.

document.querySelector('h1').innerHTML = "Most popular Harry Potter characters";

document.getElementById('fourth').innerHTML = "Professor Snape";

document.getElementsByClassName('slytherin')[0].innerHTML = "Salazar Slytherin";

document.getElementsByTagName('li')[0].innerHTML = "Dobby";

document.querySelector('body').style.backgroundColor  = '#201F2E';
document.querySelector('.heading ').style.fontFamily = 'Roboto';

##Traversing the DOM
Let’s recap the parent and children relationship in the DOM hierarchy. A parent node is any node that is a direct ancestor of another node. A child node is a direct descendant of another node, called the parent node.

These relationships follow the nested structure of the HTML code. Elements nested within one HTML element are children of that parent element.

Each element has a .parentNode and .children property. The .parentNode property returns the parent of the specified element in the DOM hierarchy. Note that the document element is the root node so its .parentNode property will return null. The .children property returns an array of the specified element’s children. If the element does not have any children, it will return null.

<ul id='groceries'>
  <li id='must-have'>Toilet Paper</li>
  <li>Apples</li>
  <li>Chocolate</li>
  <li>Dumplings</li>
</ul>

In the HTML code above, we have an <ul> element with the ID of groceries with four <li> elements inside.

let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('groceries').children; // returns an array of <li> elements

Here, the parentElement variable stores the .parentNode of the <li> element with the ID of must-have, which will be the <ul> element with the ID of groceries. The childElements variable is set to the children of the <ul> element with the ID of groceries, which will be an array of four <li> elements.

let first = document.body.children[0];
first.innerHTML = "BROWN BEARS ARE AWESOME!";
first.parentElement.style.backgroundColor = "beige";

##Create and Insert Elements
Just as the DOM allows scripts to modify existing elements, it also allows for the creation of new ones.

The .createElement() method creates a new element based on the specified tag name passed into it as an argument. However, it does not append it to the document. It creates an empty element with no inner HTML.

let paragraph = document.createElement('p');

In the example code above, the .createElement() method takes 'p' as its argument which creates an empty <p> element and stores it as the paragraph variable.

We can assign values to the properties of the newly created element like how we’ve done previously with existing elements.

paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';

Above, we use the .id property to assign 'info' as ID and the .innerHTML property to set 'The text inside the paragraph' as the content of the <p> element.

In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM, referred to as the parent element. We call this process appending. The .appendChild() method will add a child element as the parent element’s last child node. The following code appends the <p> element stored in the paragraph variable to the document body.

document.body.appendChild(paragraph);

The .appendChild() method does not replace the content inside of the parent, in this case, body. Rather, it appends the new element as the last child of that parent.

let newAttraction = document.createElement("li");
newAttraction.id = "vespa";
newAttraction.innerHTML = "Rent a Vespa";
document.getElementById("italy-attractions").append(newAttraction);

##Remove an Element
In addition to modifying or creating an element from scratch, the DOM also allows for the removal of an element. The .removeChild() method removes a specified child from a parent.

let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);

In the above example code, the .querySelector() method returns the first paragraph in the document. Then, the paragraph element is passed as an argument of the .removeChild() method chained to the parent of the paragraph—document.body. This removes the first paragraph from the document body.

If you want to hide an element rather than completely deleting it, the .hidden property allows you to hide it by setting the property as true or false:

document.getElementById('sign').hidden = true;

The code above did not remove the element with ID of 'sign' from the DOM but rather, hid it.

let elementToRemove = document.getElementById("vespa");
document.getElementById("italy-attractions").removeChild(elementToRemove);

##Add Click Interactivity
You can add interactivity to DOM elements by assigning a function to run based on an event. Events can include anything from a click to a user mousing over an element. We will learn more about events in the upcoming DOM Events with JavaScript lesson. For now, let’s take a look at how to modify an element when a click event happens.

The .onclick property allows you to assign a function to run on when a click event happens on an element:

let element = document.querySelector('button');

element.onclick = function() { 
  element.style.backgroundColor = 'blue' 
};

You can also assign the .onclick property to a function by name:

let element = document.querySelector('button');

function turnBlue() {
   element.style.backgroundColor = 'blue';
}

element.onclick = turnBlue;

In the above example code, when the <button> element detects a click event, the backgroundColor will change to 'blue'.

let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
  element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button";
}

element.onclick = turnButtonRed;

##Review
In this lesson, you manipulated a webpage structure by leveraging the Document Object Model (DOM) interface in JavaScript.

Let’s review what we learned:

The document keyword grants access to the root of the DOM in JavaScript.
The DOM Interface allows you to select a specific element with CSS selectors by using the .querySelector() method.
You can access an element directly by its ID with the .getElementById() method which returns a single element.
You can access an array of elements with the .getElementsByClassName() and .getElementsByTagName() methods, then call a single element by referencing its placement in the array.
The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively.
You can create, append, and remove elements by using the .createElement(),.appendChild() and .removeChild() methods respectively.
The .onclick property can add interactivity to a DOM element based on a click event.
The .children property returns a list of an element’s children and the .parentNode property returns the element’s closest connected node in the direction towards the root.

##Event Handler Registration
You’re doing great! Now it’s time to dive into using event handler functions to create interactivity.

Using the .addEventListener() method, we can have a DOM element listen for a specific event and execute a block of code when the event is detected. The DOM element that listens for an event is called the event target and the block of code that runs when the event happens is called the event handler.

Let’s take a look at the code below:

let eventTarget = document.getElementById('targetElement');

eventTarget.addEventListener('click', function() {
  // this block of code will run when click event happens on eventTarget element
});

Let’s break this down!

We selected our event target from the DOM using document.getElementById('targetElement').
We used the .addEventListener() method on the eventTarget DOM element.
The .addEventListener() method takes two arguments: an event name in string format and an event handler function. We will learn about different values we can use as event names in a later lesson.
In this example, we used the 'click' event, which fires when the user clicks on eventTarget.
The code block in the event handler function will execute when the 'click' event is detected.
Instead of using an anonymous function as the event handler, it’s best practice to create a named event handler function. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

function eventHandlerFunction() {
  // this block of code will run when click event happens
}

eventTarget.addEventListener('click', eventHandlerFunction);

The named function eventHandlerFunction is passed as the second argument of the .addEventListener() method instead of defining an anonymous function within the method!

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
const showInfo = () => {
  if (moreInfo.style.display === "block") {
    moreInfo.style.display = "none";
  } else {
    moreInfo.style.display = "block";
  }
}

readMore.addEventListener('click', showInfo);

##Adding Event Handlers
We looked at registering event handlers using the .addEventListener() method, but there is also another way!

Event Handlers can also be registered by setting an .onevent property on a DOM element (event target). The pattern for registering a specific event is to append an element with .on followed by the lowercased event type name. For instance, if we want to register a click event with this pattern, we would write:

eventTarget.onclick = eventHandlerFunction;

Here, we give the DOM element eventTarget the .onclick property and set its value as the event handler function eventHandlerFunction.

It’s important to know that this .onevent property and .addEventListener() will both register event listeners. With .onevent, it allows for one event handler function to be attached to the event target. However, with the .addEventListener() method , we can add multiple event handler functions. In the later exercises, we’ll be using the .addEventListener() syntax, but we wanted to also introduce the .onevent syntax because both are widely used.

##Removing Event Handlers
The .removeEventListener() method is used to reverse the .addEventListener() method. This method stops the event target from “listening” for an event to fire when it no longer needs to. .removeEventListener() also takes two arguments:

The event type as a string
The event handler function
Check out the syntax of a .removeEventListener() method with a click event:

eventTarget.removeEventListener('click', eventHandlerFunction);

Because there can be multiple event handler functions associated with a particular event, .removeEventListener() needs both the exact event type name and the name of the event handler you want to remove. If .addEventListener() was provided an anonymous function, then that event listener cannot be removed.

##Event Object Properties
JavaScript stores events as Event objects with their related data and functionalities as properties and methods. When an event is triggered, the event object can be passed as an argument to the event handler function.

function eventHandlerFunction(event){
   console.log(event.timeStamp);
}

eventTarget.addEventListener('click', eventHandlerFunction);

In the example above, when the 'click' event is triggered on the eventTarget, the eventHandlerFunction receives event, the Event object, which has information related to the 'click' event. Then, we log the time it took for the event to be triggered since the document was loaded by accessing the .timeStamp property of the event object.

There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:

the .target property to reference the element that the event is registered to.
the .type property to access the name of the event.
the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.

##Event Types
Beyond the click event, there are all types of DOM events that can fire in a browser! It’s important to know most events in the DOM take place without being noticed because there are no event handlers connected to them.

It’s also important to know some registered events don’t depend on user interactions to fire. For instance, the load event fires after website files completely load in the browser.

Browsers can fire many other events without a user — you can check out a list of events on the MDN Events Reference page.

Many events need user interaction with the DOM to fire. One user interaction event you’ve become familiar with is the click event. A click event fires when the user presses and releases a mouse button on an element in the DOM.

##Keyboard Events
Other popular types of events are keyboard events! keyboard events are triggered by user interaction with keyboard keys in the browser

Keyboard events have unique properties assigned to their event objects like the .key property that stores the values of the key pressed by the user. You can program the event handler function to react to a specific key, or react to any interaction with the keyboard.