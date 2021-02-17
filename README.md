# My LinkedIn Background Image

**TL;DR** - I made a React app to help me easily design [my LinkedIn](https://www.linkedin.com/in/cordovaaaron/) background image.

![my linkedin background image](https://user-images.githubusercontent.com/11034792/108267031-d6c0d100-7138-11eb-83bc-cda56bc74f71.png)

To me, it's just easier to use web technologies to play around with layout and design - especially for simple things like this background image. Tweaking CSS, fiddling with HTML... this works for me :)

## Logos

I wanted to display some of the technology that I work with on a day-to-day basis. JavaScript all day baby! SVG's were my choice since they would scale regardless of what design I landed on. I found the JS and Node logos over at [seeklogo.com](https://seeklogo.com/). The React logo I simply copied over from a new project generated with _Create React App_.

**Shameless plug** - _this_ app was generated with [Create New App](https://github.com/qodesmith/create-new-app) - my custom fullstack React app generator. If you love developing with React and want fullstack options, cheggidout ;)

## Syntax Highlighting

At first, I simply typed out the code shown in my background image in VSCode and took a screenshot of that. But that was annoying for layout purposes. After searching the web a bit I landed on [prism.js](https://prismjs.com/), a library that does syntax highlighting with a number of available themes.

## Prism Themes

[Prism](https://prismjs.com/) comes with a bunch of themes and I originally went with `prism-twilight`. After searching online a bit, I found the [prism-themes](https://github.com/PrismJS/prism-themes) package and it was `prism-xonokai` for the win.

## Creating The PNG File

I tried 2 code-based methods with no luck:

- [html2canvas](https://github.com/niklasvh/html2canvas) - This _almost_ worked. It was messing up with the logo's. There was no "JS" in the JS logo and the Node logo was squished and out of place.
- getDisplayMedia (#2 in [this](https://hackernoon.com/how-to-take-screenshots-in-the-browser-using-javascript-l92k3xq7) list) - I just couldn't get any results from this. Seems like a cool idea though.

I started down the route of manually taking a screenshot and cropping in Affinity Photo (read - alternative Photoshop), but I found a much easier solution - _Chrome dev tools!_

Since the container on the page is already [the correct pixel size](https://bit.ly/3pvg8td) (1593px x 396px), I simply had to do the following:

- Open Chrome dev tools and click the "Elements" tab.
- Navigate to the container element in the DOM.
- Right-click the container and select "Capture node screenshot" from the menu.
- Profit.

All in all this was a fun little project and now I feel I have much better control over styling my LinkedIn background image.

This project was created with [Create New App](https://github.com/qodesmith/create-new-app).
