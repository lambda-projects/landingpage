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

## Design Details

Context          | Google Font          | Fallback
---              |---                   |---
H1-H6            | [Playfair Display SC](https://fonts.google.com/specimen/Playfair+Display+SC) | serif
Body text        | [Open Sans](https://fonts.google.com/specimen/Open+Sans) | sans-serif
Icons            | [Font Awesome (Free)](https://fontawesome.com/) | `none`

Color Variables   | Hex Values |
---               |---         |
@gvhm-red         | #A51212    |
@gvhm-lightred    | #AD2727    |
@gvhm-darkgrey    | #666666    |
@gvhm-darkbluish  | #4F5A62    |
@gvhm-lightbluish | #9FA9B2    |
@gvhm-lightgrey   | #D3D7C8    |
@gvhm-deepblue    | #0A3C60    |

[Visualization of color scheme](https://coolors.co/a51212-666666-4f5a62-9fa9b2-d3d7c8) on coolors.com.

Color scheme inspired by [this palette](https://www.colourlovers.com/palette/453310/Sound_Of_A_Gun).

## Most Recent Style Guide

Style guide image produced by [Andrew Benedict](https://github.com/atbenedict), our Back End Architect.

![Style Guide v01](/design-files/StyleGuide-v01.png)

## Page Structure & Organization

Each page has a fixed navbar, a "splash page"-style section that encapsulates the page's header, and any of three types of content sections with optional spacer divs.

### Navbar

The navbar is a simple `nav` element set outside the `main` element of the page and fixed to the top of the site, using flexbox to space the site navigation links evenly across the top of the page. At particularly small screen widths (below 350px) the navbar goes static in order to free-up room on the screen while scrolling.

### Splash Section

`div.splash`
    `header.header-section`
      `div.header-content`
        `h1`
        `p.tagline` (optional)
        `div.cta-wrap` (optional)
          `button.cta` (optional)

### Banner Sections

### Spotlight Sections

### Grid Sections