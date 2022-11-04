import React from "react";
import {Accordion} from "react-bootstrap";

const AccordionItem = (props) => {
    return (
            <Accordion.Item eventKey = {props.id}>
                <Accordion.Header>{props.header}</Accordion.Header>
                <Accordion.Body>{props.body}</Accordion.Body>
            </Accordion.Item>
    )
}

const AccordionBs = (props) => {
    return(
    <Accordion defaultActiveKey='0'>
    <AccordionItem 
        id = '0'
        header = "Apa saja syarat yang dibutuhkan?"
        body = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nihil voluptates nobis sed quis, voluptatem ipsam quisquam porro iusto nam aut corrupti nesciunt repellendus architecto, cum vero culpa dignissimos explicabo!  " 
    />
    <AccordionItem 
        id = '1'
        header = "Berapa hari minimal sewa mobil lepas kunci?"
        body = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nihil voluptates nobis sed quis, voluptatem ipsam quisquam porro iusto nam aut corrupti nesciunt repellendus architecto, cum vero culpa dignissimos explicabo!  " 

    />
      <AccordionItem 
        id = '2'
        header = "Berapa hari sebelumnya sabaiknya booking sewa mobil?"
        body = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nihil voluptates nobis sed quis, voluptatem ipsam quisquam porro iusto nam aut corrupti nesciunt repellendus architecto, cum vero culpa dignissimos explicabo!  " 

    />
      <AccordionItem 
        id = '3'
        header = "Apakah Ada biaya antar-jemput?"
        body = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nihil voluptates nobis sed quis, voluptatem ipsam quisquam porro iusto nam aut corrupti nesciunt repellendus architecto, cum vero culpa dignissimos explicabo!  " 

    />
      <AccordionItem 
        id = '4'
        header = "Bagaimana jika terjadi kecelakaan"
        body = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt nihil voluptates nobis sed quis, voluptatem ipsam quisquam porro iusto nam aut corrupti nesciunt repellendus architecto, cum vero culpa dignissimos explicabo!  " 

    />
    </Accordion>
    )
}

export default AccordionBs