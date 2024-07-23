import React from 'react'

const Question3 = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Q3?</h1>
        <img src="https://techindustan.com/wp-content/uploads/2023/03/React-vs-Angular-vs-Vue-Differences-Pros-and-Cons.jpg" width={700} alt="" />
        <p>Here are three key differences between ReactJS and other popular JavaScript frameworks like AngularJS and VueJS:

Difference 1: Architecture

ReactJS: React is a view library, not a full-fledged framework. It only handles the view layer of an application, leaving the rest of the architecture (e.g., routing, state management) to other libraries or frameworks. This makes React highly flexible and adaptable to different project needs.
AngularJS: Angular is a full-fledged framework that includes a robust set of features, such as dependency injection, services, and routing, in addition to its view layer. This makes Angular a more opinionated framework that provides a complete solution for building complex applications.
VueJS: Vue is also a progressive and flexible framework that can be used as a view library or a full-fledged framework, depending on the project needs. Vue provides a robust set of features, including a router, state management, and a robust ecosystem, but it's not as opinionated as Angular.
Difference 2: Templating

ReactJS: React uses a concept called JSX, which allows you to write HTML-like code in your JavaScript files. This approach makes it easy to declaratively render components and manage state changes.
AngularJS: Angular uses a templating language called HTML, which is extended with Angular-specific directives and bindings. This approach makes it easy to declaratively render components, but it can be more verbose than React's JSX.
VueJS: Vue uses a templating language called Vue Template, which is similar to Angular's HTML templating. However, Vue also supports JSX, making it a more flexible option for developers who prefer a React-like syntax.
Difference 3: Learning Curve

ReactJS: React has a relatively low barrier to entry, especially for developers already familiar with JavaScript and HTML/CSS. However, React's ecosystem and best practices can take time to learn, especially for complex applications.
AngularJS: Angular has a steeper learning curve due to its robust set of features and opinionated architecture. Developers need to invest time in learning Angular's specific concepts, such as dependency injection and services.
VueJS: Vue is often considered the most approachable of the three, with a gentle learning curve and a robust set of features. Vue's documentation and ecosystem are also highly praised, making it easier for developers to get started quickly.
These are just a few key differences between ReactJS, AngularJS, and VueJS. Each framework has its strengths and weaknesses, and the choice ultimately depends on the project requirements and the team's experience and preferences.




</p>
    </div>
  )
}

export default Question3