import React  from 'react';
import { Container, Button } from 'react-bootstrap';

const CardSewa = () =>{
        return(
            <Container className='mb-2'>
                <Container className='sewa-card p-4 py-5 text-center d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='display-5 fw-bold'>Sewa Mobil di Bogor Sekarang</h1>
                    <p className='col-md-6 pt-3 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor non, exercitationem provident explicabo asperiores voluptatum facere nulla ipsam eos adipisci sapiente? Repellendus modi tempore, eum corporis fugit esse. Voluptatibus, dicta.
                    </p>
                    <Button variant='success'>Mulai Sewa Mobil</Button>
                </Container>
            </Container>
        )
}

export default CardSewa