import React from "react";
import { Card } from "react-bootstrap";

const Cards = (props) =>{
        return(
            <div className="cardContainer col-lg-3 col-md-6 col-sm-3 pb-3 d-flex justify-content-lg-between justify-content-center">
            <Card>
                <Card.Img src={props.src} alt={props.alt}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.cardTitle}</Card.Title>
                    <Card.Text>{props.cardText}</Card.Text>
                </Card.Body>
            </Card>
            </div>
        )
}

export default Cards