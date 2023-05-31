
import Header from "../../components/header/Header"
import RecipeCard from "./RecipeCard"
import { HomeImg, ImgDiv } from './HomeStyles'
import homeSvg from "../../assets/home.svg"

const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {


  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${"pie"}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${"breakfast"}`;

 
 return (
    <div>
   
      <Header  />

      {[].length>0 ? (
        <div>
            <RecipeCard />
          
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
}

export default Home