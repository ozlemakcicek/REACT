import React, { useContext,useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { AuthContex } from "../context/AuthContext";

import MovieCard from "../components/MovieCard";
import { toastWarnNotify } from "../helpers/ToastNotify";

// butona tiklayinca veya enter yapinca verilerin gelmesini sitiyoruz.bu sefer SEARCH_API den gelecek.Bu biraz daha farkli sonuna api_key alacak ve birde query alacak.Query demek;hangi api ise onu sonuna eklemek demekYani bizim kullanicinin girdigi inputtaki degeri yakalayip querynin sonuna eklememiz lazim.once usestate ile yakalayalim girilen degeri asagida

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;


// olusturulan contexti verilerin sergilenecegi sayfada useContext ile gonderilen value lari cek.icine de hangi sayfayi kullanacaksan onu yaz


const Main = () => {
  
  const {movie,loading,getMovies} = useContext(MovieContext)
  console.log(movie);

const {currentUser} = useContext(AuthContex)
  //inputa girilen degeri yakalamak icin...
  const [searchTerm, setSearchTerm] = useState("")
  //search edebilirz direkt onSubmit olunca veya bazi sartlar koyablrz.kullanici loginse,ve kullanici biseyler yazmissa inputa arama yapablsin.Aksi durumu da,searchTerm var,currentUser yoksa logout ise,else if ile yazalim ve log in uyarisi verelim.searchTerm de yoksa yine uyari versin
  //Ve getMovies in icerisine url olarak SEARCH_API yi ve sonuna da query olarak searchTermi aradigi movie yi ekleyecegz.currentUser i da AuthContext den cekmemiz lazim yukarida 
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(searchTerm&&currentUser){
      getMovies(SEARCH_API + searchTerm)
    }else if(!currentUser){
toastWarnNotify("Please log in to search a movie")
    }else{
      toastWarnNotify("Please enter a text")
    }
  }
  return (
    <>
    {/* search butonu icin...form yapisi enter ile submit yapablyrz butona gerek yok.type=search ise otomatik silebiliyoruz*/}
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={e=>setSearchTerm(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>

      {/* datalari sergileyecegiz burda.loading true ise spinner i goster,false ise verileri goster diyecgz.spinner in kodunu bootstrapde de tailwind de de var */}

      <div className="flex justify-center flex-wrap">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          // movie.map((movie)=>null) ilk hali idi

          movie.map((movie) => <MovieCard key={movie.id} {...movie} />)
          //direkt acarak gonderdik movie propsunu.butun datayi gonderdik.movie={movie} de denilebilr ama karsilarken bikac katman daha olurdu.acarak gondererek ise bir obje seklinde gonderdik ve karsilarken de propsun icinden falna demeden dogrudan istediklerimizi yazdik.hata vermesin diye de key vermemiz lazim
        )}
        {/*map ile dolasstigi herbir movie yi card seklinde bassin istyrz o yuzden bir card componenti olusturuyoruz MovieCard diye */}
      </div>
    </>
  );
};

export default Main;
