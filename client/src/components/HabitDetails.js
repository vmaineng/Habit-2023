import React from 'react'

function HabitDetails({habit}) {


  return (
    <div>HabitDetails{habit.title} {habit.description}</div>
  )
}

export default HabitDetails