![Open Legend RPG Logo](https://openlegendrpg.com/assets/img/open_legend_lg_logo.png)

# Open Lengend Grimoire
This project builds on [Open Legend Compendium](https://github.com/frankieali/open-legend-compendium) to use the data supplied there in a meaningful and useful way. The data from Open Legend Compendium has been uploaded to an online database. React is being used to render the data as a fast SPA.
I chose to use the [The Grimoire](https://thebombzen.com/grimoire/) UI as a starting point since it's a resource I find useful for my D&D games.

## Demo
[Open Legend Grimoire](https://open-legend-grimoire.herokuapp.com)

## Changelog

#### May 8th 2019
 - Version 1.1 complete.
 - Updated app to work with new Open Legend Compendium data structure
 - Added table and card views
 - Cleaned up routes for improved url paths
 - Added support for rendering Compounding Effects: e.g.: fatigued
 - Added support for Power Level Tables: e.g.: summon creature

#### April 21th 2019
 - Version 1.0 complete.
 - Added seach capability on landing page
 - Hooked up anchor links on header navigation
 - Added some styles to improve the look of the detail pages

#### April 19th 2019
 - Initial commit of project
 - Fetching data from database and caching to local browser storage
 - All entries are viewable as individual items
 - `react-router` implemented to allow for deep linking
 - `react-router-scroll-memory` implemented to restore scroll position on using browser back button
 - `react-markdown` implemented to support markdown in JSON data

 ## TODOs
  - ~~Markdown Support~~
  - ~~Create tables for items~~
  - ~~Convert deeps links to more human readable link (e.g.: `/item/boons/1` => `/boons/animation`)~~
  - ~~Create additional view modes for landing page~~
    - ~~list~~
    - ~~card~~
    - ~~table (with additional stats and sorting)~~
  - Add Table sorting feature
  - Preserve view mode when using browser navigation
  - Internal links e.g.: an item with a bane would link to the listed bane page
  - ~~Add styles for detailed views~~
  - Add mobile menu
  - Mobile-First support
  - Add search capability
    - ~~titles~~
    - text
    - tags
  - Add tooltips on hover for extra information
  - ~~Make header sticky~~
  - Add sticky "Back to Top" link on landing page
  - Integrate [Blueprint](https://blueprintjs.com) for new functionality
    - revamp overall site styles to align more with Blueprint
    - add light and dark theme mode toggle

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
