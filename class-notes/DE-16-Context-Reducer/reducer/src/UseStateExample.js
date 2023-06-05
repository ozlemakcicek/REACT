import { useState } from "react";
import load from "./img/loading-loading-gif.gif";






const UseStateExample = () => {
 const[dogResim,setDog]=useState("")
 const[loading,setLoading]=useState(false)
 const[error,setError]=useState("")


  const fetchDog = () => {

setLoading(true)

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
    //  console.log(data)
    setDog(data.message)
    setLoading(false)
      })
      .catch(() => {
        setError("Dikkat URL de hata var")
     
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        //veriler gelirken basilamasin diye once veriler gelmeden basilamasin(disablede i true olsun) diyoruz.sonra veriler geldikten sonra tekrar basilabilsin diye fetch in ustune ve altina setLoading i false true yapiyoruz
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>

      {/* <img src={dogResim.message} alt="" /> */}
      {/* ya da bunun yerine yukarida hemen hallet ki burda sadece dogResim yaz*/}
      {loading && <img src={load} alt="" />}
      {dogResim && <img src={dogResim} alt="" />}
      {error && <h2>{error}</h2> }
    </div>
  );
};

export default UseStateExample;
