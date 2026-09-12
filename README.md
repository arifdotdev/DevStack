# DevStack

A modern and responsive technology stack builder built with React and TypeScript.

Users can explore different technologies, select technologies for their stack, and easily manage their selected stack.

## Live Demo

https://candid-starship-3d2382.netlify.app/

## GitHub Repository

[GitHub Repository](https://github.com/arifdotdev/DevStack.git)

---

## Features

### 1. Explore Technologies

Browse different technologies with their name, description, category, difficulty level, rating, and badge.

### 2. Build Your Stack

Add technologies to your personal stack and see your selected technologies in one place.

### 3. Manage Your Stack

Remove technologies from your stack whenever you want. The "Add to Stack" button also updates automatically when a technology is already selected.

---

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Icons
* React Toastify
* JavaScript / ES6
* HTML5
* CSS3

---

## Responsive Design

The application is responsive and works smoothly across:

* Mobile
* Tablet
* Desktop

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.

It makes React components easier to write and understand because we can create the UI and JavaScript logic together.


## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only.

State is data managed inside a component. When state changes, React updates the UI.


## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state in a component.

its use in, When a user adds or removes a technology, the `stacks` state is updated.


## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component, such as fetching data, updating the document title, or working with external systems.

For loading JSON data, `useEffect` can be used to fetch the data when the component loads.


## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed, so it can update the UI efficiently.


## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

{isSelected ? 'Added to Stack' : 'Add to Stack'}

I also used conditional rendering to show the empty stack message when no technology has been selected.


## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.

For example:

```tsx
<TechnologyCard
    technology={technology}
    stacks={stacks}
    setStacks={setStacks}
/>
```

Here, the parent sends `technology`, `stacks`, and `setStacks` to the child.

The child can update the parent's state by using a function passed through props.
