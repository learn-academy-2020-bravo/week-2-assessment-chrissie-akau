# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: You would use the super() method when dealing with class in heritance.

  Researched answer: The super method is used to access and call functions on an object's parent.



2. What is a virtual DOM?

  Your answer: A virtual DOM is what the app or website user is actually seeing on their end.  It's how the coding actually appears on their screen.

  Researched answer: virtual DOM is a programming concept where an ideal, or "virtual" representation of a UI is kept in memory and synced with the "real" DOM by a library, like ReactDOM.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: You would need just a render and return with react fragments and below that <h1> tags with "Hello World" inside.  

  Researched answer: A stateless component is just a plain javascript function which takes props as an arguemtn and returns a react element.  It has no state and it means that you can't reach the `this.state` inside it.  It has no lifecycle.



4. What is JSX?

  Your answer: JSX is the language React uses which is like a mix between HTML and JavaScript.  For example, you would create a JavaScript looking class, but in it have HTML elements like <p> or <div> or <h1> in side.

  Researched answer: JSX is a syntax extension to JavaScript for XML-like code for elements and components.  It allows us to put HTML into JavaScript.  It stands for Java Script XML.



5. What is state in React?

  Your answer: state in React is what you want your final return to be within a component.

  Researched answer: State is an object that represents the parts of the app that can change.  Each component can maintain its own state, which lives in an object called this.state.



6. STRETCH: What is hoisting in JavaScript?

  Your answer:  Moving something above something in JavaScript

  Researched answer: JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script of current function).



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods - methods that help free up resources taken by the components when they are destroyed. 
- API - in context of a browser, a web API is an API provided by the browser that we can communicate with using JavaScript in order to solve our front-end problems.
- event.preventDefault()- a method that tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.  The event continues to propogate as usual ,unless on of its event listeners calls stopPropagation() or stopImmediatePropagation() which terminates propagation at once.
- DOM events- sent to notify code of interesting things that have taken place.  Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened.
- http verbs - a set of request methods to indicate the desired action to be performed for a given resource. Can be nouns, but still fall under http verbs classification. 
- MVC-  Model-View-Controller, is an application design model comprised of three interconnected parts.  It includes the model (data), the view (user interface), and the contorller (processes the handle input).
