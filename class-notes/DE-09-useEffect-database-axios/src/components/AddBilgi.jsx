import { useState } from "react";

const AddBilgi = ({ postBilgi }) => {
  const[title,setTitle]=useState("")
  const[desc,setDesc]=useState("")

  //* aslinda home da yaptigimiz seyi burda da yazardik ama biz sayfadan sayfaya gecis yapmaliyiz.home da yapip buraya post ladik ve burda sadece cagirdik
  //   const postBilgi=async()=>{
  //   await axios.post(url,{title:"hayat bilgisi",description:"naber"})
  //   }
  //sonradan bu sekilde yazdik.yani ne girilirse onu yazsin asagiya dedik.direkt hayat agaci degilde, girileni yazsin demeliyiz.

  // const postBilgi = async (yeniVeri) => {
  //   await axios.post(url, yeniVeri);
  // };


//preventDefault ile hemen gitme bekle anlaminda yaziyoruz.simdi yeni bilgileri yazalim.database de title ve description basliklari vardi o basliklara yukaridaki kendi verilerimizi ekledik.
  const gonder=(e)=>{
    e.preventDefault()
    postBilgi({title:title,description:desc})
  }


  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>

      {/* asil database gonderme isini form yapiyor.ona onSubmit yapiyoruz */}
      <form onSubmit={gonder}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
{/* ustune gelince inputun,veriyi alalim icin onChange yapip tamircisi ile verileri al database gonder dedik */}
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            onChange={(e)=>setTitle(e.target.value)}
            required
          />
        </div>
        {/* required..giris zorunlu olsun */}

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>

          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            onChange={(e)=>setDesc(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBilgi;
