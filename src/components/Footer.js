import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Row, Col} from 'react-bootstrap';
import iconFb from '../img/icon_facebook.png'
import iconIg from '../img/icon_instagram.png'
import iconTwt from '../img/icon_twitter.png'
import iconMail from '../img/icon_mail.png'
import iconTwitch from '../img/icon_twitch.png'
import BlueRectangle from '../img/Rectangle74.png'


const Footer = () => {
    return(
        <Container className='pt-5 px-3'>
            <Row>
                <Col sm={3}>
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </Col>
                <Col sm={3} className='d-grid foot-nav'>
                    <HashLink to='/#our-services'>Our Services</HashLink>
                    <a href="#why-us">Why Us</a>
                    <a href="#testimonial">Testimonial</a>
                    <a href="#faq">FAQ</a>
                </Col>
                <Col sm={3}>
                <p>Connect with us</p>
                <div className="social-icon">
                    <SocialImage src={iconFb}/>
                    <SocialImage src={iconIg}/>
                    <SocialImage src={iconTwt}/>
                    <SocialImage src={iconMail}/>
                    <SocialImage src={iconTwitch}/>
                </div>
                </Col>
                <Col sm={3}>
                <p>Copyright Binar 2022</p>
                <img src={BlueRectangle} alt=""></img>
                </Col>
            </Row>
        </Container>
    )
}
const SocialImage = (props) => {
    return(
        <a href={props.linkTo}><img src={props.src} alt=""></img></a>
    )
}

export default Footer