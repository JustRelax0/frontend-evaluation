[Grow.com](https://grow.com) Frontend Engineering Evaluation
=========

Oh hey, looks like you've found our frontend evaluation.🚀

## Some things you should know.
We called this an evaluation on purpose. This isn't a test. There are a million ways to do this and each person will do it differently. What we want to see is how you approach things. Does what you did make sense and can you explain your reasons for why you did it that way. Is the code that you write easy for someone else to understand. We also want to get a sense of where you are at. But don't stress about it. We are all still learning. You might be earlier in your software engineering journey than others and that's okay.

We need to know where you are at, how you think, and how you learn so we can determine if you are going to fit with what Grow needs from a technical perspective. This isn't an effort to judge your value as an engineer.

Alright on to the fun part 🎉🎉

## Here is what you'll build.
- Use the [Star Wars API](https://swapi.dev/) to get a list of all the planets in the Star Wars Universe. Note, the api is paginated, so you will need to pull multiple times to get all the planets.
- Display all of those planets in a list on the front page of your app. You may choose to show all the planets, or paginate them for the UX experience.
- Add a text input at the top of the page that allows a user to search the full list of planets. The filtering should NOT re-call any api calls.
- When a user clicks on a planet, they should navigate to a new page that shows a list of the residents of the planet fetched from the Star Wars API.
- When a user clicks on one of the residents, they should navigate to another page that shows the personal details of that resident.
- Include a header with breadcrumbs. Something like `All Planets / Planet Name / Resident Name`. Each breadcrumb section should be clickable to navigate to the appropriate page.
- Include a service file that contains all the api urls and gets. Your React components should not contain any url references.

## Tips to get started.
- Use something like [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to give yourself a jump start. We don't want to put you through wrestling with standing up a webpack/babel setup on your own. Unless you are a real glutton for punishment. In which case, go for it. But it's not going to score you extra points.
- Style up the application as you like. The whole thing doesn't need to be perfectly polished, but we do want to see that you can implement a UI design. Even though we aren't giving you a design to implement. 😆😆 Our advice would be to give the app a decent layout that makes sense and then pick one piece of UI and give it some love ❤. This could be the planet list items, the search input, or the individual residents.

Speaking of extra points...

## Bonus Points
- Every company does things a little differently. The closer you get to our stack the better we'll be able to assess how you work with it. So, extra credit if you use any of the following:
  - [Mobx](https://mobx.js.org) and [Mobx State Tree](https://mobx-state-tree.js.org) for state management.
  - [Sass](https://sass-lang.com/) for styling.
  - [React Router](https://reacttraining.com/react-router/) for routing.
- Optimizing
  - various features as as fast as possible.
  - Re-use of components



