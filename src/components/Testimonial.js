import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'owl.carousel/dist/assets/owl.carousel.css';  
import Carousel from "./Carousel";
import CardSewa from "./CardSewa";



const Testimonial = () =>{
        return(
            <div id="testimonial">
            <Container fluid>
                <Row>
                    <Col className="text-center">
                        <h2>Testimonial</h2>
                        <p>Berbagai review positif dari para pelanggan kami</p>
                    </Col>
                </Row>
                <Carousel />
                <CardSewa />
            </Container>
          
            </div>
        )
}

export default Testimonial