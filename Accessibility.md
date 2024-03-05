What is Digital Accessibility?
In this article, you’ll learn about digital accessibility and why it is important to incorporate aspects of digital accessibility into websites.

What is Accessibility?
Accessibility refers to designing devices, products, and environments such that individuals with disabilities or sensory impairments can successfully use the device or product.

In 1990, the United States Congress passed the Americans with Disabilities Act, commonly referred to as the ADA. The ADA mandates that public and private spaces be made accessible to individuals with disabilities that include (but are not limited to):

Sensory impairments
Cognitive impairments
Physical limitations
For example, the ADA requires on-ramps as an alternative way of accessing a staircase for individuals who may use a wheelchair. Another example is that stop lights use hues of green, yellow, or red that are readily discernible to individuals with visual impairments (like color blindness).

Although the ADA has forced public and private spaces to incorporate accessibility best practices, one frontier that has been mostly untouched has been digital accessibility, or, accessibility in digital media, like websites and mobile apps. In this article, we’ll explore digital accessibility and why it is essential on the Internet.

What is Digital Accessibility?
Although the concept of digital accessibility refers specifically to digital media, it’s not much different from the general idea of accessibility.

The requirements for accessibility in digital media are, of course, very different, however.

Some examples include (but are not limited to):

Screen readers that parse a website for a user with visual impairments
Videos on websites are closed-captioned for individuals with hearing impairments
Images include “alt text” for individuals with visual impairments
Websites must be navigable by keyboard for users who may not be able to operate a mouse (i.e., navigating using the “Tab” on a keyboard)
The examples above demonstrate only a subset of how websites or mobile apps incorporate digital accessibility. For the full list of digital accessibility guidelines, there is a global standard known as the Web Content Accessibility Guidelines 2.1 (WCAG). Per WCAG’s abstract, WCAG “covers a wide range of recommendations for making Web content more accessible.”

To learn more, visit WCAG at the following link:

Web Content Accessibility Guidelines 2.1
Why is Digital Accessibility Important?
Evolving Technology

The ADA was passed during a time where the Internet was still growing and evolving (1990). Since that time, the popularity of the Internet (and general accessibility to it) has exploded. As new technologies are invented, the methods they use to incorporate elements of accessibility will have to be revisited, perhaps even by challenging the current ADA.

Legal Ramifications

The Internet’s explosion in popularity has emphasized the accessibility of websites and other digital media. As such, it also has pushed the ADA to new limits. Should the statutes in the ADA cover digital media as well? The U.S. Department of Justice certainly thinks so:

“[T]he Department has long considered websites to be covered by Title III despite the fact that there are no specific technical requirements for websites currently in the regulation or ADA Standards”.

In the past, accessibility lawsuits focused on lack of on-ramps, lack of braille in signs, and the like. Today, accessibility lawsuits also focus on the lack of accessibility in digital media, which emphasizes the user demand behind incorporating accessibility best practices.

Capturing Total Markets

Upwards of 80% of the United States population shops online, which, naturally, was unheard of before the widespread popularity of the Internet.

For individuals with physical impairments, what might’ve been an inconvenient shopping experience in the past may now be much more convenient online. For individuals with visual or auditory impairments, however, an online shopping experience can be inconvenient if there is a lack of digital accessibility. This lack of accessibility can prevent them from shopping online. For business owners, this also represents a failure to capture the total market, demonstrating how digital accessibility, overall, is best for business.

New Jobs

The recognition that accessible web design is good for business is also reflected in the job market. Simply searching “web accessibility” on job search websites like LinkedIn or Indeed demonstrates the immense amount of job postings for developers, designers, and UI designers related to web accessibility.

Universal Design Benefits All

Earlier, you read about one example that showcases an ADA mandate: on-ramps should accompany staircases to accommodate individuals with physical impairments. The reality is that this mandate doesn’t just benefit those with physical impairments; it also benefits individuals with baby strollers, bicycles, and more.

The same is true for digital accessibility. For example, having alt tags that explain the content of images is useful to all users whenever images don’t load due to connectivity problems. Writing more semantic HTML tags and image captions also can improve your website’s standing in search engines, as they provide the search engine more information about the content that your site delivers. In short, incorporating accessibility (digital or otherwise) contributes to a universal design that ultimately benefits all, which can improve the user experience for everyone.

Conclusion
The general concept of accessibility, which previously applied mostly to physical, public, and private spaces, now applies to the digital world, thanks to the widespread popularity of a new technology: the Internet.

New technologies, litigation, business strategies, and more continue to push the definition of accessibility. Today, this definition has expanded to include digital media, like websites and mobile apps. The Internet continues to provide digital solutions to a wider audience, making it imperative for web developers to incorporate elements of digital accessibility.

Introduction to Headings
Text is used differently on the web than it is in a book. Users are often trying to navigate websites as quickly as possible.

Breaking large chunks of text into different sections that have their own headings and subheadings is essential to helping them find the content that they are looking for.

In HTML, there are six heading elements, <h1> - <h6>. The heading elements decrease in importance and size as the heading number increases. This means that an <h1> carries a higher rank than an <h6>.

Heading elements in HTML accomplish several things:

they create structure, dividing your page into groups of increasingly specific content
they create visual contrast, with lower-numbered headers like h1 displaying in a larger and more striking format
they provide navigation and contextual information to web browsers, plugins, and assistive technologies like screen readers.
As an added benefit, having a keyword in an h1 tag will typically impact search results more than having the same keyword in a p tag, because it is assumed that words used in your main heading are very important to the topic of your entire website.

Headings Hierarchy
Heading elements should be used in order and it is considered best practice not to skip heading elements when possible.

Let’s take a look at an example:

<h1>Main Site Header</h1>
<section>
  <h2>Section Header</h2>
</section>
<section>
  <h2>Section Header</h2>
  <h3>Section Sub-Header</h3>
</section>  
<footer>
  <h2>Footer Header</h2>
</footer>

In this example, we have one main site heading. This content uses the <h1> element and is assigned the highest rank as it is the most important. Note that each web page should only contain one <h1> element.

This <h1> is considered the label for the entire document and it should clearly define the purpose of the web page. After that, we use the <h2> element to assign the same level of importance to each sibling section.

This provides our users with a clean and consistent level of hierarchy when viewing our websites and also conforms to today’s web standards by providing a clear content outline.

Let’s apply what you’ve learned about headings to improve the “Creamy Chocolate Cupcakes” site.

Font Accessibility
Text Accessibility
Highly accessible websites use real text instead of images of text, use text with high contrast with its background, and choose highly legible font sizes.

Let’s dive into each of these concepts a bit more.

Real text vs text within images
Using real text instead of text within graphics provides a website with several key benefits:

screen readers can transform the text into a voice-over
users can scale or magnify the text for better legibility without losing image quality
it’s less taxing on the browser to load real text versus requesting large image assets from a server.
Contrasting colors
Text is much easier to read when there is a high level of contrast between the text and the text’s background color. According to the Web Content Accessibility Guidelines, a ratio of at least 4.5:1 should be used on all standard text sizes. This means the lighter color must have four and a half times the luminance of its paired darker color.

Readability can be preserved with less contrast for larger font sizes, 24 pixels or larger. A ratio of at least 3:1 should be used for larger text sizes.

Interested in testing a set of colors to see if they pass the WCAG’s guidelines? Head over to WebAIM and use their color contrast checker.

Font sizes
Lastly, we need to consider setting proper font sizes on our websites. The standard font size for most modern web browsers is 16 pixels. This allows users to scan your website and consume information without straining their eyes. While smaller type sizes can be used, they should be reserved for nonessential content or design aesthetic only.

Color Accessibility
When using color in our designs, it’s important to note the contrast between elements in the foreground and those in the background.

Sufficient color contrast can improve the usability of your site for users with low vision or color blindness.

For instance, using the combination of black (#000000) as a foreground color and white (#ffffff) as a background color provides maximum contrast.

While this is a fairly common color combination for text on a page, the high contrast can also cause glare that will increase strain on the user’s eyes over time.

On the other hand, using colors that are too similar, or lacking adequate contrast, can hinder users from being able to comprehend the content on the screen.

Let’s explore how users perceive colors, and how we can effectively make decisions on what colors to use to reduce issues with legibility.

Color Blindness
A user with color blindness has a reduced ability to differentiate between colors. In general, about 8% of men and 0.5% of women have a color vision deficiency.

Designing color combinations for color-blind users can enhance the overall impact it will have on everyone visiting your site.

There are many forms of color blindness. The most common is red-green color blindness, where those two colors are often indistinguishable. For instance, if a red-green colorblind user is looking at the color purple, it may appear blue as they do not perceive the red pigment.

People can also have blue-yellow color vision deficiency, and total color blindness, however, these affect a much smaller percentage of the population.

Here are some practical steps you can take to improve the color accessibility of your design:

Choosing highly contrasting colors (opposite from each other on a color wheel) will aid users with partial color blindness.
Using a color scheme with multiple shades of brightness for a single color will create contrast for users with partial or total color blindness. Think about how it would look in grayscale: light blue would still be differentiable from dark blue.
Pairing color with other forms of conveying information (text, icons, etc) is the most general solution. For example, an invalid entry in a form on a website should not just turn the entry field red, it should also display text that explains the error.
Color is a valuable tool for conveying information, but it should never be the only tool that your site uses to communicate any essential content.

Toptal has created a colorblind web page filter tool to test your designs with different types of color blindness.

Let’s take a look at some best practices of applying accessibility features to core components in design.

Best Practices
New web design trends come and go, and many times they are aesthetically appealing, but they are not always the most usable or accessible.

You now know enough principles of accessibility and usability to be able to judge if these trends will create problems for your users. Let’s reason through a few examples.

Text Overlaid on Images
White text overlaid on an image is a popular design trend. However, it doesn’t adhere to standards as the contrast is often too low. Adding a dark transparent overlay on top of the image could increase the contrast and provide better legibility.

Removing Input Labels
Another trend often seen in web design is the removal of labels above input fields, sometimes relying on placeholder text instead to identify the input field.

While this enhances the aesthetic quality of a design in some instances, it can hinder a user’s ability to identify which input they are attempting to fill out. This is particularly true for low vision users because the placeholder text is often light gray and low contrast. This also creates problems for users employing screen readers, because the form’s placeholder text is not always narrated.

Buttons and Links
There has been a trend towards flat and minimal design in recent years. This trend has improved usability in some ways, as it has encouraged designers to remove visual effects that are not contributing to the usability of their site.

However, minimalism can go too far, especially if it obscures how users should navigate the site. Visual contrast is especially important for buttons and links because these are the tools our users employ to navigate. Color alone should not be used to indicate clickability, as this will cause challenges for low vision and color-blind users.

Taking into consideration color choices, contrast, and font legibility will help you evaluate new design trends, and reduce the chance of new designs introducing accessibility barriers.

Review
Congratulations! You made the cupcake recipe site look much better! You practiced some new CSS syntax, and you learned the power of visual contrast, for both overall design, and for accessibility.

You gained some knowledge on web accessibility and how to make your websites usable for all users.

Remember, the keys to building a more visually inclusive Web are:

Using contrast so our text and colors provide better visual cues
Using correct font size so our content is legible
Creating user interfaces that are enhanced by, but not dependent on, color
Following these guidelines can increase the usability of our websites. In the next lesson, you will learn semantic HTML tags, which improve the accessibility of sites for people using a screen reader.

Introduction to Accessibility
When designing a website, it is important to keep in mind that some users access the Internet in many different ways. For example, many users with a visual impairment use screen readers to access content on the Internet.

A screen reader is a piece of software that provides an audio description of a web page’s content. A screen reader not only reads the visual content out loud, it also reads out element names and other attributes that make it easier for visually impaired users to navigate a web page.

In the early days of the Internet, many pages were saturated with graphics and flash animations. Screen readers, unfortunately, could not interpret these types of elements. As such, a person with a visual impairment might not have been able to perceive important information on a website. For this reason, the Web Accessibility Initiative (led by W3C) developed standards for making information on the Internet accessible to all.

These standards fall under a group of guidelines called ARIA, or Accessible Rich Internet Applications. These guidelines are easily implemented and make web pages accessible to a broader audience. We’ll learn how to use ARIA roles and properties in this lesson to improve access for people who are visually impaired.

In this lesson, we will cover these practices:

Semantic Elements
ARIA Roles
ARIA Properties
alt Attributes

Semantic HTML Elements
The quickest way of improving accessibility for screen readers is to use the appropriate tags for a given task.

For example, developers should wrap a navigation bar in a <header> element. Although the navigation bar could be wrapped in a <div> element with a class="header", the native semantics of a <header> element allows someone using a screen reader to understand and navigate a web page more efficiently.

<div id="header">
  <!-- Header Elements -->
</div>

In the example above, header content is wrapped in a <div> element with id="header". While this is valid HTML, an individual using a screen reader will not understand the purpose of the <div> and will have to piece the web page together as child elements are read out loud to them.

Native semantics of an element describes the element’s intended purpose. For example, the <header> element is intended to contain introductory and navigational elements such as a logo, links, or a search bar.

<header>
  <!--Header Elements-->
</header>

In the example above, the HTML will render the same exact content present in the first example. However, this example uses the correct semantic element (<header>), which allows an individual using a screen reader to easily identify the purpose of the elements inside of the header.

[Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) is a list of all the semantic HTML elements that exist.

ARIA Role
Text on a web page can communicate different types of information. Some text may make up the main content of the page, other text may describe navigation icons, still other text might describe input fields or menus. It can be challenging to place text in the context of a web page without knowing where it is positioned or the type of information it is meant to communicate.

Take a moment to think about how a screen reader would interpret the Codecademy web page you are looking at right now. It would be difficult for someone using a screen reader to understand the difference in significance between the code editor to the right and what you are currently reading.

To help add context to web page information, ARIA provides an HTML attribute called role. The value of an element’s role changes how a screen reader communicates the element.

<div id="code-editor" role="complementary">
  ...
</div>

In the example above, imagine the ... represents an exercise’s code editor — the section of the page containing the files of code you edit in an exercise. The role for the div is set to complementary. Visually, it makes sense that the information in the code editor is related to the information in the narrative (what you are reading right now). A user who uses a screen reader does not receive that visual cue.

Instead, the role="complementary" attribute and value can help a screen reader user understand that the information in the code editor is complementary (or supporting) to the information you are reading right now. It helps users of screen readers identify the relationship between the two sections of the page.

[This](https://www.w3.org/TR/html-aria/#allowed-aria-roles-states-and-properties) link has a list of acceptable ARIA roles, where you can read more about the complementary role and other roles as well.

ARIA Role: Presentation
Some HTML elements, like <ul> and <ol>, only serve to organize information on a web page. When a screen reader navigates a page, however, it reads out to the user each element’s name as it encounters them. Therefore, reading “ol“ outloud will slow down visually impaired users.

We can instruct screen readers to skip reading unnecessary elements by setting the role attribute to presentation.

<ol role="presentation">
  <li>List Item 1</li>
  <li>List Item 2</li>
</ol>

In the example above, the <ol> element is assigned a role of presentation, meaning a screen reader will not read the element’s name (“ordered list”). This is acceptable, as a user does not need to hear the element’s name (“ordered list”) to understand the content of a list.

The presentation role skips over elements and their necessary children. The <ol> and <ul> elements require <li> children. Therefore, adding role="presentation" to an <ol> tag will cause the screen reader to skip directly to the text between the <li> tags (it will not read the names of the <li> elements).

<div id="container" role="presentation">
  <p>I'm content you want to hear!</p>
</div>

In the example above, a screen reader won’t read “div” outloud, but it will read the name of the paragraph element and the content of the paragraph. This happens because the paragraph is not a necessary child of the div.

To read more about the presentation role, click [here](https://w3c.github.io/using-aria/#presentation).

ARIA Properties
ARIA properties are attributes that you can add to HTML elements. These attributes provide additional information about elements that might not be obvious to users of screen readers. Let’s explore a property called aria-label.

<img src="#" alt="A painting of the Shenandoah Valley"/>
<p>Armand Cabrera, 2010</p>

In the example above, a person looking at the web page would likely see “Armand Cabrera” below the image and use visual clues to infer that he is the artist. However, for someone using a screen reader it might not be clear what the paragraph below the image means. The property aria-label gives the screen reader additional information to read out loud to the user.

<img src="#" alt="A painting of the Shenandoah Valley"/>
<p aria-label="Artist">Armand Cabrera, 2010</p>

In the improved HTML above, a user of a screen reader will know how this paragraph relates to the image above it.

Other ARIA properties are useful in more complex websites using HTML forms, JavaScript, and other advanced tools.

For a complete list of ARIA properties, visit the following resource:

[ARIA Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

Alt Attribute
Some HTML elements have a built-in attribute called alt that works like aria-label but has additional functionality.

The alt attribute is used to describe an image (or several other elements). A screen reader will read the value of the alt attribute out loud. However, if the element cannot be visually seen — whether it is because the user is visually impaired, an incorrect source is referenced, or the page is being accessed over a slow connection — the alt attribute will be displayed in its place.

On the other hand, the value of aria-label will never be displayed on the screen and is a better choice for elements that do not support the alt attribute.

<img src="#" alt="a kitten snuggling a puppy"/>

In the example above, a screen reader will read out loud “image: a kitten snuggling a puppy” to the user. If the image doesn’t load properly, the browser will display this text as a tooltip.

When using the alt attribute, you should adhere to these conventions:

In general, the value of alt should concisely describe the image.
For images that are also <a> elements, the alt attribute should describe the source that the link targets.
If an image conveys no information (such as a decorative border), the alt attribute should be empty, but should never be omitted.
If an image is described by text near the image, do not duplicate the description in the alt attribute. Use an empty alt attribute instead.
The value of an alt attribute should be no more than 150 characters.

Review: Accessibility
Using ARIA roles and properties, alt attributes, and semantic elements in your HTML is a simple way to make your website accessible to visually-impaired Internet users.

Using semantic HTML elements whenever possible (such as <header> instead of <div id="header">) will allow screen reader users to navigate your website more efficiently.
The role attribute is used to communicate information about the role of specific elements.
role="presentation" allows a screen reader to skip markup elements that don’t directly contain useful information.
aria-label and other ARIA properties can be used to help users perceive information that is communicated visually but not through text.
The alt attribute should be added to every image element (and all other elements that support it) instead of aria-label. When used, its value should be a useful description of the image.

Setting Up and Using Screen Readers
This article explains how to set up and use a screen reader in order to think critically about the accessibility of the websites that you’re building.

Creating a good user experience requires us to think carefully about the diverse needs and devices of our users. We as designers and developers know that not everyone sees, hears, or reads content in the same way.

A screen reader is an assistive technology that is used by individuals who are blind, visually impaired, or need additional assistance navigating a website. This article will guide you through how to set up and use a screen reader in order to assess the web accessibility of various websites, including your own.

More users than you might expect are using some kind of assistive device. According to the National Institute of Health, about 1 in 30 Americans over the age of 40 will experience visual impairment. Producing accessible websites is both equitable and good for business.

The screen reader provides a text-to-speech (TTS) experience for the user to translate the information on the screen into speech, which can be heard through speakers, headphones or braille. This is why it’s extremely important to utilize semantic HTML code and appropriate WAI-ARIA attributes.

A visually impaired user will use a combination of screen reader commands and operating system commands to accomplish the many tasks a computer is capable of performing. These commands are prompted through keyboard shortcuts or mouse actions, like scrolling and clicking.

Although basic screen readers will not help blind users navigate a computer, screen readers with additional features can give individuals with visual impairments much more independence.

Screen readers can vary based on the operating system you are using. However, they can also be implemented through the browser. Please note that when using a browser’s screen reader, it’s best to turn off the operating system’s screen reader.

Screen Reader Options
Here are a few screen reader options that are free for your computer or browser.

(OS X) VoiceOver
Apple computers come with a screen reader built in, called VoiceOver. You can access it easily by pressing Command-F5. If VoiceOver is on, pressing Command-F5 turns it off.

If this is your first time opening VoiceOver, you can listen to the Quick Start Tutorial, which will give you an interactive tour of VoiceOver navigation and interaction basics.

The benefit to VoiceOver is that it is already installed and ready to use on your Apple computer and also works with websites.

(Windows) NVDA
NVDA (NonVisual Desktop Access) is a free screen reader for Windows, which allows blind and vision-impaired people to use computers. It reads the text on the screen in a computerized voice.

The user can easily control what is read to them by moving the cursor to the relevant area of text with a mouse or using the arrows on the keyboard. NVDA provides the key to education and employment for many blind people. It also provides access to social networking, online shopping, banking, and news. NVDA can also convert the text into braille if the computer user owns a device called a “braille display”. NVDA can be installed on your Windows machine or used on a USB stick. This screen reader is unique because it’s an open source program, which means developers can contribute to improving this software.

(Google Chrome) ChromeVox
ChromeVox is built using only web technologies like HTML5, CSS, and Javascript. ChromeVox (Classic) was designed from the start to enable unprecedented access to modern web apps, including those that utilize W3C ARIA (Access to Rich Internet Applications) to provide a rich, desktop-like experience.

This enables visually impaired users to experience the power of web applications while also giving developers a way to verify the accessibility of their web applications.

ChromeVox can be easily added to your Chrome browser as an extension through the Chrome Web Store. Once installed, you can use these keyboard shortcuts. If you want to change the keyboard shortcuts, just click the browser extension icon, then click “options”.

Testing Accessibility
Now, let’s test one of them out.

Choose one of the screen readers listed above that fits your operating system or browser to test websites such as NY Times, Facebook, GitHub, and Dribbble. Getting the full experience through the screen reader will help you understand how it’s used and the difficulties the visually impaired experience when a website lacks accessibility.

Be sure to mouse and click around or use your keyboard to have the screen reader focus on specific areas.

Starting with the New York Times and moving down the list, let’s check out the screen reader experience.

New York Times
Click on the main section of the page
Tab through and notice the focus is on the headlines and the comments
Hit enter when you land on comments
Tab through this experience
Was it easy to read the comments on the article or were you prompted to read about the article first? How could this experience be improved?

Facebook
Tab through the content to get to the main section of the page
On your keyboard click “Alt + /”
Tab through the “jump to” menu to get to the news feed
GitHub
GitHub is a development platform that provides tools for people to share their code with others, make edits to shared projects, and keep track of all versions and changes.

Click on a repository to go to it’s landing page.
If there isn’t a repository you want to explore, try looking at Express, a common JavaScript framework that we teach at Codecademy
Tab through until you reach the section that tells you how many commits, branches, releases and contributors the repository contains
Notice how these are considered “list items”
Tab once more until you can see the list of languages used
Notice how this is considered an ordered list and lists each tab by number
What did you think about this experience? Did it lack any critical information? Is there anything you think GitHub needs to consider or improve?

Dribbble
Dribble is a design-focused social network that allows designers to share their own work and explore the work of others.

On the landing page tab through until you reach the first item
Notice how the screen reader reads the numbers without the description of what the number correlates to
On the top right under the black navigation bar, choose a different display layout
Allow the screen reader to read through the posts in the different layouts
What did you think about the experience when you changed the layout? Was it easier to follow along on a larger layout vs. another?

Your Own Website
If you have ever made your own website, maybe for a course on Codecademy, or for your personal portfolio, try visiting it with a screen reader now. What is or is not possible for users visiting your site using a screen reader?

Conclusion
Of the websites that you visited, which one was easier or more accessible to visit? What issues did you face that you think would get better with more practice using a screen reader, and what issues were problems with the designs of the sites that you visited?

After considering which one was easier, check out this accessibility guide from Facebook to read about how to get the most out of Facebook as a user with disabilities. You can also look at the Facebook Accessibility page to get news and updates from the Facebook Accessibility team.

As you can see, it can be somewhat challenging to use a screen reader. That’s why it’s our job as designers to make the web an accessible place for everyone. Next time you design a website, keep these tests and your experience in mind.


