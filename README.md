# Shots Fired | Landing Page

**Live Site:** <https://shots-fired-marketing.netlify.com>

## User Interface Developer | Matt Poloni

**Role Description**

* [ ]  You will build a multi-page marketing website that matches the theme chosen by your group and provides the user with details about the product your team has selected to build.
* [ ]  Your marketing website must include responsive mobile and desktop screen widths. Please see the "Responsiveness" portion of your rubric for more information on this.
* [ ]  The call to action on the website should be a login button that links the user over to the React application that your Front End Architect is building.
* [ ]  Your marketing website must be hosted on a hosting platform like "Netlify" or "Github Pages".
* [ ]  For this Marketing site's home page you need to have content and copy that relates to the product that your team is working on.
* [ ]  Descriptions about the product and about the features it provides would be key.
* [ ]  For a second page, you could do an about us section that includes images of the members of your team, and links to one another's socials/Github.

## Style Guide

Inspired by the [Spectral theme](https://html5up.net/spectral) on HTML5UP.

![Style Guide v01](/design-files/StyleGuide-v01.png)

Style guide image produced by [Andrew Benedict](https://github.com/atbenedict), our Back End Architect.

[Visualization of our color scheme](https://coolors.co/a51212-666666-4f5a62-9fa9b2-d3d7c8) on coolors.com.

Color scheme inspired by [this palette](https://www.colourlovers.com/palette/453310/Sound_Of_A_Gun).

### Background Image

Background image from [NASA](https://unsplash.com/@nasa) on [Unsplash.com](https://unsplash.com/photos/Q1p7bh3SHj8).

![Background Image](/img/earth-light.jpg)

### Color Variables

LESS: [variables.less](/less/variables.less)

Color Variables   | Hex Values |
---               |---         |
@gvhm-red         | #A51212    |
@gvhm-lightred    | #AD2727    |
@gvhm-darkgrey    | #666666    |
@gvhm-darkbluish  | #4F5A62    |
@gvhm-lightbluish | #9FA9B2    |
@gvhm-lightgrey   | #D3D7C8    |
@gvhm-deepblue    | #0A3C60    |

### Color Assignments

LESS: [variables.less](/less/variables.less)

Assignment Variables | Color Variables    |
---                  |---                 |
@body-color          | @gvhm-lightgrey    |
@cta-bg              | @gvhm-red          |
@cta-hov             | @gvhm-lightred     |
@nav-bg              | black              |
@nav-color           | @gvhm-lightgrey    |
@header-bg           | rgba(0, 0, 0, .35) |
@header-color        | @gvhm-lightgrey    |
@header-a            | @gvhm-lightbluish  |
@h1-color            | @gvhm-lightgrey    |
@jump-color          | @gvhm-lightgrey    |
@content1-bg         | @gvhm-darkbluish   |
@content2-bg         | @gvhm-darkgrey     |
@content1-color      | @gvhm-lightgrey    |
@content2-color      | @gvhm-lightgrey    |
@content1-a          | @gvhm-lightbluish  |
@content2-a          | @gvhm-lightbluish  |

### Font Variables

LESS: [variables.less](/less/variables.less)

Context          | Google Font          | Variable | Fallback
---              |---                   |--- |---
H1-H6            | [Playfair Display SC](https://fonts.google.com/specimen/Playfair+Display+SC) | `@Playfair` | serif
Body text        | [Open Sans](https://fonts.google.com/specimen/Open+Sans) | `@OpenSans` | sans-serif
Icons            | [Font Awesome (Free)](https://fontawesome.com/) | `none` | `none`

### Font Assignments

LESS: [variables.less](/less/variables.less)

Assignment Variables | Font Variables |
---                  |---             |
`@font-header`       | `@Playfair`    |
`@font-body`         | `@OpenSans`    |

## Page Structure & Organization

Each page has a fixed navbar and a "splash page"-style section that encapsulates the page's header and jump links. The main content can then use spotlight sections or, more flexibly, use banner sections that can themselves encapsulate content grids, carousels, or any other typical content very easily.

### Media Queries

LESS: [variables.less](/less/variables.less)

Variable   | Value                | Purpose
---        |---                   |---
@max-w     | 800px                | set common max-width (for `.max-w()` mixin)
@tablet    | ~"(max-width: 800px) | set breakpoint for tablet-sized screens |
@mobile    | ~"(max-width: 500px) | set breakpoint for mobile-sized screens |
@mobile-sm | ~"(max-width: 350px) | set breakpoint for smaller mobile screens |

### Mixins

LESS: [mixins.less](/less/mixins.less)

#### Common Max Width

```
.max-w() {
  max-width: @max-w;
  margin: 0 2rem;
}
```

This mixin takes the `@max-w` variable and makes it standardizes it across many different sections of the website along with a standard left and right margin for those sections to make room between content and the edge of the window.

#### Generic Flex

```
.flex(@dir: row, @jc: flex-start, @ai: stretch) {
  display: flex;
  flex-direction: @dir;
  justify-content: @jc;
  align-items: @ai;
}
```

This mixin serves as a standard shorthand for the most commonly used flexbox properties, each set to have the same default values as the standard for those properties.

#### Flex Centering

```
.center(@dir: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: @dir;
}
```

This mixin merely sets an element to center child elements vertically and horizontally within the specific parent element through flexbox with the ability to set the flex-direction to column, though it defaults to row.

### Navbar

LESS: [navbar.less](/less/navbar.less)

* `body`
    * `nav.nav-site` (first element inside `body`)
        * `a.nav-link`
            * link content

The navbar is a simple `nav` element set outside the `main` element of the page and fixed to the top of the site, using flexbox to space the site navigation links evenly across the top of the page. At particularly small screen widths (below 350px) the navbar goes static in order to free-up room on the screen while scrolling.

### Splash Section

LESS: [splash.less](/less/splash.less)

* `main`
    * `div.splash` (first element inside `main`)
        * `header.header-section`
          * `div.header-content` (optional wrapper)
            * `h1`
            * `p.tagline` (optional)
            * `div.cta-wrap` (optional)
              * `button.cta.p1` (optional, multiple)
        * `nav.nav-page`
            * `div.jump[data-sec={section}]` (multiple)
                * jump link content

In order to fully display the background image fixed to the `body` element, this section has no background of its own and the wrapper has a minimum height of `100vh`. The minimum is there in case the content were to overflow somehow, which is advised against. Using flexbox, child elements are positioned in a column with `justify-content: space-between` and `align-items:center`.

#### Page Header

LESS: [splash.less](/less/splash.less)

* `header.header-section`
    * `div.header-content` (optional wrapper)
        * `h1`
        * `p.tagline` (optional)
        * `div.cta-wrap` (optional)
            * `button.cta.p1` (optional, multiple)

The first of that wrapper's two child elements is the page's header, which has a minimum height of 100%, sets the max-width to the common max-width value, and uses flexbox to center its child elements.

If needed, an optional wrapper can be used that would be useful if the header content doesn't contrast well with the page's background. Otherwise, the page's `h1`, `p.tagline`, `button.cta.p`, and any other content can be put directly into the header. Also, if more than one call-to-action button is needed, they can be wrapped in a div that is ready-made for that purpose, though currently unstyled.

#### Jump Links

LESS: [splash.less](/less/splash.less)

* `nav.nav-page`
    * `div.jump[data-sec={section}]` (multiple)
        * jump link content

At the bottom of the splash section is another `nav` section, which specifically has jump-links to the major content sections within `main`. The jump links section is set to spread them evenly along the bottom of the splash section and disappear at mobile widths (500px and below).

These jump-link `div`s are each set with a `data-sec` attribute matching the same attribute on one of the page's major content sections. Javascript will automatically find the links, find their matching content, and use an event listener to smoothly scroll to the start of that element. 


### Generic Section Wrapper

LESS: [content-sections.less](/less/content-sections.less)

* `section.section-wrap[data-sec={section}]`

These `sections` with class `section-wrap` merely use flexbox to layout their direct children in a column, centered both vertically and horizontally. They wrap every major content section and take a `data-sec` attribute that's matched with the same attribute on one of the jump-links at the bottom of the splash section.

### Banner Sections

LESS: [content-sections.less](/less/content-sections.less)

* `section.section-wrap.banners[data-sec={section}]`
    * `div.banner-wrap`
        * banner content

The simplest of the content sections, this `section` merely centers its text as a default before its child element `.banner-wrap` sets a max-width for whatever content you wish to display within it, such as a carousel.

#### Carousel

LESS: [content-sections.less](/less/content-sections.less)

* `section.section-wrap.banners[data-sec={section}]`
    * `div.banner-wrap`
        * header content
    * `div.carousel-wrap`
        * `div.car-btn.prev`
        * `img` (multiple)
        * `div.car-btn.next`

The carousel wrapper sets the common max-width, uses flexbox to center everything vertically and horizontally, and sets margin and padding to allow for proper alignment of the carousel's previous and next buttons. The buttons are simply set to straddle their respective edge of the carousel images.

#### Grid Sections

LESS: [content-sections.less](/less/content-sections.less)

* `section.section-wrap.grid[data-sec={section}]`
    * `div.banner-wrap` (grid header)
        * header content
    * `div.grid-wrap`
        * `div.grid-cell` (multiple)
            * cell content

The grid wrapper does not set the common max-width, instead opting to serve up the grid across the entire viewport and wrapping them using flexbox's `flex-wrap: wrap`. Each cell is spaced according to `justify-content: space-between` and the margin specified on the individual cells.

### Spotlight Sections

LESS: [content-sections.less](/less/content-sections.less)

* `section.section-wrap.spotlights[data-sec={section}]`
    * `section.spotlight.bg{1/2}` (`.rev` optional)
        * `div.img-wrap`
            * `img`
        * `div.spot-content`
            * image-relevant content

Spotlight sections are set to show an image flush against the left of the screen (or right of the screen with `.rev`) with relevant content next to it at desktop-size screen widths. At smaller screen widths (800px and below), the image merely stacks on top of its paired content by means of a media query.

If the `.rev` class exists on `section.spotlight`, then that section will have `flex-direction: row-reverse` applied to reverse the position of the image and its relevant content. The `bg-{1/2}` classes, which will be explained below, should be placed on that same element.

Initially, the image wrapper is set to a width of `40vw`, but switches to `100%` at the same time as `section.spotlight` switches to column layout. The wrapper for the spotlight content then applies the common max-width and aligns the content in the center of its parent.

### Spacer Divs

LESS: [content-sections.less](/less/content-sections.less)

* `div.spacer`

Spacer divs exist only to provide a peek back at the page's background image between content sections. These are completely optional, but highly encouraged.