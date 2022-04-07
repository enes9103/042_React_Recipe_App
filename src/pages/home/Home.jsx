import axios from 'axios';
import React from 'react'
import Header from "../../components/header/Header";

//bfbb3efc
const APP_ID = "92380d2d";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";



const Home = () => {


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  
  const getData = async () => {
       const result=         await  axios.get(url);
console.log(result);

  }
  
  return (
    <div>
<Header/>



    </div>
  )
}

export default Home