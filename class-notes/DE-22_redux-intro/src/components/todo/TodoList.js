
//! Todo.js de TodoInput(inputlari girme) ve TodoList(ekrana bastirma) var.istediginden basla 
// bir dizi olusturup done done ekrana bastiralim ama once action ve reducer sayfalarinda biseyleri baslat.todo da sadece ekle diye bir fonksiyon var.ekrana bastirma icin todoReducer a git


import { temizle } from "../../redux/actions/todoActions";
import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from "react-redux"


const TodoList = () => {
//ekrana bastirma sayfasinda olustrudugumuz diziyi useSelector ile cagiralim.todoReducerda actigin alandaki gorevleri getir diyoruz 

const gorevler1=useSelector((state)=>state.todoReducer.gorevler)
 console.log(gorevler1);
// dizide don ve herbir gorevi TodoItem sayfasina props mantigi ile gonder.burda da bastirabiliriz
 

const dispatch=useDispatch()
return (
    <div>
      <div>
        {gorevler1.map((gorev) => (
          <TodoItem gorev={gorev} key={gorev.id} />
        ))}

     
      </div>

      {/* temizle fonksiyonun kullanmak icin cagiracagiz.oncee dispatch anahtarini al ve asagida fonksiyonla beraber kullan importunu yap */}
      <div className="clear-wrapper">
        <button className="clear-button"
     onClick={()=>dispatch(temizle())}
        
        
        >Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
