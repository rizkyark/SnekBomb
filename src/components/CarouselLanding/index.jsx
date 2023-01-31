import Carousel from "react-bootstrap/Carousel";

function CarouselLanding() {
  const pic1 =
    "https://res.cloudinary.com/di6rwbzkv/image/upload/v1675003191/Snekbomb/b8e63bd8-6c73-4bec-9177-bf7b7d9e17bd_ojscoq.jpg";
  const pic2 =
    "https://res.cloudinary.com/di6rwbzkv/image/upload/v1675004720/Snekbomb/IMG_1129_i12fl2.jpg";
  const pic3 =
    "https://res.cloudinary.com/di6rwbzkv/image/upload/v1675002934/Snekbomb/238d33a6-2b67-4e72-ab60-03bf106658c1_wfk6qe.jpg";
  const pic4 =
    "https://res.cloudinary.com/di6rwbzkv/image/upload/v1675002986/Snekbomb/485d5f88-1abb-4a35-8725-957ae82995a5_jk1beu.jpg";

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={pic1} alt="First slide" />
        <Carousel.Caption>
          <h3>Seblak Bomb</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
          // height={520}
        />
        <Carousel.Caption>
          <h3>Pentol Bomb</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Chewsy Ball</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic4} alt="Third slide" />
        <Carousel.Caption>
          <h3>Basreng Bomb</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselLanding;
