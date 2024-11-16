# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/public/Screenshot%202024-11-16%20173654.jpg)

### Links

- Solution URL: [](https://github.com/Jenny-Eikens/contact-form)
- Live Site URL: [](https://jenny-eikens.github.io/contact-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Typescript
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

### What I learned

This is the first project where I implemented CSS grid. I tend to only use flexbox but recently I have been studying the limitations of flexbox and the advantages of grid. I have found using both flexbox as well as a grid layout very helpful for this project.
This was also the first time I had to implement form validation. It was definitely a learning curve, but I do think my solution works quite well. I learned about regular expressions and implementing different error messages depending on whether a required field was left empty or the input doesn't match the pattern. I also made sure to be as inclusive of different languages and their special characters as possible with my input fields. See the pattern I used for the name input below:

```tsx
<input
  {...register("fname", {
    required: "This field is required",
    pattern: {
      value: /^[\p{L}\p{M}\s'-]+$/u,
      message: "Name must only contain letters",
    },
  })}
  className={errors.fname && "border-warning-red"}
  type="text"
  id="fname"
  name="fname"
  aria-describedby="firstname-error"
  aria-invalid={errors.fname ? "true" : "false"}
/>
```

### Continued development

I still have a lot to learn about using grid, so I will educate myself further and implement it in future projects.
I also have a lot more learning to do regarding accessibility and the use of ARIA attributes.
I decided against using custom svgs in place of regular radio buttons / checkboxes in this project as I don't yet know enough about how to do this while maintaining accessibility. I plan on educating myself in this area and implementing it in future projects.

### Useful resources

- [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) - I used axe DevTools to run automated accessibility tests.
- [NVDA](https://www.nvaccess.org/download/) - Downloading a screen reader helped me check that my form works with assistive technologies for people with visual impairments.

## Author

- Website - [Jennifer Eikens](https://jenny-eikens.github.io/portfolio-page/#projects)
- Frontend Mentor - [@Jenny-Eikens](https://www.frontendmentor.io/profile/Jenny-Eikens)
- GitHub - [Jenny-Eikens](https://github.com/Jenny-Eikens)
