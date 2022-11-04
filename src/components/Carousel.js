import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import rateImg from '../img/rate.png'
import userImg from '../img/img_photo.png'
import userImg1 from '../img/img_photo1.png'


const CarouselItem = (props) =>{
    return(
        <div className="item">
        <div className="text-md-start text-center p-4">
            <Row>
                <Col lg={3} md={6} sm={6} className="d-flex d-md-flex justify-content-center">
                    <span style={{paddingTop:'4rem'}}>
                        <Image src={props.img} style={{width:'80px'}}/>
                    </span>
                </Col>
                <Col lg={8} md={6} sm={4} className="pt-4">
                     <span  className="d-flex d-md-flex justify-content-md-start justify-content-center" >
                        <Image src={rateImg} style={{width:'80px'}}/>
                    </span>
                    <p className='pt-3'>{props.text}</p>
                    <p>{props.bio}</p>
                </Col>
            </Row>
        </div>
    </div>
    )
}

const Carousel = () =>{
        return(
            <OwlCarousel className="owl-theme responsiveClass"
            nav={true}
            dots={false}
            loop={true} 
            autoPlay={true} 
            center={true}  
            responsive={
               {
               0: {
                   items : 0
               },
               480:{
                   items : 1
               },
               768:{
                   items : 1
               },
               1024:{
                   items : 1
               },
               1440:{
                items : 2.5
               }
               

               }}>
               <div>
               <CarouselItem 
                   img = {userImg}
                   text = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.”'
                   bio = 'Username 21, UK'
               />
               </div>
               <div>
               <CarouselItem 
                   img = {userImg1}
                   text = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.”'
                   bio = 'userName 32, Florida'
               />
               </div>
               <div>
               <CarouselItem 
                   img = {userImg}
                   text = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.”'
                   bio = 'UserName 26, Bekasi'
               />
               </div>
           </OwlCarousel>
        )
}

export default Carousel