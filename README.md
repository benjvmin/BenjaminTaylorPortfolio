# Benjamin Taylor Portfolio
 Holy cow! I finally did it! After long months of wearing different hats, I am finally at a point where I can say that the first public verion of my portfolio is ready for the world. I also made a blog! I've built it with some pretty amazing open source technology. You can find a comprehensive list of features, challenges, and miscellaneous writing about my experience below.

## Features
![Vue.js](./static/README_assets/vue.svg)
## Vue.js + Vue Router
I embraced Vue.js as a step up from working with vanilla Object Oriented programming, primarily due to it's progressive nature, and ability to make manual DOM manipulation nonexistent. I started with simple string templates to grasp a solid foundation of how Vue works, and comfortably moved to single file components. I opted for starting with [Vue Cli](https://github.com/vuejs/vue-cli) because constant focus on build tooling equals lost time actually developing. I still did have to configure [scss imports](https://github.com/vuejs/vue-loader/issues/328), and it was enough to consider having my own fork of Vue.js with this ability for every project I embark on in the future. I come from a background of using SCSS and PUG templating, so leveraging these templating languages in SFC was an absolute joy. In retrospect, Vue has taught me a lot about the current wave of Javascript frameworks. It's pushed me to learn about Virtual DOM, modular programming, and the benefits of well structured Javascript files. It's also allowed me to understand how React tackles these problems in a different manner. I see myself looking into expanding Vue's functionality by learning how to build plugins and am hopeful to continue using it in the future.  

![BEM](./static/README_assets/BEM.svg)
## Styling without CSS Frameworks + BEM
Instead of opting to use a CSS framework I decided to style everything from scratch. Using a mixture of modern web standards for layout (CSS Grid!), responsive typography based on [The Elements of Typographic Style](https://www.amazon.com/Elements-Typographic-Style-Robert-Bringhurst/dp/0881791326), and simple breakpoint mixins, I was able to effectively control every aspect of my design down to the last pixel. I made sure to learn and integrate BEM to the best of my ability, and the benefits of styling components with a tight integration between SCSS & BEM are apparent. Styling components such as 
```scss

.component {
  //Block Styles Here

  &__element {
    // Block -> Element relationship using ' & ' in SCSS
  }
}
```

was highly beneficial in the organization of my markup, and was a joy to write. I also stayed away from scoped styling, as with BEM I was not worried about name collisions, & asychronously updated HTML with existing style hooks would not work, since scoped styling adds extra data attributes to achieve the "scoped" functionality. 

That being said, I did get carried away with the ability to nest styles in sass, breaking the "inception" rule a couple times. This methodology is best used when aware of the inherent downsides, as it's tendency to push you towards creating ultra specific markup for one-off styles where you are not sharing component "blocks" between each other. Due to my choice of rapidly protoying components in the browser, I couldn't accurately depict what styles I needed to duplicate until the components were almost already finished. What's the purpose of an abstraction if it can be applied after the fact, right? I couldn't help but think about the recent developments in [functional CSS](https://css-tricks.com/lets-define-exactly-atomic-css/), and why it would make incredible sense break down CSS into smaller bits that morph together to create re-usable components. Not only that, hand writing all my styles has given me the ability to appreciate how using a CSS framework would have save likely saved a lot of time and boilerplate code.

I've toyed with building a flexbox based utility grid, and it's benefits for rapidly protoying in the browser were immediately obvious. I think we are at weird place with CSS, where both approaches provide ample benefits and drawbacks, namely a disconnect between both approaches integrating well together. This begs the question that I plan on researching further, where we only extract specific values to use as utilities (display properties for example) for rapid developement while also having the ability to structure our CSS with a methodology such as BEM. Whether it's a silly idea or not, it's certainly worth exploring, and may be my next venture. 


![Vue.js](./static/README_assets/wordpress-logo.svg)
## Headless Content Management via Wordpress REST API
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Performance & Load Times 
Starting this project, I set out on a goal to ship < 1MB of data for the initial site load. I'm extremely excited to hit this mark, even without text compression. Lazy loading images played a huge part in keeping the initial payload low, and I've utilized browser APIs such as sessionStorage for data persistence. I talk more on data persistence a bit more below. Performance itself has been something that I have began to stress a lot lately, especially buttery smooth animations. Given my routine interations with native applications and performant gaming, I settle for nothing less than 60fps animations. To my delight, profiling performance of the porfolio's drop down menu animation looked pretty darn good to me!

![Performance](./static/README_assets/animations.jpg)

 Any animation that is choppy or janky gives me a quesy feeling in my stomach. I took a deep dive in this project learning how to correctly profile animation performance in Chrome Devtools, and learned how I can efficiently spot and handle bottlenecks in the perfomance panel. I stuck directly to CSS animations to keep animation work off of the main thread, and animated properties that only trigger style recalculation and compositing stages of the browser rendering pipeline. Speaking of compositing, below is a 3D render of every element that is promoted to it's own layer, in the layers panel! Notice how the use of ``` will-change``` and ```transform: translate3d() ```automatically promotes the element to it's own layer. Due to this promotion, these elements will get a boost from the GPU when animating. Also visually seeing how much memory a promoted element may take up is a visual reminder not to go crazy on promoting everything that animates. My restricted use of promoting elements cost about 4MB total overall. Profiling performance is something that I am excited in learning to get better at, and leveraging developer tools in this way essentially fulfills the inner nerd in me.
![Layers Panel](./static/README_assets/layersPanel.jpg)


## Data Persistence




![Font Management](./static/README_assets/font.svg)
## Font Management
I took a progressive approach to font management this time around, which was to utilize system fonts and abstain from loading any external fonts at all. This special font declaration allowed me to do so. 

```--font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;```
How and why would I take this approach though? There are numerous advantages over traditionally loading font files or relying on external resources for fonts. 
* Reduce load times by not having to ship various font weights and combinations down the network
* Resolves font loading & font-dislay issues instantly, [FOIT or FOUT](https://css-tricks.com/fout-foit-foft/)
* Flexibity when selecting font-weight
* Existing user familiarity
* Save time not writing @fontface declarations

Native system fonts are also great for consumption of content due to the familiarity already established by their existing hardware device. Given these benefits in exchange for sacrificing a little bit of design identity were more than enough for me to consider using this at the very least a backup font selection moving forward with future projects. 

## Fully Featured Blog



![Images](./static/README_assets/picture.svg)
## Lazy Loading Images & Syntax Highlighting
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Challenges

## Standardizing Print and Development Projects

## Roadmap

## Wrapping Up




## Build Setup 

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

