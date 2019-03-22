# Web Technologies Assessment

## Introduction

This is a report on the production of a website for assessment 2 in CDA 404 Web Technologies at Southampton Solent University.

## Background

A lot of people, particularly teenagers are interested in Conspiracy Theories. However, the only source of information they can find is either YouTube or Wikipedia.
YouTube delivers it's content in the forms of a video which is unsuitable to those who are deaf, or even people that just like to consume their content by reading.
However, Wikipedia then goes into too much depth. There is too large a chunk of information to read.

Conspiracy? News aims to fill the gap in the market by providing concise, accurate information that users can read in a lunch break. This way it is a deemed as a personal experience for users who will then be more likely to return to the site.

## Client Requirements

1. A website to solve a problem
2. Publicize a problem
3. At least 4 pages
4. Responsive
5. Use GIT
6. Can't use visual editors or HTML Frameworks

## Aims & Objectives

1. Learn Sass
2. Practise Figma
3. Learn Node.js
4. Learn Firebase
5. Learn VuePress
6. Learn how to use Web Components
7. Learn Visual Studio Code

## Methodology

1. The first step of any project is to outline the aims and requirements which have been done in this documentation.
2. Wire Frames are then created to get a visual idea for the website. I used [Wireframe.cc](https://wireframe.cc) for this.
3. After Wire Frames have been created Medium and High Fidelity mockups are created using a program such as Adobe XD, Sketch, or Figma. I used Figma. because this is a small project I only created Medium Fidelity Mockups.
4. Feedback is then received on any mockups which are then redrawn taking into account the feedback. I asked my friends and family what they thought and they didn't think anything needed changing about my mockups.
5. Development of the site then begins.
6. Once development has been completed a series of tests are performed on the application to ensure that it works as required. Some of these tests can now be automated using tools such as Gulp and Grunt however they were outside the scope of this project. I used Lighthouse which is built in to Chrome.
7. The application is then made live.

## Wire Frames

![Mobile Wireframe](https://web-tech-report.firebaseapp.com/assets/images/mobile-wireframe.jpg)

![Desktop Wireframe](https://web-tech-report.firebaseapp.com/assets/images/desktop-wireframe.jpg)

As the website is primarly aimed at teenagers the website will take a mobile first approach. Most teenagers consume content on their phone, therefore the website needs to work well and look good on the phone. The website will use elements of Material Design to mimic the look of a native application (something that may come later in the Software Development Lifecycle).

The Homepage will be a landing page to introduce new users to the site. There will then be a News page and Contact Page. Each individual News Article will have it's own page.

## Color Choices

As I was mimicking the Android App design style I used the [Material Design Color Tool](https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=616161&secondary.color=76FF03).

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
However, due to this report being handed in via a ZIP file and me wanting to learn more about Firebase (which does not support PHP), I decided to use Node.js which is supposed to be a competitor. I wanted to create a Node.js script for emailing responses made from the form and for displaying the pages on the site. After spending a day trying to get it to play nice with Firebase I decided to give up and revert back to plain HTML, CSS, and JavaScript. If the website ever needed to go live it can use PHP which is readily available on every hosting package out there. Node.js, however, is not and requires a VPS.

I developed the website desktop first rather than like my designs which I created mobile first. The reason for this is that I find it easier to see what I'm doing on a bigger screen and only have to make minor CSS changes for mobile versions of sites.

I used Sass Partials in order to seperate out my CSS so I knew what I was changing. This really helped my development of the site as it kept CSS concise. I installed the CLI fo Sass too so didn't have to worry about compiling the code manually.

I created the HTML first, then addded styling, and finally added JavaScript to bring the website together. This can be seen by my regular GIT commits.

I regularly commited the code using GIT so that I could go back if I made any mistakes. This proved useful when testing out Node.js as I decided in the end that I did not want to use it.

As a further project I made the docs into a static website using VuePress.

### Key changes from Initial Designs

Whilst creating the site I changed the page background to #373737 rather than #212121 because I hadn't realised that this was incorrect in my Figma designs. #373737 was the correct Dark Primary Color as outlined in the Color Choices section of this report.

## Accessibility

As well as making sure that the colors used provided enough contrast I also made sure that the site passed all 46 of Lighthouse's Accessibility Checks. Because the website is fairly simple no changes were needed and it is accessible already as the site follows the same visual structure as the DOM and it is mostly made up of text.

## GDPR

The only data obtained via the website is through the contact form. As part of the contact form users have to explicitly agree to their data being possessed in order for their enquiry to be responded to.

A comprehensive privacy policy has been created which can be accessed in the footer of any page.

The site is secured using SSL which is provided by Firebase hosting. This encrypts the data sent to and from the website meaning that any information that users enter into the site is safe.

## Distance Selling

This site does not sell any products or services. It merely distributes information for users to read. Therefore, it does not need to confrom to the [Online Distance and Selling Act](https://www.gov.uk/online-and-distance-selling-for-businesses) set out by the UK Government.

## Lighthouse Tests

I ran Lighthouse tests which can be accesssed via Chrome Dev Tools on my website to see if I could do anything better. There wasn't much I could do in terms of speeding up the site as it is hosted with Firebase, however it did remind me to add alt tags to my images.

## Evaluation

Overall I have experimented with the technologies I wanted to and have met the clients requirements. I have created an 8 page website using HTML, Sass, JavaScript and Node.js. This project has been a learning experience as outlined below.

### What I've learnt

1. Node.js is not suited for simple websites as it creates an awful lot of work for something which can be completed quite eaasily with HTML, CSS, and JavaScript.
2. Node.js is not suited to running on Firebase. They are for seperate things and extremely difficult to intertwine. This problem is made worse by the relative newness of both technologies meaning that information is not readily available on them.
3. Angular, Vue, and React are infact not JavaScript. They are tools for creating web applications, emphasis on the word application. This is heavily moving away from traditional web development and platforms I think in a negative way. It's making the internet about mobile and applications and not about providing information to the largest possible audience. Applications have their place, on mobile, or programs on a PC, or games on a games console, but that doesn't mean that they need to be on the web. The web is a different thing entirely and should be kept traditional in providing information.
4. I have learnt how to deploy my website to firebase using the CLI interface.
5. I've learnt how to use GIT on the command line and how to push my repository to GitHub.
6. I've learnt Sass which is a great tool for speeding up CSS development.
7. I've practised my design skills using Figma, adding to my current skillset of managing projects from design to implementation to testing.
8. I learned how to use VuePress to host my documentation on Firebase. VuePress can run on Firebase as it creates static files, however it isn't ideal running in a subdirectory as the URL is fairly ugly.
9. If you want to use split your html up into components, like a reusable header and footer, PHP is a lot easier, as the infrastructure is already there. The internet is a very old place, which makes it robust. New technologies are therefore hard to use, and unsupported on a lot of systems. An example would be IPv6. Furthermore, setting up an email to be sent on a form response is easy using PHP. Node.js requires a lot more groundwork for such a simple task.
10. Before this project I had been using Adobe Dreamweaver almost exclusively for coding. I'd been using it in the developer mode, so without the visual interface. It was great because I could push my websites live and to my testing server, and could use GIT. Using Visual Studio Code I've come to understand that it can recognize a lot more different types of code than Dreamweaver can, however the interface feels clunky, unrefined, and many of it's features are only enabled by extensions and not out-of-the-box.