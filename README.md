# WeebSearch
This is an anime search application using the AniList api. It was built using the [Sveltekit](https://kit.svelte.dev/) framework and the [Houdini](https://houdinigraphql.com/) GraphQL client.

### **Try it: (https://idyllic-folio-397705.uc.r.appspot.com/)**

## What it does
The app uses the AniList api to pull data from the website [AniList](anilist.co). The queried data is then used to pull the top 5 trending anime as well any anime closely matching whatever the user searches for.
Once the user inputs a search they are redirected to a new page showing a list of the results displayed in a grid format. The cards on the trending page can be clicked on to redirect the the anime's page on Anilist, 
or the name can be clicked after a search is made to redirect as well. The trending page only displays a large image of the anime's cover and the title while the page displaying the searched content has more details such as; a description, start date, status of the anime's production, 
average viewer score, and genres. Apart from a search bar the header also contains a little checkbox to change the site to light or dark mode.
 



