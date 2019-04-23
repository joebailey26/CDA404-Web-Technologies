# Web Technologies Assessment

## Introduction

This is a report on the production of a website for Assessment 2 in CDA 404 Web Technologies at Southampton Solent University.

The website can be accessed live [here](https://web-tech-report.firebaseapp.com/).

The GitHub repository for this website can be accessed [here](https://github.com/joebailey26/CDA404-Web-Technologies/tree/master/Report).

## Background

A lot of people, particularly teenagers, are interested in Conspiracy Theories. However, they can only source information on either YouTube or Wikipedia.
YouTube delivers it's content in the form of videos which are unsuitable for those who are deaf, or even people that just like to consume their content by reading.
However, Wikipedia then goes into too much depth. There is too large a chunk of information to read. The website also features comments for people to discuss current and past conspiracies with others from around the world.

Conspiracy? aims to fill the gap in the market by providing concise, accurate information that users can read in a lunch break.

## Client Requirements

1. A website to solve a problem
2. Publicize a problem
3. At least 4 pages
4. Responsive
5. Use GIT
6. Can't use visual editors or HTML Frameworks
7. JavaScript Elements

## Aims & Objectives

1. Learn Sass
2. Practise Figma
3. Learn Node.js
4. Learn Firebase
5. Learn VuePress
6. Learn how to use Web Components
7. Learn Visual Studio Code

## Methodology

1. The first step of any project is to outline the aims and requirements. I have done this by noting down the aims and requirements in this documentation.
2. Wire Frames are then created to get a visual idea for the website. I used [Wireframe.cc](https://wireframe.cc) for this which you can view further into this documentation.
3. After Wire Frames have been created Medium and High Fidelity mockups are created using a program such as Adobe XD, Sketch, or Figma. I used Figma. Because this is a small project I only created Medium Fidelity Mockups.
4. Feedback is then received on any mockups which are then redrawn taking into account the feedback. I asked my friends and family what they thought and they didn't think anything needed changing about my mockups.
5. Development of the site then begins. Development follows closely to the design spec and programs such as Figma even provide the CSS needed for some elements. I built the main template of the website first, the header and footer, then added content to the pages. I left functionality till last as this was the trickiest step.
6. Once development has been completed a series of tests are performed on the application to ensure that it works as required. Some of these tests can now be automated using tools such as Gulp and Grunt however they were outside the scope of this project. I used Lighthouse which is built in to Chrome.
7. The website is then tested on Chrome, Firefox, Edge, and Safari to make sure that all features worked as expected.
8. The application is then made live.

## Wire Frames

![Mobile Wireframe](https://web-tech-report.firebaseapp.com/assets/images/mobile-wireframe.jpg)

![Desktop Wireframe](https://web-tech-report.firebaseapp.com/assets/images/desktop-wireframe.jpg)

As the website is primarly aimed at teenagers the website will take a mobile first approach. Most teenagers consume content on their phone, therefore the website needs to work well and look good on the phone. The website will use elements of Material Design to mimic the look of a native application (something that may come later in the Software Development Lifecycle).

The Homepage will be a landing page to introduce new users to the site. There will then be a News page and Contact Page. Each individual news article will have it's own page.

## Color Choices

As I was mimicking the Android App design style I used the [Material Design Color Tool](https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=616161&secondary.color=76FF03). I opted for a dark primary color with the contrasting green as conspiracies are usually shady and talked about in hushed tones, the dark color makes the user feel safe on the website. The green was chosen as it represents the color of an alien, a wide-spread conspiracy.

![Colors](https://web-tech-report.firebaseapp.com/assets/images/Color-1.jpg)

![Colors](https://web-tech-report.firebaseapp.com/assets/images/Color-2.jpg)

This tool also takes into account accessibility which was helpful when creating my mockups because I could ensure that the website could be accessed by as many people as possible. This is discussed further in the Accessibility section of this report.

![Accesibility-Colors](https://web-tech-report.firebaseapp.com/assets/images/Color-3.jpg)

## Initial Designs

I took a mobile first approach to my designs. I used Figma to create them which went very well. I then asked my friends and family about the designs and they found no fault with them.

### Mobile Designs

![Mobile](https://web-tech-report.firebaseapp.com/assets/images/0001.jpg)

![Mobile](https://web-tech-report.firebaseapp.com/assets/images/0002.jpg)

![Mobile](https://web-tech-report.firebaseapp.com/assets/images/0003.jpg)

![Mobile](https://web-tech-report.firebaseapp.com/assets/images/0004.jpg)

![Mobile](https://web-tech-report.firebaseapp.com/assets/images/0005.jpg)

### Desktop Designs

![Desktop](https://web-tech-report.firebaseapp.com/assets/images/0006.jpg)

![Desktop](https://web-tech-report.firebaseapp.com/assets/images/0007.jpg)

![Desktop](https://web-tech-report.firebaseapp.com/assets/images/0008.jpg)

![Desktop](https://web-tech-report.firebaseapp.com/assets/images/0009.jpg)

![Desktop](https://web-tech-report.firebaseapp.com/assets/images/0010.jpg)

### Key changes from Wire Frames

After making my very simple wireframes I decided I wanted to mimic the Android App UI. The initial designs include a lot more content than the wireframes as I find it easier to visualize with that style of design rather than wire frames.

## Production of site

Normally I would use PHP for all my pages so that I don't have to copy and paste similar code in the head and in the footer. I can just use:
`<?php include 'file.html';?>`
However, due to this report being handed in via a ZIP file and me wanting to learn more about Firebase (which does not support PHP), I decided to use try to use Node.js, a similar language that takes out the step of waiting for a response from the server. I wanted to create a Node.js script for emailing responses made from the form and for displaying the pages on the site. After spending a day trying to set Node.js up with Google Cloud and Firebase hosting and functions I decided that for this project it was not worth it and revert back to plain HTML, CSS, and JavaScript. If the website ever needed to go live it can use PHP which is readily available on every hosting package out there. Node.js, however, is not and requires a VPS and lengthy setup time as a lot of Node.js deals with routing and setting up a 'serverless server'.

I developed the website desktop first rather than like my designs which I created mobile first. The reason for this is that I find it easier to see what I'm doing on a bigger screen and only have to make minor CSS changes for mobile versions of sites.

I used Sass Partials in order to seperate out my CSS so I knew what I was changing. This really helped my development of the site as it kept CSS concise. I installed the CLI fo Sass too so didn't have to worry about compiling the code manually. I also used Sass variables and nested CSS rules.

I created the HTML first, then addded styling, and finally added JavaScript to bring the website together. This can be seen by my regular GIT commits.

I regularly commited the code using GIT so that I could go back if I made any mistakes. This proved useful when testing out Node.js as I decided in the end that I did not want to use it.

I had the intention of offering Form Validation using JavaScript, however, upon checking [Can I Use](https://caniuse.com/#feat=form-validation) it is clear that all up-to-date browsers support the HTML5 feature.

I added an App Drawer which is shown and hidden on a button press using JavaScript to add a class of visible and not-visible. This is animated with CSS Transitions.

I added a counter to my form to indicate how many characters a user could type into the body of their enquiry.

As a further project I made the documentation into a static website using VuePress and Firebase.

Each News Article features comments that are stored in seperate databases using FireBase so that users can interact with one another to discuss the conspiracy.

The homepage features an animation of the logo opening and closing it's eye. This is done using JavaScript.

### Key changes from Initial Designs

Whilst creating the site I changed the page background to #373737 rather than #212121 because I hadn't realised that this was incorrect in my Figma designs. #373737 was the correct Dark Primary Color as outlined in the Color Choices section of this report. Some margins were changed as it is easier to comprehend objects when they are live in the browser. I also added author and time information to each article. I then created a 404 page which I had not done in my design phase.

## SEO

I included a favicon and all related favicons for various platforms such as Mac OS and Android Chrome. I included Open Graph Meta Data on all pages as well as individual titles and descriptions. I added a Robots.txt file to the root of my website to help crawlers navigate my site.

## Accessibility

As well as making sure that the colors used provided enough contrast I also made sure that the site passed all 46 of Lighthouse's Accessibility Checks. Because the website is fairly simple few changes were needed. I added some alt attributes to images and made sure links had discernible names for screen-readers. I also changed the label colors on the Contact page.

The website uses HTML5 components which make it easier for users using screen-readers to navigate around the site as they are presented with key information first.

## GDPR

The only data obtained via the website is through the contact form. As part of the contact form users have to explicitly agree to their data being possessed in order for their enquiry to be responded to.

A comprehensive privacy policy has been created which can be accessed in the footer of any page.

The site is secured using SSL which is provided by Firebase hosting. This encrypts the data sent to and from the website meaning that any information that users enter into the site is safe.

## Distance Selling

This site does not sell any products or services. It merely distributes information for users to read. Therefore, it does not need to confrom to the [Online Distance and Selling Act](https://www.gov.uk/online-and-distance-selling-for-businesses) set out by the UK Government.

## Lighthouse Tests

I ran Lighthouse tests which can be accesssed via Chrome Dev Tools on my website to see if I could do anything better. There wasn't much I could do in terms of speeding up the site as it is hosted with Firebase, however it did remind me to add alt tags to my images.

## Cross-browser Testing

When I tested the website in Firefox I found that invalid form entries had a red border. This clashed with the green border already in place. I then changed this using CSS.

I tested the website using Edge but no changes were needed.

I tested the website using Safari by using a Virtual Machine. No changes were noticed.

## Evaluation

Overall I have experimented with the technologies I wanted to and have met the clients requirements. I have created an 8 page website using HTML, Sass, JavaScript. This project has been a learning experience as outlined below.

### What I've learnt

1. Node.js is very complicated and very different from vanilla JavaScript. It requires you to setup a router to serve a website. For this website PHP would have been a lot better solution as it is a lot easier to implement and has a lot more documentation accompanying it. For example including HTML content from other files requires one line of PHP. Node.js requires you to set up an app, server, plus the implementation with Google Cloud and Firebase to host it as it is not readily available on many hosting packages makes it an unwise choice for simple websites, however, there may be more scope for complicated web apps where PHP does not suffice due to having to wait for a response from the server.
2. Whilst building this website I looked into Vue, Angular, and React. They aren't traditional JavaScript, and they don't enhance it like JQuery, they're more suited for building applications that can be accessed by a web browser rather than for running on a device.
3. I have learnt how to deploy my website to firebase using the CLI interface.
4. I've learnt how to use GIT on the command line and how to push my repository to GitHub.
5. I've learnt Sass which is a great tool for speeding up CSS development.
6. I've practised my design skills using Figma, adding to my current skillset of managing projects from design to implementation to testing.
7. I learned how to use VuePress to host my documentation on Firebase. I couldn't find a way to change the distribution folder when building VuePress which means the resulting URL looks quite ugly and would be hard to remember when running VuePress in a Sub Directory like I am doing.
8. Before this project I had been using Adobe Dreamweaver almost exclusively for coding. I'd been using it in the developer mode, so without the visual interface. It was great because I could push my websites live and to my testing server, and could use GIT. Using Visual Studio Code I've come to understand that it can recognize a lot more different types of code than Dreamweaver can, however the interface feels clunky, unrefined, and many of it's features are only enabled by extensions and not out-of-the-box. I will try Atom and Sublime Text next.