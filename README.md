![Open Legend RPG Logo](https://openlegendrpg.com/assets/img/open_legend_lg_logo.png)

# Open Lengend Grimoire
This project builds on [Open Legend Compendium](https://github.com/frankieali/open-legend-compendium) to use the data supplied there in a meaningful and useful way. The data from Open Legend Compendium has been uploaded to an online database. React is being used to render the data as a fast SPA.
I chose to use the [The Grimoire](https://thebombzen.com/grimoire/) UI as a starting point since it's a resource I find useful for my D&D games.

## Demo
[https://open-legend-grimoire.herokuapp.com/](Open Legend Grimoire)

## Changelog

#### April 19th 2019
 - Initial commit of project
 - Fetching data from database and caching to local browser storage
 - All entries are viewable as individual items
 - `react-router` implemented to allow for deep linking
 - `react-router-scroll-memory` implemented to restore scroll position on using browser back button
 - `react-markdown` implemented to support markdown in JSON data

 ## TODOs
  - Add mobile menu
  - Add Category listing pages
  - Create tables for items
  - Create list/card/table view modes
  - Add styles for detailed views
  - Mobile-First support
  - Add search capability
    - text
    - tags

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
