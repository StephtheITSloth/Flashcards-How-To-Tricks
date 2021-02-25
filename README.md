# Flashcards-How-To-Tricks

A flashcard game to help Software Engineers revisit 'How To' tricks and interview related questions.

## User Story

## Unsolved Problems
At time, the frame of the card changes when you move to other questions.
Not being able to return to the card front when pressing the return to card button.

## Major hurdles
Not being able to achieve the 3d effect that will bring you back to the front of the page.

## My github
https://github.com/StephtheITSloth


## Fork repo and Copy SHH tom your terminal

### For the HTML: Set up for the flip effectthe HTML with a card container. Inside create a single card div. Then you will need two more divs; one for the front of the card and the other for the back of the card.

#### Follow this template for the html.
<container class="card">                            <div class="card-single">                               <div class="card-single-front"></div>   <div class="card-single-back"><div>                              </div>                                                   </container>

#### For the CSS: I have used Flexbox.  Add border with brigth color on each selector and use the element section of the chrome dev tool.

### For the Javascript: Grab every single html elements needed using the DOM.  It is good practice to have them all stock up on top.

Create an array with objects that takes all your inputs.
Create a varialble 'currentIndex and set it to 0'.
Make the app dynamic using the currentIndex variable while referring to the properties of the array.
