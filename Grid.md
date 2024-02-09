grid-template-columns
grid-template-rows
grid-template
grid-template-area
row-gap / column-gap / gap
grid-row-start / grid-row-end
grid-column-start / grid-column-end
grid-area

To set up a grid, you need to have both a grid container and grid items. The grid container will be a parent element that contains grid items as children and applies overarching styling and positioning to them.

To turn an HTML element into a grid container, you must set the element’s display property to one of two values:

grid — for a block-level grid.
inline-grid — for an inline grid.

By default, grids contain only one column. If you were to start adding items, each item would be put on a new row; that’s not much of a grid! To change this, we need to explicitly define the number of rows and columns in our grid.

We can define the columns of our grid by using the CSS property grid-template-columns. Below is an example of this property in action:

.grid {
  display: grid;
  width: 500px;
  grid-template-columns: 100px 200px;
}

This property creates two changes. First, it defines the number of columns in the grid; in this case, there are two. Second, it sets the width of each column. The first column will be 100 pixels wide and the second column will be 200 pixels wide.

We can also define the size of our columns as a percentage of the entire grid’s width.

.grid {
  display: grid;
  width: 1000px;
  grid-template-columns: 20% 50%;
}

In this example, the grid is 1000 pixels wide. Therefore, the first column will be 200 pixels wide because it is set to be 20% of the grid’s width. The second column will be 500 pixels wide.

We can also mix and match these two units. In the example below, there are three columns of width 20 pixels, 40 percent, and 60 pixels:

.grid {
  display: grid;
  width: 100px;
  grid-template-columns: 20px 40% 60px;
}

Notice that in this example, the total width of our columns (120 pixels) exceeds the width of the grid (100 pixels). This might make our grid cover other elements on the page! In a later exercise, we will discuss how to avoid overflow.

To specify the number and size of the rows, we are going to use the property grid-template-rows.

This property is almost identical to grid-template-columns. Take a look at the code below to see both properties in action.

.grid {
  display: grid;
  width: 1000px;
  height: 500px;
  grid-template-columns: 100px 200px;
  grid-template-rows: 10% 20% 600px;
}

This grid has two columns and three rows. grid-template-rows defines the number of rows and sets each row’s height. In this example, the first row is 50 pixels tall (10% of 500), the second row is 100 pixels tall (20% of 500), and the third row is 600 pixels tall.

When using percentages in these two properties, remember that rows are defined as a percentage of the grid’s height, and columns are defined as a percentage of its width.

The shorthand property, grid-template, can replace the previous two CSS properties. Both grid-template-rows and grid-template-columns are nowhere to be found in the following code!

.grid {
  display: grid;
  width: 1000px;
  height: 500px;
  grid-template: 200px 300px / 20% 10% 70%;
}

When using grid-template, the values before the slash will determine the size of each row. The values after the slash determine the size of each column. In this example, we’ve made two rows and three columns of varying sizes.

The same rules from before apply; when using percentages to set rows, each row will be a percentage of the grid’s total height. Columns are still a percentage of the total width.

You may already be familiar with several types of responsive units such as percentages (%), ems and rems. CSS Grid introduced a new relative sizing unit — fr, like fraction.

By using the fr unit, we can define the size of columns and rows as a fraction of the grid’s length and width. This unit was specifically created for use in CSS Grid. Using fr makes it easier to prevent grid items from overflowing the boundaries of the grid. Consider the code below:

.grid {
  display: grid;
  width: 1000px;
  height: 400px;
  grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
}

In this example, the grid will have three rows and three columns. The rows are splitting up the available 400 pixels of height into four parts. The first row gets two of those parts, the second row gets one, and the third row gets one. Therefore the first row is 200 pixels tall, and the second and third rows are 100 pixels tall.

Each column’s width is a fraction of the available space. In this case, the available space is split into five parts. The first column gets one-fifth of the space, the second column gets three-fifths, and the last column gets one-fifth. Since the total width is 1000 pixels, this means that the columns will have widths of 200 pixels, 600 pixels, and 200 pixels respectively.

It is possible to use fr with other units as well. When this happens, each fr represents a fraction of the available space.

.grid {
  display: grid;
  width: 100px;
  grid-template-columns: 1fr 60px 1fr;
}

In this example, 60 pixels are taken up by the second column. Therefore the first and third columns have 40 available to split between them. Since each gets one fraction of the total, they both end up being 20 pixels wide.

**Repeat
The properties that define the number of rows and columns in a grid can take a function as a value. repeat() is one of these functions. The repeat() function was created specifically for CSS Grid.

.grid {
  display: grid;
  width: 300px;
  grid-template-columns: repeat(3, 100px);
}

The repeat function will duplicate the specifications for rows or columns a given number of times. In the example above, using the repeat function will make the grid have three columns that are each 100 pixels wide. It is the same as writing:

grid-template-columns: 100px 100px 100px;

Repeat is particularly useful with fr. For example, repeat(5, 1fr) would split your table into five equal rows or columns.

Finally, the second parameter of repeat() can have multiple values.

grid-template-columns: repeat(2, 20px 50px)

This code will create four columns where the first and third columns will be 20 pixels wide and the second and fourth will be 50 pixels wide.

**minmax
So far, all of the grids that we have worked with have been a fixed size. The grid in our example has been 400 pixels wide and 500 pixels tall. But sometimes you might want a grid to resize based on the size of your web browser.

In these situations, you might want to prevent a row or column from getting too big or too small. For example, if you have a 100-pixel wide image in your grid, you probably don’t want its column to get thinner than 100 pixels! The minmax() function can help us solve this problem.

.grid {
  display: grid;
  grid-template-columns: 100px minmax(100px, 500px) 100px;
}

In this example, the first and third columns will always be 100 pixels wide, no matter the size of the grid. The second column, however, will vary in size as the overall grid resizes. The second column will always be between 100 and 500 pixels wide.

**Grid Gap
In all of our grids so far, there hasn’t been any space between the items in our grid. The CSS properties row-gap and column-gap will put blank space between every row and column in the grid.

.grid {
  display: grid;
  width: 320px;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}

It is important to note that grid gap properties do not add space at the beginning or end of the grid. In the example code, our grid will have three columns with two ten-pixel gaps between them.

Let’s quickly calculate how wide these columns are. Remember that using fr considers all of the available space. The grid is 320 pixels wide and 20 of those pixels are taken up by the two grid gaps. Therefore each column takes a piece of the 300 available pixels. Each column gets 1fr, so the columns are evenly divided into thirds (or 100 pixels each).

Finally, there is a shorthand CSS property, gap, that can set the row and column gap at the same time.

.grid {
  display: grid;
  width: 320px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 10px;
}

The example above will set the distance between rows to 20 pixels and the distance between columns to 10 pixels. Unlike other CSS grid properties, this shorthand does not take a / between values! If only one value is given, it will set the column gap and the row gap to that value.

Note: You might have seen grid-row-gap, grid-column-gap, and grid-gap in other code, but these properties are now deprecated. 

**Multiple Row Items
Using the CSS properties grid-row-start and grid-row-end, we can make single grid items take up multiple rows. Remember, we are no longer applying CSS to the outer grid container; we’re adding CSS to the elements sitting inside the grid!

.item {
  grid-row-start: 1;
  grid-row-end: 3;
}

In this example, the HTML element of class item will take up two rows in the grid, rows 1 and 2. The values that grid-row-start and grid-row-end accept are grid lines.

Row grid lines and column grid lines start at 1 and end at a value that is 1 greater than the number of rows or columns the grid has. For example, if a grid has 5 rows, the grid row lines range from 1 to 6. If a grid has 8 rows, the grid row lines range from 1 to 9.

The value for grid-row-start should be the row at which you want the grid item to begin. The value for grid-row-end should be one greater than the row at which you want the grid item to end. An element that covers rows 2, 3, and 4 should have these declarations: grid-row-start: 2 and grid-row-end: 5.

It is possible for the value of grid-row-start to be greater than that of grid-row-end. Both properties can also each have negative values. Consult the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start) to learn more about how to use these features.

**Grid Row
We can use the property grid-row as shorthand for grid-row-start and grid-row-end. The following two code blocks will produce the same output:

.item {
  grid-row-start: 4;
  grid-row-end: 6;
}

.item {
  grid-row: 4 / 6;
}

This code should look similar to the way grid-template is shorthand for grid-template-rowsand grid-template-columns. In this case, the starting row goes before the “/“ and the ending row goes after it. Again, the ending row is exclusive; this grid item will occupy rows four and five.

When an item spans multiple rows or columns using these properties, it will also include the gap if any exists. For example, if an item spans two rows of height 100 pixels and there is a ten-pixel gap, then the item will have a total height of 210 pixels.

**Grid Column
The previous three properties also exist for columns. grid-column-start, grid-column-end and grid-column work identically to the row properties. These properties allow a grid item to span multiple columns.

When using these properties, we can use the keyword span to start or end a column or row, relative to its other end. Look at how span is used in the code below:

.item {
  grid-column: 4 / span 2;
}

This is telling the item element to begin in column four and take up two columns of space. So item would occupy columns four and five. It produces the same result as the following code blocks:

.item {
  grid-column: 4 / 6;
}

.item {
  grid-column-start: 4;
  grid-column-end: span 2;
}

.item {
  grid-column-start: span 2;
  grid-column-end: 6;
}

span is a useful keyword, because it avoids off-by-one errors (miscalculating the ending grid line) you might make when determining the ending grid line of an element. If you know where you want your grid item to start and how long it should be, use span!

**Grid Area
We’ve already been able to use grid-row and grid-column as shorthand for properties like grid-row-start and grid-row-end. We can refactor even more using the property grid-area. This property will set the starting and ending positions for both the rows and columns of an item.

.item {
  grid-area: 2 / 3 / 4 / span 5;
}

grid-area takes four values separated by slashes. The order is important! This is how grid-area will interpret those values.

grid-row-start
grid-column-start
grid-row-end
grid-column-end

In the above example, the item will start on row 2 and end on row 4, though the 4th row is not actually included, only rows 2 and 3! The item will then start on column 3 and instead of setting a number for which column to end on, we want this item to span 5 columns — this means the item will include columns 3, 4, 5, 6, and 7.

Using grid-area is an easy way to place items exactly where you want them in a grid.

**Review
At this point, we’ve covered a great deal of different ways to manipulate the grid and the items inside it to create interesting layouts.

grid-template-columns defines the number and sizes of the columns of the grid
grid-template-rows defines the number and sizes of the rows of the grid
grid-template is a shorthand for defining both grid-template-columns and grid-template-rows in one line
row-gap puts blank space between the rows of the grid
column-gap puts blank space between the columns of the grid
gap is a shorthand for defining both row-gap and column-gap in one line
grid-row-start and grid-row-end makes elements span certain rows of the grid
grid-column-start and grid-column-end makes elements span certain columns of the grid
grid-area is a shorthand for grid-row-start, grid-column-start, grid-row-end, and grid-column-end, all in one line

**Grid Template Areas
The grid-template-areas property allows you to name sections of your web page to use as values in the grid-row-start, grid-row-end, grid-column-start,grid-column-end, and grid-area properties. This property is declared on grid containers.

<div class="container">
  <header>Welcome!</header>
  <nav>Links!</nav>
  <section class="info">Info!</section>
  <section class="services">Services!</section>
  <footer>Contact us!</footer>
</div>

.container {
  display: grid;
  max-width: 900px;
  position: relative;
  margin: auto;
  grid-template-areas: "header header"
                       "nav nav" 
                       "info services"
                       "footer footer";
  grid-template-rows: 300px 120px 800px 120px;
  grid-template-columns: 1fr 3fr; 
}

header {
  grid-area: header;
} 

nav {
  grid-area: nav;
} 

.info {
  grid-area: info;
} 

.services {
  grid-area: services;
}

footer {
  grid-area: footer;
} 

You may want to expand this section of the website to view the code above more clearly.

In the example above, the HTML creates a web page with five distinct parts.
In the .container ruleset, the grid-template-areas declaration creates a 2-column, 4-row layout.
The grid-template-rows declaration specifies the height of each of the four rows from top to bottom: 300 pixels, 120 pixels, 800 pixels, and 120 pixels.
The grid-template-columns declaration uses the fr value to cause the left column to use one fourth of the available space on the page and the right column to use three-fourths of the available space on the page.
In each ruleset below .container, we use the grid-area property to tell that section to cover the portion of the page specified. The header element spans the first row and both columns. The nav element spans the second row and both columns. The element with class .info spans the third row and left column. The element with class .services spans the third row and right column. The footer element spans the bottom row and both columns

**Overlapping Elements
Another powerful feature of CSS Grid Layout is the ability to easily overlap elements.

When overlapping elements, it is generally easiest to use the grid-area property with grid row names. Remember that grid-area will set the starting and ending positions for both the rows and columns of an item.

<div class="container">
  <div class="info">Info!</div> 
  <img src="#" />
  <div class="services">Services!</div>
</div>

.container {
  display: grid;
  grid-template: repeat(8, 200px) / repeat(6, 100px);
}

.info {
  grid-area: 1 / 1 / 9 / 4;
}

.services {
  grid-area: 1 / 4 / 9 / 7;
}

img {
  grid-area: 2 / 3 / 5 / 5;
  z-index: 5;
}

In the example above, there is a grid container with eight rows and six columns. There are three grid items within the container — a <div> with the class info, a <div> with the class services, and an image.

The info section covers all eight rows and the first three columns. The services section covers all eight rows and the last three columns.

The image spans the 2nd, 3rd, and 4th rows and the 3rd and 4th columns.

The z-index property tells the browser to render the image element on top of the services and info sections so that it is visible.

**Justify Items
We have referred to “two-dimensional grid-based layout” several times throughout this course.

There are two axes in a grid layout — the column (or block) axis and the row (or inline) axis.

The column axis stretches from top to bottom across the web page.

The row axis stretches from left to right across the web page.

In the following four exercises, we will learn and use properties that rely on an understanding of grid axes.

justify-items is a property that positions grid items along the inline, or row, axis. This means that it positions items from left to right across the web page. This property is declared on grid containers.

justify-items accepts these values:

start — aligns grid items to the left side of the grid area
end — aligns grid items to the right side of the grid area
center — aligns grid items to the center of the grid area
stretch — stretches all items to fill the grid area
There are several other values that justify-items accepts, which you can read about on the [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Justifying_Items_on_the_Inline_or_Row_Axis) Network. The definitions for these values can also be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items#Values). It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

<main>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</main>

main {
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-items: center;
}

In the example above, we use justify-items to adjust the positioning of some elements on this web page.

There is a grid container with three columns that are each 400 pixels wide.
The container has three grid items that do not have a specified width.
Without setting the justify-items property, these elements will span the width of the column they are in (400 pixels).
By setting the justify-items property to center, the .card <div>s will be centered inside of their columns. They will only be as wide as necessary to contain their content (the words Card 1, etc).
If we specify a width for the .card elements, they will not stretch the width of their column.

**Justify Content
In the previous exercise, we learned how to position elements within their columns. In this exercise, we will learn how to position a grid within its parent element.

We can use justify-content to position the entire grid along the row axis. This property is declared on grid containers.

It accepts these values:

start — aligns the grid to the left side of the grid container
end — aligns the grid to the right side of the grid container
center — centers the grid horizontally in the grid container
stretch — stretches the grid items to increase the size of the grid to expand horizontally across the container
space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element
space-between — includes an equal amount of space between grid items and no space at either end
space-evenly — places an even amount of space between grid items and at either end
There are several other values that justify-content accepts, which you can read about on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Aligning_the_grid_tracks_on_the_block_or_column_axis). The definitions for these values can also be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#Values). It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

<main>
  <div class="left">Left</div>
  <div class="right">Right</div>
</main>

main {
  display: grid;
  width: 1000px;
  grid-template-columns: 300px 300px;
  grid-template-areas: "left right"; 
  justify-content: center;
}

In the example above, the grid container is 1000 pixels wide, but we only specified two columns that are 300 pixels each. This will leave 400 pixels of unused space in the grid container.
justify-content: center; positions the columns in the center of the grid, leaving 200 pixels on the right and 200 pixels on the left of the grid.

Align Items
In the previous two exercises, we learned how to position grid items and grid columns from left to right across the page. Now we’ll learn how to position grid items from top to bottom!

align-items is a property that positions grid items along the block, or column axis. This means that it positions items from top to bottom. This property is declared on grid containers.

align-items accepts these values:

start — aligns grid items to the top side of the grid area
end — aligns grid items to the bottom side of the grid area
center — aligns grid items to the center of the grid area
stretch — stretches all items to fill the grid area
There are several other values that align-items accepts, which you can read about on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Aligning_items_on_the_block_or_column_Axis). The definitions for these values can also be found in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items#values). It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

<main>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</main>

main {
  display: grid;
  grid-template-rows: repeat(3, 400px);
  align-items: center;
}

In the example above, we use align-items to adjust the positioning of some elements on this web page.

There is a grid container with three rows that are 400 pixels tall.
The container has three grid items that do not have a specified width.
Without setting the align-items property, these elements will span the height of the row they are in (400 pixels).
By setting the align-items property to center, the .card <div>s will be centered vertically inside of their rows. They will only be as tall as necessary to contain their content (the words Card 1, etc).
If we specify a height for the .card elements, they will not stretch the height of their row even if align-items: stretch; is set.

**Align Content
In the previous exercise, we positioned grid items within their rows. align-content positions the rows along the column axis, or from top to bottom, and is declared on grid containers.

It accepts these positional values:

start — aligns the grid to the top of the grid container
end — aligns the grid to the bottom of the grid container
center — centers the grid vertically in the grid container
stretch — stretches the grid items to increase the size of the grid to expand vertically across the container
space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element
space-between — includes an equal amount of space between grid items and no space at either end
space-evenly — places an even amount of space between grid items and at either end
There are several other values that align-content accepts, which you can read about on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

<main>
  <div class="top">Top</div>
  <div class="bottom">Bottom</div>
</main>

main {
  display: grid;
  height: 600px;
  grid-template-rows: 200px 200px;
  grid-template-areas: "top"
                       "bottom"; 
  align-content: center;
}

In the example above, the grid container is 600 pixels tall, but we only specified two rows that are 200 pixels each. This will leave 200 pixels of unused space in the grid container.
align-content: center; positions the rows in the center of the grid, leaving 100 pixels at the top and 100 pixels at the bottom of the grid.

**Justify Self and Align Self
The justify-items and align-items properties specify how all grid items contained within a single container will position themselves along the row and column axes, respectively.

justify-self specifies how an individual element should position itself with respect to the row axis. This property will override justify-items for any item on which it is declared.

align-self specifies how an individual element should position itself with respect to the column axis. This property will override align-items for any item on which it is declared.

These properties are declared on grid items. They both accept these four properties: 

start — positions grid items on the left side/top of the grid area
end — positions grid items on the right side/bottom of the grid area
center — positions grid items on the center of the grid area
stretch — positions grid items to fill the grid area (default)
align-self and justify-self accept the same values as align-items and justify-items. You can read about these values on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.
Grid Auto Rows and Grid Auto Columns
CSS Grid provides two properties to specify the size of grid tracks added implicitly: grid-auto-rows and grid-auto-columns. These properties are declared on grid containers.

grid-auto-rows specifies the height of implicitly added grid rows. grid-auto-columns specifies the width of implicitly added grid columns.

grid-auto-rows and grid-auto-columns accept the same values as their explicit counterparts, grid-template-rows and grid-template-columns:

pixels (px)
percentages (%)
fractions (fr)
the repeat() function
<body>
  <div>Part 1</div>   
  <div>Part 2</div>
  <div>Part 3</div>
  <div>Part 4</div>
  <div>Part 5</div>
</body>

body {
  display: grid;
  grid: repeat(2, 100px) / repeat(2, 150px); 
  grid-auto-rows: 50px;
}

In the example above, there are 5 <div>s. However, in the body ruleset, we only specify a 2-row, 2-column grid — four grid cells.

The fifth <div> will be added to an implicit row that will be 50 pixels tall.

If we did not specify grid-auto-rows, the rows would be auto-adjusted to the height of the content of the grid items.

**Grid Auto Flow
In addition to setting the dimensions of implicitly-added rows and columns, we can specify the order in which they are rendered.

grid-auto-flow specifies whether new elements should be added to rows or columns, and is declared on grid containers.

grid-auto-flow accepts these values:

row — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default)
column — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements
dense — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added
You can pair row or column with dense, like this: grid-auto-flow: row dense;.