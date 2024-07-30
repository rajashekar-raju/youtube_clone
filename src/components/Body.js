import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex mt-24 h-[calc(100vh-6rem)]'>
      <SideBar />
      <Outlet/>
    </div>
  )
}

export default Body

// h-[calc(100vh-6rem)]
// This is a Tailwind CSS utility class that uses a custom height value calculated dynamically. It combines calc(), a CSS function, with viewport height (vh) and a fixed value (rem) to set the height of an element. Let's dissect this step-by-step:

// h-[]:

// This is the syntax for defining a custom height in Tailwind CSS.
// Within the square brackets [], you can specify any valid CSS for the height.

// calc():

// calc() is a CSS function that allows you to perform calculations to determine CSS property values.
// It is especially useful when you need a combination of different units, like percentages and pixels, to achieve a specific layout.


// Here's how it fits into the layout:

// Header: Fixed at the top, with a specific height (e.g., 6rem).
// Body: Takes up the remaining space below the header. By setting its height to calc(100vh - 6rem), you ensure that it fills the viewport height minus the height of the header.

// In this example:

// h-[calc(100vh-6rem)] sets the height of the Body component to the full viewport height minus the height of the header (assumed to be 6rem).
// This ensures the Body component fits perfectly in the available space, and its content can scroll independently of the header.