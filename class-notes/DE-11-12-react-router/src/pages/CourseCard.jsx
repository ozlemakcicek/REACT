import {Container,Col,Card,Row,Button} from 'react-bootstrap'
import data from "../data"


import {useNavigate} from "react-router-dom";
// Link ya da NavLink kullanmayacaksak useNavigate kullaniriz.bunu import ederiz ve onu da bir degiskene atariz







const CourseCard = () => {
  //!react-bootstrap ten CourseCard componenti
  //!
// useNavigate i bir degiskene atariz asagidaki gibi
const navigate=useNavigate()


  return (
    <Container className="text-center mt-4 p-4 ">
      <Row className="g-3">
        {data.map(({ img, name, text, id }) => {
          return (
            <Col sm={12} md={6} lg={4} key={id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>

                  <Button variant="danger"
                  onClick={()=>navigate(`/courses/${name}`)}

                  //data dan veri cekip bunu courses(yani o aslinda CardDetails syfasi) sayfasina gonderecegiz ama bu data da bir degisken oldugu icin ve biz bu degiskenin karsiligini(html kelimesini) gonderecegimiz icin,biraz degsken biraz kelime olunca backtick icinde /${} icinde yazilir.gonderme isini yalniz bu sayfa degilde App.js yapar.bu sayfa yol belirler.App.js de ise Route ile karsilayip yonlendirirken /:name diye yaziyoruz. 
                 
                  >DETAYLAR</Button>
                </Card.Body>
              </Card>
            </Col>
            
          );
        })}
      </Row>
    </Container>
  );
}

export default CourseCard

// butona tiklayinca tiklanan kisinin adini da alarak details sayfasina gonderecek.mecburen burda degsiken adini yaziyoruz.bu url deki gonderilen degiskeni de details sayfasinda useParams ile yakala, al.