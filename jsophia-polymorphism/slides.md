---
# You can also start simply with 'default'
theme: unicorn
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: 
# some information about your slides (markdown enabled)
title: Welcome to JSophia 25
info: |
  ## JSophia presentation for participants
  Learn more at [jsophia.com](https://jsophia.com)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Welcome to First JSophia session 25

JSophia organises sessions for JS community knowledge sharing

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Who I am ?

Olfa Arfani
Full stack developper and move to cloud specialized

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
transition: slide-up
---

# JS polymorphism introduction
Polymorphism is when calling same method in different objects, with different behaviours.
It's the fact of making a noise of a dog and different meaw for a cat.
It's closely linked to inheritance


---
transition: slide-up
---

# Types of Polymorphism in JavaScript
## Method Override
To redefine a method in a child class
Example : Dog class redefine method speak() and result is 'le chien aboie'
1- Create parent class
First is to define parent class, in this example `Animal` which contains method speak()
It's a generic method which just define a noise

2- Define children classes
 In order to define specific behaviour
3- Redefine method
4- Usage
5- Execution and results

- Utilisation de `typeof`
- Problèmes avec `instanceof`
- Erreurs liées à `constructor`
- Valeurs falsy en JavaScript
- Performance impact

## Ad Hoc polymorphism (Overloading)
It's the way to use operator with different types, which leads to different behaviours. We can take the example of concatenation.
## Parameters polymorphism
```
const Leo= [‘Leo’, ‘Kim’, 4, false];
const Ann {
 firstName: “Leo”,
 lastName: “”,
 Age: 4,
 Adult: false}
Output …
Array, VS List
In this example JS does not distiguish between type number or string
```

---
transition: slide-up
level: 2
---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel, [learn more](https://sli.dev/guide/ui#navigation-bar)

## Keyboard Shortcuts

|                                                     |                             |
| --------------------------------------------------- | --------------------------- |
| <kbd>right</kbd> / <kbd>space</kbd>                 | next animation or slide     |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd>                                       | previous slide              |
| <kbd>down</kbd>                                     | next slide                  |

<!-- https://sli.dev/guide/animations.html#click-animation -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
  alt=""
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>

---
layout: two-cols
layoutClass: gap-16
---

# Table of contents

You can use the `Toc` component to generate a table of contents for your slides:

```html
<Toc minDepth="1" maxDepth="1" />
```

::right::

<Toc text-sm minDepth="1" maxDepth="2" />

---
layout: image-right
image: https://cover.sli.dev
---

# Code

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

<arrow v-click="[4, 5]" x1="350" y1="310" x2="195" y2="334" color="#953" width="2" arrowSize="1" />

<!-- This allow you to embed external code blocks -->
<<< @/snippets/external.ts#snippet

