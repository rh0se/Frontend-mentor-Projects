# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [FontAwesome](https://fontawesome.com/) - For social media icons



### What I learned

I learned about regex and form validation with html and javascript. Also learnt how to use the picture element to build responsive images.


```html
<picture> <!-- used the picture and source elements with the img tag to display different images for mobile and desktop view-->
    <source media="(min-width:768px)" srcset="./images/bg-curve-desktop.svg"></source>
  <img src="./images/bg-curve-mobile.svg" alt="">
</picture>
```
```css
 img {
            width: 16em;
            filter: brightness(0) invert(1); /* First, brightness(0) makes all image black, except transparent parts, which remain transparent.Then, invert(1) makes the black parts white. https://stackoverflow.com/questions/24224112/css-filter-make-color-image-with-transparency-white */
        }
```


### Continued development
continue to develop my javascript skills.


### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [StackOverFlow](https://stackoverflow.com/questions/24224112/css-filter-make-color-image-with-transparency-white) help me in changing the color of the the logo.
First, brightness(0) makes all image black, except transparent parts, which remain transparent.Then, invert(1) makes the black parts white.  

## Author

- Linkedin - [Rhoda](https://www.linkedin.com/in/rhoda-ojetola)
- Twitter - [@NerdySimi](https://twitter.com/NerdySimi)
- Frontend Mentor - [@Rhoda](https://www.frontendmentor.io/profile/rh0se)

