import React from 'react'
import {HeaderContainer, MainHeader} from "./HeaderStyles";
import Form from "./Form";

const Header = ({setQuery,setMeal,getData,mealTypes}) => {
  return (
   <HeaderContainer>
<MainHeader>Chef Enes'Recipes</MainHeader>

<Form  setQuery={setQuery}
getData={getData}
mealTypes={mealTypes}
setMeal={setMeal}
/>

   </HeaderContainer>
  )
}

export default Header