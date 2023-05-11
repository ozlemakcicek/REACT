// import React from 'react'

import { Button, Card, Col, Container, Row } from "react-bootstrap";


// const CourseCard = (props) => {

//   console.log(props);  // bunu muhakkak yazmamiy lazim ki bize ne gondermis bakalim.mesela burda bir dizi gondermis..Bir obje gonderseydi props.name ile ekrana bastirirdik ama dizi de asagidaki gibi
//   console.log(props.data[0].name);
//   return (
//     <div></div>
//   )
// }
// bu bir yol ama bastan parcalama da su sekilde.3.yolu kullaniyoruz..


const CourseCard = ({data}) => {

  console.log(data);  // bunu muhakkak yazmamiy lazim ki bize ne gondermis bakalim.mesela burda bir dizi gondermis..Bir obje gonderseydi props.name ile ekrana bastirirdik ama dizi de asagidaki gibi
  console.log(data[0].name);

  //! alttaki ilk return react in ekrana bastirilan kismi
  return (
    <Container>
      {/* dizide dolasmak icin bir container,altina row,altina da icinde dolasacagimiz(sadece map ile dolasir) veri kaynagini yazip oraya bir colon acip veri.name,veri.text gibi seyler yazacagiz.divi i container yapacagiz ve bunlari react bootstrap seklinde byk harfle yaziyoruz.acmali kapamali olacaklar.component degil o yuzden div gibi acmali kapamali olacak */}

      {/* react alaninda dongulerden sadece map desteklenir.condition lardan da sadece ternary desteklenir */}

<Row className="g-3 text-center ">
{data.map(({img,text,name,id})=>{
  // {data.map((veri))} seklinde de yazip asagida veri.name veri.img yazabiliriz ama b8u daha kisa yol. fonksiyonda {} acarsak return ister mecburen.
  //! bu return arrow (map) suslu kullanildiginda return ister.onun return u. ama buna engel olmak icin react a ozel suslu yu kullanmayip return u de kaldirabiliriz.tek bir eleman dondurulunce susluye gerek yoktu js de.burda da aslinda sadece col donduruyor bir tane yine:)

  //?database den çekilen veriler ekrana bastırılırken, en dış div unique bir veri ister bunu da key={id} şeklinde yazarız. id olmak zorunda değil unique herhangi bir property olabilir, mesela img
  return (
    <Col 
    className="d-flex justfy-content-center col-sm-12 col-md-6 col-lg-4"
    key={id}  
    // sm={12} md={6} lg={4} 
    > 
     {/* div den sonraki en dis etiketimiz bu Col.buna bir key vermeliyiz.yoksa console da surekli bir uyari verir. o zaman da netlify da paylasamayiz.id yazabiliriz ya da daha guvenlisi unutursak id yazmayi key={name} yazablrz.yukariya da ekleriz*/}
      {/* responsive lik acisindan normal bootstrap de kullanabilirsin. */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="info">Detaylar</Button>
            {/* bunu kendimiz ekledik */}
          </Card.Body>
        </Card>
      </Col>
    
  );
})}

</Row>
    </Container>
  )
}

export default CourseCard

