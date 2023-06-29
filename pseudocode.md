# What am I doing?
- design a menu website for a new restaurant opening at 348 E Main St, Lexington, KY.
- generate the recipes, menu, and the restaurant name
## Moscow
### Must-Have's
*   A single-page web app that serves as a restaurant splash page with a menu.
*   generate the menu data from the api.
### Should-have's
*   a logo, an address in a footer with contact info, list of foods divided by category. prices for each item.
### Could-have's
*   an ingredient list for recipes. Yelp review display even though it hasn't opened yet.
### Will-not have's
*   Dead dog, horse meat, human bodily fluids or parts in the menu

## Atomic design.
### atoms
* buttons: ratings, link to the address
* text
### molecules
* menu itmes with the price and text and a button
### organisms
*The categories of the menu with organized menu items in the category. For example: salads, entrees, appetizers.

## Procedural code 

### Begin

### INIT
What does the set up look like? What are my tools for the job?
* Vs code or Gitpod
* AXios
* the API
* Bootstrap, Some css for super specific style, html for the layout withbootstrap, javascript with REACT to build the UI.
`npx create-react-app app (--template file:.template)` - optional if using GitPod.
#### Questions
How do I make a single page website with my current knowledge? It functions like the weather app and the my tictactoe game because it is all on one page.<br>
How does React work in the UI with javascript? How do I get into the sandbox to break/fix what I don't fully understand? I have barelyt touched React except in the tutorial. 
* Beginner react project. something super easy to ease myself into the deep. Even if itis a sidequest.
Design a component for React with its elements and children.

#### STATE 
* STate is calling upon the api's data to display onto the menu
### Render
Header - populate the header with the logo and contact info

Category - treat the menu category as an element inside the compoonent
child
child
child

Footer

### End 

## Functional Code

```
function menu category ppress()
{
when button is pressed, populate with data based on which category button is pressed. api is called
}

function logo press()
{
when logo is pressed, goes back to the main menu
}
```
## Object oriented
class menu = {
  - salads: { - `this is an element that would be populated from a button`
    * tossed salad
    * thrown salad `these are children inside the element that ppulate with props parameters`
      }
  - appetizers: { - `this is an element that would be populated from a button` 
    * nacho libres
    * brooklyn wiungs `these are children inside the element that ppulate with props parameters`
      }
  - entrees { - `this is an element that would be populated from a button `
    *  The boomerang loin :a rare steak sseasoned in ashes of your grandma with a not so loaded baked potato.
    * not so flat bread: its a pizza you dummy `these are children inside the element that ppulate with props parameters`
   }
  }
class header= {
img: logo (on press goto the primary set of populated data)
img: contact info(goes to a page of contact info and leave a review)
}

class foooter  {
img: contact info(goes to a page of contact info and leave a review)
}
