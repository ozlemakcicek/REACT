import React from 'react'
import { Button, Cards, MainContainer, RecipeHeader, RecipeImage } from './HomeStyles'
import { useNavigate } from 'react-router-dom';


// home dan gonderilen yemekleri karsila
const RecipeCard = ({yemekler}) => {
  console.log(yemekler);
const navigate=useNavigate()
// gelen yemekler dizisinin icinde map ile dollasalim
  return (
    <MainContainer >
{yemekler.map((i)=>

(
  <Cards key={i.recipe.id}>
        <RecipeHeader>{i.recipe.label}</RecipeHeader>
        <RecipeImage src={i.recipe.image}/>
        <Button onClick={()=>navigate("/details", {state:{i}})}>Details</Button>
      </Cards>
)

)}

{/* eger api den birden fazla api varsa navigate ile giderken yoldan sonra {state:{i}} seklinde yazariz.i burda map ile dolastigimiz dizide tikladigimiz eleman.yeni bir fetch islemi yapmayiz bu sekilde.yola da ek bisey yazmiyoruz.bu yolu daha onceki proje lerde de yapablrz ama onlari burda kullanamazdik.iki defa fetch yapilan yol tek bir apiden lazim olan seyler icin idi ama burda api icinde yeni bir apiden al diyoruz.karsilarken ise useLocation ile karsilanir.digerlerinde useParams ile gonderilen {name} i yakaliyorduk. */}
  
    </MainContainer>
  );
}

export default RecipeCard