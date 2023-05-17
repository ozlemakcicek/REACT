import Container from "react-bootstrap/esm/Container"
import {data} from "../helpers/data";
//; ler cok onemli.bunu gonderirken sadece export olarak gonderiyor data.js o yuzden {} icindeyazariz.export default olsaydi aciktan yazardik
import PlayerCard from "./PlayerCard";
import {useState  } from "react";

import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Form from "react-bootstrap/esm/Form";

const CardContainer = () => {
  console.log(data);
  const [search, setSearch] = useState("");
  console.log(search);

  //? bu alternatif yöntemi kullansaydık jsx içerisinde data yerine filteredData'yı map etmemiz gerekirdi
  //   const filteredData = data
  //   .filter((player) =>
  //     player.name.toLowerCase().includes(search.trim().toLowerCase())
  //   )

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        className="w-50 m-auto"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="g-3 justify-content-center">
          {/* {data.map((player)=>(
    <p>{player.name}</p>
) )}*/}

          {/* {data.map((player)=>{
    return <p>{player.name}</p>
})} */}

          {data
            .filter((player) =>
              player.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((player, index) => {
              {
                /* return <PlayerCard player={player}/>; */
              }
              return (
                <Col key={index} md={6} lg={4} xl={3}>
                  <PlayerCard {...player} />
                </Col>
              );
            })}
          {/* {filteredData.map((player, index) => {
              return (
                <Col key={index} md={6} lg={4} xl={3}>
                  <PlayerCard {...player} />
                </Col>
              );
              })} */}
        </Row>
      </Container>
    </>
  );
};
export default CardContainer;


//?{...player} demek aslinda player.img , player.name in kisaltilmis hali
//* map ile dolasirken ya direkt=>() ile yapariz ya da {} icinde return ile devam ederiz.burda <PlayerCard ile bir component yapip ona baglayacagiz ve ordan devam edecegiz

//! responsiv lik icin bootstrap deki row-col yapisini kullnalim.row u inport et.herbir player card i bir column yapisi ile saracagiz.key i de artik playercarddan buraya aliyoruz.md, lg, lerdekini de belirleyelim