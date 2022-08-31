import React, { useState } from 'react'
import './App.css'


const foodDiaryDict = {
  '9jomn7m': {
    key: '9jomn7m',
    mealName: 'brekfast',
    mealTime: '10:00',
    mealDate: '30082022',
    mealKCallQuantity: 500,
  },
}


function GetItem({ item }) {
  return (
    <li className="">
      {/* {console.log(item.mealName)} */}
      <span>{item.mealDate}</span>
      <span>{item.mealTime}</span>
      <span>{item.mealName}</span>
      <span>– {item.mealKCallQuantity} kcal</span>
      <button type="button" class="btn btn-danger btn-sm">
        x
      </button>
    </li>
  )
}


function getDiaryItem(obj, classDescription) {
  let items = Object.values(obj)

  items.map((item) => {
    return (
      <li className={classDescription}>
        {console.log(item.mealName)}
        <span>{item.mealDate}</span>
        <span>{item.mealTime}</span>
        <span>{item.mealName}</span>
        <span>– {item.mealKCallQuantity} kcal</span>
        <button type="button" class="btn btn-danger btn-sm">
          x
        </button>
      </li>
    )
  })
}


function App() {
  // const [count, valueCount] = useState(0)

  return (
    <>

        <ul className="fooddiary-info">
          {getDiaryItem(foodDiaryDict, 'fooddiary-info')}
        </ul>
      </div>
    </>
  )
}

export { App }
