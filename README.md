# Week 15 JS/Rails Challenge

## ES6, Advanced Functions, OOP

### Objectives

1. Demonstrate the ability to use class syntax
2. Demonstrate the ability to encapsulate fetch logic and html builders in a class
3. Deomonstrate the ability to use inheritance in JS
4. Demonstrate the ability to get classes to collaborate in JS

### Instructions
Setup - be sure to have json-server installed: `npm install -g json-server`

1. Make a class called `BaseAdapter` in `baseAdapter.js`
    - Make a `static get` method called `baseURL` which returns the base url (e.g. `http://localhost:3000`)
    - create a `static get` method that returns `headers` to include `Accept` and `Content-Type` key-value pairs.

2. Make a class called HeroesAdapter in `herosAdapter.js` 
    - Inherit from BaseAdapter
    - Make a `class method` which accepts a response. This method should throw an error if the `response.status` is greater than 299 or less than 200. 
    - Make an `static async` method to fetch all heroes. Utilize the parent class' `baseURL` class getter. This method should use the `await` syntax, and should utilize your method described in the bullet point above. Return a javascript object from this method.

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
    - Make a class getter using `static get` 
    - Make an async class method (using the `static async` keywords) called `fetchAll`. This method should use a `try catch` block to call the `HeroAdapter`'s class method which fetches heroes and returns javascript object. Map these objects to Hero instances and return them as such. 

4. In `app.js` make a class called App. 
    - In the constructor, assign `this.heroes` to the return value of `Hero.fetchAll`.
    - In the constructor, use `document.querySelector` to save as an instance variable the div with the id `app-container`
    - Make an instance method called `render`. This method should app `this.heroes` to html (using the `hero` object `.html` getter method) and set it equal to the `app-container`'s innerHTML.
    - Make an instance method called `fechAndRenderHeroes` which, inside a `try/catch` block calls `Hero.fetchAll` and saves the result as an instance variable `this.heroes`. The last line of the try should call `this.render()` to display those hereos to the screen. The catch block should call an `alert()` to show the user an error occurred during fetching.