---
# You can also start simply with 'default'
theme: unicorn
background: 
# some information about your slides (markdown enabled)
title: Welcome to this Javascript session
info: |
  ## JSsophia presentation for participants
  Learn more at [jsophia.com](https://jsophia.com)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true

---


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

--- 
layout: two-cols
layoutClass: gap-16
---



<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

# Who I am ?


Olfa Arfani

Full stack developper and move to cloud specialized

- Link to GitHub : [https://github.com/olfa-arfani](https://github.com/olfa-arfani)
- Link to LinkedIn : [https://linkedin.com/in/olfaarfani](https://linkedin.com/in/olfaarfani)
<!-- - Link to Website : [https://www.olfaarfani.com](https://www.olfaarfani.com) -->


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->
--- 
layout: two-cols
layoutClass: gap-16
---

# Table of contents

<Toc text-sm minDepth="1" maxDepth="2" />
---
transition: slide-up
layout: image-left
image: /swimming-cat.gif
class: cat-on-the-left
---

# JS polymorphism introduction


What is polymorphism ?
- Polymorphism is when calling same method in different objects and getting different behaviours.
- It's the fact of making a noise of a dog and different meaw for a cat.
- It's closely linked to inheritance


---
transition: slide-up
---

# Types of Polymorphism in JavaScript

---
transition: slide-up
layout: image-right
image: /swimming-dog.gif
class: dog-on-the-right
---
## Method Override

To redefine a method in a child class
Example : Dog class redefine method speak() and result is 'le chien aboie'

- Create parent class
  First is to define parent class, in this example `Animal` which contains method speak()
  It's a generic method which just define a noise
- Define children classes : In order to define specific behaviour
- Redefine method
- Usage and invoke the method
- Execution and results

---
transition: slide-up
---
## Ad Hoc polymorphism (Overloading)

It's the way to use operator with different types, which leads to different behaviours. We can take the example of concatenation.

```js {all} twoslash
10 + 10; // will print 20
 'I am' + ' ' + '5 years old' // will print I am 5 years old
```
In this example operator + treats type number and type string differently

---
transition: slide-up
---
## Parameteric polymorphism

In this example of parameters polymorphism, Javascript does not distiguish between type number or string.
Parametric polymorphism is the way to treat different types similarly

```js {all|5|7|7-8|10|all} twoslash
// More at https://shiki.style/packages/twoslash
const Leo = ['Leo', 'Kim', 4, false];
console.log("Leo: "+Leo);
const Ann = {
    firstName: "Leo",
    lastName: "",
    Age: 4,
    Adult: false};
console.log(JSON.stringify(Ann, 2));
```

--- #9
transition: slide-up
---

# Some other examples

Use code snippets and get the highlighting directly, and even types hover!

```js {all|5|7|7-8|10|all} twoslash
// More at https://shiki.style/packages/twoslash

function cumulateShapes(gShapes){
    return gShapes.reduce((sum, shape) => {
        if (shape instanceof GeometricShape){
            console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
            console.log(
              `Shape: ${shape.toString()} - perimeter: ${shape.perimeter()}`
            );
            return sum + shape.area();
          }
          throw Error("Bad argument shape.");
    },0);
}

const shapes = [new EqTriangle(3,5), new Rectangle(2,3)];

console.log(cumulateShapes(shapes));
```


---
transition: slide-up
---

# What we need to avoid (!)

---
transition: slide-up
---

# Performance impact considerations
- Monomorphic functions remains faster in execution
- It's worth to use polymorphism for code reuse

--- 
transition: slide-up
image: /session-stack.jpg
layout: image-right
class: session-stack-img-right
---

# Session stack study

Some opensource tools live demo for session record and replay: https://www.rrweb.io/#demos
What's SessionStack AI enhanced tool?

## Browser state changes

Sample code snippet
```js {all|5|7|7-8|10|all} twoslash
console.log("Browser state change with url visiting demo");
```

## Segment filters

Sample code snippet
```js {all|5|7|7-8|10|all} twoslash
console.log("HTML state change demo");
```
--- 
transition: slide-up
image: /session-stack.jpg
layout: image-left
class: session-stack-img-right
---

### Dead click 
Dead clicks are clicks or taps that do not affect the page with changes such as:

- DOM events
- URL changes
- Console Log Events

Which indicates poor UX

Sample code snippet
```js {all|5|7|7-8|10|all} twoslash
console.log("Dead click demo");
```
--- 
transition: slide-up
image: /session-stack.jpg
layout: image-left
class: session-stack-img-right
---

### Rage click

A rage click occurs when a user performs multiple quick clicks on the same element in a row. Among the possible explanations are:

- The user does not understand which is a clickable element 
- Buttons, links, and icons do not function properly
- Unable to click because of the invisible overlay above everything

Sample code snippet
```js {all|5|7|7-8|10|all} twoslash
console.log("Rage click demo");
```

### User input

- Option CSS selector
- Option "Text" and "Text contains"

---
transition: slide-up
---

### Custom events

Sample code snippet
```js {all|5|7|7-8|10|all} twoslash
console.log("Add to cart evt 'Déposer une annonce Le bon coin' demo")
```


---
transition: slide-up
---

# Conclusion