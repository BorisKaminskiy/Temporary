//App.js
//===========

const foodDiaryDict = {
  '9jomn7m': {
    key: '9jomn7m',
    mealName: 'Brekfast',
    mealDate: '2022-08-30',
    mealKCallQuantity: 500,
  },
}

function App() {
  const [foodItems, getFoodItems] = useState(foodDiaryDict)

  function create(key, { item }) {                                     //------> Создаю эту функцию, чтобы пробросить хук в другую компоненту
    getFoodItems({ ...foodItems, [key]: item })
  }

  return (
    <>
      <div className="fooddiary-container p-3">
        <h2>Food Diary</h2>
        <h6>New Note</h6>
        <FoodDiaryInputs dict={foodItems} create={create} />          //----> Прописиваю функцию create для этой компоненты

    </>
  )
}

//FoodDiaryInputs
//===============

export default function FoodDiaryInputs({ dict }, { create }) {       //----> Принимаю функцию create аргументом
  let mealItems = Object(dict)
  console.log(mealItems)
  const [mealName, getMealName] = useState('Brekfast')
  const [mealDate, getMealDate] = useState(getToday())
  const [mealKCallQuantity, getKCallQuantity] = useState()

  function MealNamesList() {
    const mealNameList = ['Breakfast', 'Lanch', 'Dinner']

    return (
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        value={mealName}
        onChange={(event) => {
          getMealName(event.target.value)
        }}
      >
        {mealNameList.map((item) => {
          return mealNameList.indexOf(item) === 0 ? (
            <option defaultValue={item} selected>
              {item}
            </option>
          ) : (
            <option defaultValue={item}>{item}</option>
          )
        })}
      </select>
    )
  }

  return (
    <div className="fooddiary-inputs form-inline">
      <MealNamesList handler={getMealName} />

      <input
        type="date"
        className="form-control mb-3"
        value={mealDate}
        onChange={(event) => {
          getMealDate(event.target.value)
        }}
      ></input>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id=""
          aria-describedby="basic-addon3"
          onChange={(event) => {
            getKCallQuantity(event.target.value)
          }}
        />
        <span className="input-group-text" id="basic-addon3">
          kcal
        </span>
      </div>
      <button
        className="btn btn-primary mb-3"
        type="button"
        onClick={(_) => {
          let key = String(getRandomKey(mealItems))
          let newMeal = {
            key: `${key}`,
            mealName: `${mealName}`,
            mealDate: `${mealDate}`,
            mealKCallQuantity: mealKCallQuantity,
          }

          create(key, newMeal)                                         //-------> Пытаюсь вызвать функцию create, браузер пишет <<create is not a function>> 
          console.log(key, newMeal)                                    // делал все по лекции, вроде каждую точку сравнил)))
        }}                                                             // 
      >
        Add
      </button>
    </div>
  )
}

