
import React from 'react'
import { useLocation } from 'react-router-dom'
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './DetailsStyles';
import dietSvg from "../../assets/diet.svg";
const Details = () => {
  const location = useLocation();
  // geçerli URL'yi temsil eden konum nesnesini döndürür
  const recipe = location.state.recipe1;
  // navigate("/details", { state: { recipe } }); recipecard da bütün data json formatında state e gömülmüştü

  console.log(recipe);

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1> {recipe.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <>Nutrients</>
          <p>
            {recipe.totalNutrients.CA.label} :
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight}</p>
          <p>Calories: {Math.round(recipe.calories)}</p>
          {recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img src={recipe.image} alt={recipe.label} />
        </ImgContainer>

        <IngredContainer>
          {recipe.ingredientLines.map((malzeme, index) => (
            <div key={index}>
              <p>
                {index + 1} * {malzeme}
                {/* ingredientLines içinde bir sürü obje var tek tek yazdır, başına no ekle 1*{malzeme} gibi */}
              </p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details