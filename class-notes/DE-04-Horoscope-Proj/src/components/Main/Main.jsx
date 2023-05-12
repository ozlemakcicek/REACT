import './Main.scss'
import {data} from "../../helpers/data"
import Card from './Card';
//* data.js deki bastaki export kalmali.ya da en sonuna export default data yazmalisin yoksa almaz

const Main = () => {
    // console.log(data);
  
    return(
        <div className="card-container">
        {/* <h1> {data[0].title}</h1> */} 
    {/* <h1>{data[1].title}</h1> */}
    {/* bu bir array dizi old icin index belirterek cagirmaliyizbunun yerine data.map ile dolasalim */}
      
       {data.map((item, id)=> <Card {...item} key={id}/>)}
        </div>

        //* Card i hazir acik calisan diger kardesi(Main) uzerinden calistirdik
        //* ...item ile ne varsa icerisinde dedik.tek tek yazmadik
    )

}

export default Main