import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AccordionBs from './AccordionBs';

const Faq = () =>{
        return(
            <div id="faq">
            <Container>
                <Row>
                    <Col sm={6} className='text-md-start text-center'>
                        <h2>Frequently Asked Questions</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </Col>
                    <Col sm={6}>
                       <AccordionBs />
                    </Col>
                </Row>
            </Container>
            </div>
        )
}
export default Faq