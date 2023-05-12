
const Card = (data) => {
    // console.log(data);
  return (
    <div className="cards">

       <div className="title">
        <h1>{data.title}</h1>
       </div>

       <div className="date">
       <h1>{data.date}</h1>
       </div>

       <img src={data.image} alt="" className="image" />

       <div className="card-over">
        <p>{data.desc}</p>
       </div>
        {/* // gelen data artik dizi degil obje o yuzden index[] yazmyrz.data.js de ne varsa adlarini data. ile cagir */}
   
    </div>
  )
}

export default Card