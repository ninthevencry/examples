To designate an element as a flex container, set the element’s display property to flex or inline-flex. Once an item is a flex container, there are several properties we can use to specify how its children behave. In this lesson we will cover these properties:

- justify-content
- align-items
- flex-grow
- flex-shrink
- flex-basis
- flex
- flex-wrap
- align-content
- flex-direction
- flex-flow

## justify-content

flex-start — all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them.

flex-end — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.

center — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.

space-around — items will be positioned with equal space before and after each item, resulting in double the space between elements.

space-between — items will be positioned with equal space between them, but no extra space before the first or after the last elements.

## align-items 

flex-start — all elements will be positioned at the top of the parent container.

flex-end — all elements will be positioned at the bottom of the parent container.

center — the center of all elements will be positioned halfway between the top and bottom of the parent container.

baseline — the bottom of the content of all items will be aligned with each other.

stretch — if possible, the items will stretch from top to bottom of the container (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).

## flex-grow / shrink / basis

You may have noticed in earlier exercises that flex items shrank when the flex container was too small, even though we had not declared the property. This is because the default value of flex-shrink is 1. However, flex items do not grow unless the flex-grow property is declared because the default value of flex-grow is 0.

Another way of specifying the width of a flex item is with the flex-basis property. flex-basis allows us to specify the width of an item before it stretches or shrinks.

## flex property

The flex property allows you to declare flex-grow, flex-shrink, and flex-basis all in one line.

#top .side {
  /* 
  flex-grow: 2;
  flex-shrink: 2;
  flex-basis: 100px;
  */
  flex: 2 2 100px;
}

## flex-wrap

Note: The flex-wrap property is declared on flex containers.

Sometimes, we don’t want our content to shrink to fit its container. Instead, we might want flex items to move to the next line when necessary. This can be declared with the flex-wrap property. The flex-wrap property can accept three values:

wrap — child elements of a flex container that don’t fit into a row will move down to the next line

wrap-reverse — the same functionality as wrap, but the order of rows within a flex container is reversed (for example, in a 2-row 
flexbox, the first row from a wrap container will become the second in wrap-reverse and the second row from the wrap container 
will become the first in wrap-reverse)

nowrap — prevents items from wrapping; this is the default value and is only necessary to override a wrap value set by a different CSS rule.

## align-content

Note: The align-content property is declared on flex containers.

In a previous exercise, we used the align-items property to space flex items from the top to the bottom of a flex container. align-items is for aligning elements within a single row.

flex-start — all rows of elements will be positioned at the top of the parent container with no extra space between.

flex-end — all rows of elements will be positioned at the bottom of the parent container with no extra space between.

center — all rows of elements will be positioned at the center of the parent element with no extra space between.

space-between — all rows of elements will be spaced evenly from the top to the bottom of the container with no space above the first or below the last.

space-around — all rows of elements will be spaced evenly from the top to the bottom of the container with the same amount of space at the top and bottom and between each element.

stretch — if a minimum height or no height is specified, the rows of elements will stretch to fill the parent container from top to bottom (default value).

## flex-direction

Note: The flex-direction property is declared on flex containers.

Up to this point, we’ve only covered flex items that stretch and shrink horizontally and wrap vertically. As previously stated, flex containers have two axes: a main axis and a cross axis. By default, the main axis is horizontal and the cross axis is vertical.

The main axis is used to position flex items with the following properties:

justify-content
flex-wrap
flex-grow
flex-shrink

The cross axis is used to position flex items with the following properties:

align-items
align-content

The main axis and cross axis are interchangeable. We can switch them using the flex-direction property. If we add the flex-direction property and give it a value of column, the flex items will be ordered vertically, not horizontally.

The flex-direction property can accept four values:

row — elements will be positioned from left to right across the parent element starting from the top left corner (default).

row-reverse — elements will be positioned from right to left across the parent element starting from the top right corner.

column — elements will be positioned from top to bottom of the parent element starting from the top left corner.

column-reverse — elements will be positioned from the bottom to the top of the parent element starting from the bottom left corner.

## flex-flow

Note: The flex-flow property is declared on flex containers.

Like the shorthand flex property, the shorthand flex-flow property is used to declare both the flex-wrap and flex-direction properties in one line.

.container {
  display: flex;
  /*
  flex-wrap: wrap;
  flex-direction: column;
  */
  flex-flow: column wrap;
}

