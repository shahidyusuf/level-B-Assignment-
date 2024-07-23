import React from 'react'

const Question1 = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Q1?</h1>
        <img src="https://miro.medium.com/v2/resize:fit:1200/1*-XBaeKot3OcX4IgI3MmQeA.png" width={500} alt="" />
        <p>Debouncing is a technique used in ReactJS to limit the number of times a function is called within a certain time period. It's commonly used to prevent excessive calls to a function, such as when a user types rapidly in a search input field.

Imagine you have a search input field, and every time the user types a character, you want to make an API call to fetch search results. Without debouncing, this could lead to multiple API calls being made in rapid succession, which can be inefficient and even cause errors.

Debouncing solves this problem by delaying the function call until a certain amount of time has passed since the last call. For example, you might debounce the search function to wait 500ms after the user has finished typing before making the API call. This ensures that the function is only called once, after the user has stopped typing.

In React, debouncing is often implemented using the lodash.debounce function or a similar utility. Here's an example:</p>
    </div>
  )
}

export default Question1