// burda da veri grisini etkinlestirelim.diziye eleman ekleme


// bir diziyi propssuz ele gecirmenin yolu useSelector()
import { useDispatch, useSelector } from "react-redux";
import { ekle } from "../../redux/actions/todoActions";




const TodoInput = () => {

//*state alanindan gelen todoReducerdaki gorevler dizisini getir diyoruz
const gorevler2 = useSelector((state)=>state.todoReducer.gorevler)

    const dispatch=useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();


dispatch(ekle(gorevler2.yazi))
  
  };
  return (
    
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
       
         onChange={(e)=>gorevler2.yazi=e.target.value}
       // burasi yeni veri giris sayfasi input.dedikki; buraya gelen ve adina gorevler2 dedigimiz dizinin icini inputtan giren veri ile degistir.Fakat sadece bu yeterli degil asil isi yapan reducera ulastirmamiz geri donmemiz lazim.once actiona goturup isleyelim.sonra reducer da islemi yapalim ve tekrar bunu gorebilmek icin bu fonksiyonu oyuncu da disparch ile sarmallayalim ve bu fonksiyonu import edelim
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
