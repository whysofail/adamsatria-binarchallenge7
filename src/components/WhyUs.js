import React from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import iconComplete from '../img/icon_complete.png'
import iconPrice from '../img/icon_price.png'
import iconClock from '../img/icon_24hrs.png'
import iconPro from '../img/icon_professional.png'


const WhyUs = () =>{
        return(
            <div id="why-us">
                <Container>
                    <Row className="text-md-start text-center py5">
                        <h2>Why Us</h2>
                        <p>Mengapa harus Binar Car Rental?</p>
                    </Row>
                    <Row>
                        <Cards 
                        src={iconComplete}
                        cardTitle="Mobil Lengkap"
                        cardText="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
                        />
                        <Cards 
                        src={iconPrice}
                        cardTitle="Harga Murah"
                        cardText="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
                        />
                        <Cards 
                        src={iconClock}
                        cardTitle="Layanan 24 Jam"
                        cardText="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
                        />
                        <Cards 
                        src={iconPro}
                        cardTitle="Sopir Profesional"
                        cardText="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
                        />
                    </Row>
                </Container>
            </div>
        )
}
export default WhyUs