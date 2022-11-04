import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import carImg from '../img/img_car.png'

const Header = () => {
    const location = useLocation()
    const locationLength = location.pathname.length
    const isHomepage = locationLength > 1 // path = '/'
        return(
            <div id="header">
            <Container fluid>
                <Row className="d-flex justify-content-between">
                    <Col sm={2} />
                    <Col sm={4} className="headerLeft">
                        <Row>
                            <Col sm={12}>
                                <h1>Sewa & Rental Mobil Terbaik di Kawasan Bogor</h1>
                            </Col>
                            <Col sm={9}>
                            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            {!isHomepage && <NavLink to='/search'><Button variant='success'>Cari Mobil</Button></NavLink>}
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} className="headerRight">
                        <Image src={carImg} fluid={true}></Image>
                    </Col>
                </Row>
            </Container>
            </div>
        )
}

export default Header