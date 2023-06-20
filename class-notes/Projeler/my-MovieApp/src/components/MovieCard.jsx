import React from 'react'
import { useNavigate } from 'react-router-dom';



const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";


// MoviCard componentini cagirdigimiz yerden yani Main componentinden map ederken gelecek olan propslari  yakalamamiz lazim burda ve ordanda MovieCard i cagirip propslari gonderecegiz.null yerine propslari yazacagiz ve ya direkt acip gondeririz
const MovieCard = ({title,poster_path,overview,vote_average, id}) => {

    const navigate=useNavigate()
  return (
    //details sayfasina gitmek icin kapsayici dive onClick yapip navigate ile yonlendirme yapmaliyiz.Link statik yerlerde(a tagi,yazi..) kullanilir,bir methodla beraber yonlendirmelerde ise navigate kullaniriz.detailsden sonra ne gelirse gelsinRouter sayfasina gore MovieDetail sayfasina gider
    // basina / koymamiz home sayfasina git demk.absolute path demek.sonuna koyarsak relativ demek yani hangi sayfada isen onuun uzerine ekler.fark etmez burda aslinda cunku home dayiz zaten.

    <div className="movie" id="container" onClick={()=>navigate("details/" + id)}>

    {/* data da bir image url si yok.poster_path  vermis yani url in sonuna eklenecek birsey vermis.read me de bir IMG_API vermis ve kullanimini da gostermis.sonuna {poster_path} eklemis. ama bazi image lerde poster_path yok o yuzden  poster_path varsa,sonuna ekle API nin yoksa default bir img goster dedik.internetten bir default image aldik adresi yukarida */}
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
      {/* cardimizin bir title i,vote_average ve overview i var.overview css olarak movie-over classina sahip o.i. uzerine gelince ortaya cikar yalniz */}
        <h5>{title}</h5>

        <span className={`tag `}>{vote_average.toFixed(1)}</span>
        {/* toFixed ile tasmayi onleyip herkesin durumunun standart olmasini saglariz */}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard

//artik MovieDetail syfamizi yapalim