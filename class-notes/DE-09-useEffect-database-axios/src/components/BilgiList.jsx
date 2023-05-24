
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
//delete icin import etmemiz lazim axios u bu sayfada

//suslu icinde, gelen bilgiyi orda mavi ile gonderileni karsiladik
const BilgiList = ({bilgiler,getBilgiler}) => {
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  // home dan gelen bilgileri {} ile karsilarsak gonderilen isimle kilciksiz gelir.

console.log(bilgiler);

// delete icin bu ana sayfada yapalim dedik.home da degilde.cop kutulari burda cunku ama axios u import etmemiz lazim buraya...delete in kurgusu asagida.bununla database den sileriz.ekrani guncelle icin ise

const deleteBilgi=async(id)=>{
  await axios.delete(`${url}${id}/`)
  getBilgiler()
}

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr >
        
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
        
        {/* dolasma isini burda yapiyoruz */}
          {bilgiler.map((eleman) => {
          
            return (
              <tr key={eleman.id}>
           
                <th>{eleman.id}</th>
                <td>{eleman.title}</td>
                <td>{eleman.description} </td>
                <td className="text-center ">
                  <AiFillDelete
                    type="button"
                    size={22}
                    className="text-danger cursor-pointer"
                    //!burada id göndermek zorunda değiliz title da gönderilebilir
                    //cop kovasi bolumu burasi
                    onClick={()=>deleteBilgi(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
   
    
    </div>
  );
};

export default BilgiList;
