# WeebSearch
This is an anime search application using the AniList api. It was built using the [Sveltekit](https://kit.svelte.dev/) framework and the [Houdini](https://houdinigraphql.com/) GraphQL client.

### **Try it: (https://idyllic-folio-397705.uc.r.appspot.com/)**

## What it does
The app uses the AniList api to pull data from the website [AniList](anilist.co). The queried data is then used to pull the top 5 trending anime as well any anime closely matching whatever the user searches for.
Once the user inputs a search they are redirected to a new page showing a list of the results displayed in a grid format. The cards on the trending page can be clicked on to redirect the the anime's page on Anilist, 
or the name can be clicked after a search is made to redirect as well. The trending page only displays a large image of the anime's cover and the title while the page displaying the searched content has more details such as; a description, start date, status of the anime's production, 
average viewer score, and genres. Apart from a search bar the header also contains a little checkbox to change the site to light or dark mode.

## Project structure
* Sveltekit is used as the framework for this app. The UI for the page is rendered using Svelte and the routing is done using functionality provided by Sveltekit. In the components folder there are .svelte files which interact with other parts of the project 
in order to make the code cleaner and make everything work together nicely.

* The graphQL contained in +page.gql files queries are handled by Houdini which interacts seamlessly with Sveltekit in order to simplify gathering data from the api.
  
* The styling of the site was done by using [TailwindCSS](https://tailwindcss.com/) with [daisyUI](https://daisyui.com/) components.
  * Tailwind makes styling less of a pain since no external css file is needed and all styles are done inline in a tags 'class'.
  * DaisyUI is a component library for tailwind that makes creating a good looking site easier. 

* The routes folder contains the index of the page which is the +page.svelte file
  * This file uses the trending anime query in the +page.gql file to get the top 5 trending anime at the moment and display them on the page

* The [search] subdirectory in the routes folder contains the +page.gql file for the search query and the +page.svelte file to diaplay the data.
  * This query uses the file components/AnimeInfoCard.svelte which contains a fragment for the anime information and displays that data nicely on a card.

* The +layout.svelte file in the routes directory contains the general layout that will display on every page of the app.
  * There is a header and footer and in between them is a <slot /> tag which is what renders the +page.svelte file of the current route
 

## Planned Features
* Allow users to log in with AniList and update data from the site
* Add filtering by genre
* Add ability to switch between either anime or manga for trending and search queries
* Add a library that users can add favorite Animes to
* Add a watchlist for users
* Add Ability to see or filter out NSFW content
* Improved site navigation




