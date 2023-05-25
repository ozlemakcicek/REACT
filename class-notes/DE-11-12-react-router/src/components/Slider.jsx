import {Carousel} from 'react-bootstrap'




const Slider = () => {
  // !!!!!!!!!!!
  //! fade=soluklaşarak diğer resme geç, autoPlay={true} otomatik resim değiş, interval={5000} 5 saniyede bir değiş
  return (
    <Carousel fade autoPlay={true} interval={5000}>
      <Carousel.Item>
        <img className="d-block w-100" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider