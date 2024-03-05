
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image1 from "./Image/Img1.jpg";
import image2 from "./Image/Img2.jpg";
import image3 from "./Image/Img3.jpg";
function Content() {
  return (
    <Container>
      <Row>
        <Col xs={4} >
          <Image src={image1} rounded />
        </Col>
        <Col xs={4} >
          <Image src={image2} rounded />
        </Col>
        <Col xs={4} >
          <Image src={image3} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Content;