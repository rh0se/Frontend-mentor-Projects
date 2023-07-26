# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://fonts.google.com/specimen/Karla) - For font styles

### What I learned

learnt how to use css grid and became more comfortable with SCSS


```css
.container {
    min-height: 444px;
    width: min(85%, 650px);
    display: grid;
    grid-auto-flow: row;
    grid-row: auto;

    @media (min-width: 600px){
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 200px auto;
    }
  
}
```


### Continued development

i will continue development of responsive websites with css grid.

### Useful resources

- [W3 schools](https://www.w3schools.com/sass/) - This helped me in using SCSS. 
- [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids) - This is an amazing article which helped me finally understand CSS Grid. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@rh0se](https://www.frontendmentor.io/profile/rh0se)
- Twitter - [@NerdySimi](https://twitter.com/NerdySimi)


## Acknowledgments
Myself
