import React, { useState } from 'react'
import './App.css'

function getRandomKey(obj) {
  const SYMBOLS = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let randomKey = ''
  for (let i = 0; i < 7; i += 1) {
    randomKey += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
  }

  return randomKey in obj ? getRandomKey(obj) : randomKey
}

const foodDiaryDict = {
  '9jomn7m': {
    key: '9jomn7m',
    mealName: 'brekfast',
    mealTime: '10:00',
    mealDate: '30082022',
    mealKCallQuantity: 500,
  },
}

function addMealtoDiary(obj, mName, mTime, mDate, mKcall) {
  let key = getRandomKey(obj)
  let newMeal = {
    key: `${key}`,
    mealName: `${mName}`,
    mealTime: `${mTime}`,
    mealDate: `${mDate}`,
    mealKCallQuantity: `${mKcall}`,
  }

  return (obj[key] = newMeal)
  // console.log(obj)
  // return (obj = { ...obj, [key]: newMeal })
  // Object.values(obj).map((ev) => console.log(ev))
}

function getObjectKeys(obj) {
  return Object.values(obj)
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

function getDI() {
  const foodDiaryDict = [
    {
      key: '9jomn7m',
      mealName: 'brekfast',
      mealTime: '10:00',
      mealDate: '30082022',
      mealKCallQuantity: 500,
    },
  ]
  foodDiaryDict.map((item) => console.log(item))
  foodDiaryDict.map((item) => <GetItem item={item} />)
  // return (
  //   <li className="">
  //     {/* {console.log(item.mealName)} */}
  //     <span>{item.mealDate}</span>
  //     <span>{item.mealTime}</span>
  //     <span>{item.mealName}</span>
  //     <span>– {item.mealKCallQuantity} kcal</span>
  //     <button type="button" class="btn btn-danger btn-sm">
  //       x
  //     </button>
  //   </li>
  // )
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

// addMealtoDiary(foodDiaryDict, 'dinner', '15:00', '300822', 1000)

function App() {
  // const [count, valueCount] = useState(0)

  return (
    <>
      <div className="fooddiary-container p-3">
        <h2>Food Diary</h2>
        <h6>New Note</h6>
        <div className="fooddiary-inputs form-inline">
          <select class="form-select mb-3" aria-label="Default select example">
            <option selected>Breakfast</option>
            <option value="1">Lunch</option>
            <option value="2">Dinner</option>
          </select>
          <input type="date" class="form-control mb-3" value=""></input>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id=""
              aria-describedby="basic-addon3"
            />
            <span className="input-group-text" id="basic-addon3">
              kcal
            </span>
          </div>
          <button class="btn btn-primary mb-3" type="button">
            Add
          </button>
        </div>
        <div className="fooddiary-search">
          <input
            autoComplete="off"
            className="form-control"
            name="text"
            placeholder="Search..."
            defaultValue
          />
        </div>
        <ul className="fooddiary-info">
          {getDI()}
          {/* {getDiaryItem(foodDiaryDict, 'fooddiary-info')} */}
        </ul>
      </div>
    </>
  )
}

export { App }
