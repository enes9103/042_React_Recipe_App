import axios from 'axios';
import React, { useState } from 'react'
import Header from "../../components/header/Header";

//bfbb3efc
const APP_ID = "92380d2d";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";



const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState([]);
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
    }
  }

  return (
    <div>
      <Header setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal} />



    </div>
  )
}

export default Home