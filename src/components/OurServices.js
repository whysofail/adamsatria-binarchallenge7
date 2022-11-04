import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgGirl from '../img/Group54.png'
import CheckList from "./CheckList";

const OurServices = () =>{
        return(
            <div id="our-services"> 
                <Container className="py-5 py-sm-0 mb-2">
                    <Row>
                        <Col sm={6}><Image src={imgGirl} fluid={true}/></Col>
                        <Col sm={6} className="ourRight">
                        <h2>Best Car Rental for any kind of trip in Bogor!</h2>
                        <p>Sewa mobil di Bogor bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul className="d-grid gap-4 checkList">
                            <CheckList 
                            text = "Sewa Mobil Dengan Supir di Bali 12 Jam"
                            />
                             <CheckList 
                            text = "Sewa Mobil Lepas Kunci di Bali 24 Jam"
                            />
                             <CheckList 
                            text = "Sewa Mobil Jangka Panjang Bulanan"
                            />
                             <CheckList 
                            text = "Gratis Antar - Jemput Mobil di Bandara"
                            />
                             <CheckList 
                            text = "Layanan Airport Transfer / Drop In Out"
                            />
                        </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default OurServices