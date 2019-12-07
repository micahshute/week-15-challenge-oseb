# Week 15 JS/Rails Challenge

## ES6, Advanced Functions, OOP

### Objectives

1. Demonstrate the ability to use class syntax
2. Demonstrate the ability to encapsulate fetch logic and html builders in a class
3. Deomonstrate the ability to use inheritance in JS
4. Demonstrate the ability to get classes to collaborate in JS

### Instructions
Setup - be sure to have json-server installed: `npm install -g json-server`. Start up the server using `json-server --watch db.json`

1. Make a class called `BaseAdapter` in `baseAdapter.js`
    - Make a `static get` method called `baseURL` which returns the base url (e.g. `http://localhost:3000`)
    - create a `static get` method that returns `headers` to include `Accept` and `Content-Type` key-value pairs.
    - Make a `class method` which accepts a response. This method should throw an error if the `response.status` is greater than 299 or less than 200. 

2. Make a class called HeroesAdapter in `heroesAdapter.js` 
    - Inherit from BaseAdapter
    
    - Make an async class method (`static async`) to fetch all heroes. Utilize the parent class' `baseURL` class getter. This method should use the `await` syntax, and should utilize your method which checks the response's status and throws an error if appropriate. Return a javascript object from this method (remember that .json() is another async method and must be awaited!)

3. Make a class called Hero in `hero.js`. 
    - The constructor should accept a JS object, and assign the attributes of a hero to instance variables. 
    - Make get method called `html` which returns an HTML string describing a hero. Feel free to be creative or to use this template:

    ```html
        <div class="hero-card">
            <h3>${this.name}</h3>
            <h4>Best trait: ${this.trait}</h4>
            <p>Accomplishments:</p>
            <ul>    
                ${this.accomplishments.map(a => `<li>${a}</li>`).join('')}
            </ul>
        </div>
    ```
 
    - Make an async class method (using the `static async` keywords) called `fetchAll`. This method should call the `HeroAdapter`'s class method which fetches heroes and returns javascript object. Map these objects to Hero instances and return them as such. Make sure you are `await`ing all async calls! And remember you can only `await` inside an `async` function!

4. In `app.js` make a class called App. 
    - Make an async instance method called `fechAndRenderHeroes` which, inside a `try/catch` block calls `Hero.fetchAll` and saves the result as an instance variable `this.heroes`. The last line of the try should call `this.render()` to display those hereos to the screen. The catch block should call an `alert()` to show the user an error occurred during fetching.
    ```js
        try{
            // call "dangerous" code. Execution will break from this block and go to catch block if an error is thrown.
        }catch(err){
            // what to do if an error is thrown in the try block
        }
    ```
    - In the constructor, call your method defined in the bullet point above. Be sure to initialize your `this.heroes` instance variable to an empty array in the constructor.
    - In the constructor, use `document.querySelector` to save as an instance variable the div with the id `app-container`
    - Make an instance method called `render`. This method should map `this.heroes` to a single html string (using the `hero` object `.html` getter method and a method which combines array elements into a single string) and set it equal to the `app-container`'s innerHTML.
    
5. In `index.js`, add a `DOMContentLoaded` event listener to the document, and instantiate a new `App` instnace. Then link all of your js files to `index.html`, and troubleshoot until it displays all of your heroes on the page! A bug commonly missed is making sure you are properly `await`ing all of your async calls!