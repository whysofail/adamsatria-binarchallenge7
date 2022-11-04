import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCars,
  selectAllCars,
  selectFilteredCars,
} from "../redux/carsSlice";
import { SearchForm } from "./SearchForm";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FiUsers, FiSettings, FiCalendar } from "react-icons/fi";

const Car = () => {
  const cars = useSelector(selectAllCars);
  const filteredCars = useSelector(selectFilteredCars);
  const carsStatus = useSelector((state) => state.cars.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (carsStatus === "idle") {
      dispatch(fetchCars())
    }
  }, [carsStatus, dispatch]);
  return (
    <>
      <SearchForm />
      <Container className="py-5">
        <Row>
          {filteredCars.map((cars, i) => (
            <Col sm={4} className="mb-3" key={i}>
              <Card className="carCard">
                <Card.Img src={"." + cars.image} />
                <Card.Body>
                  <Card.Text>
                    {cars.manufacture} {cars.model}
                  </Card.Text>
                  <Card.Title>
                    {currencyFormat(cars.rentPerDay)} / hari
                  </Card.Title>
                  <Card.Text className="carsDescription">
                    {cars.description}
                  </Card.Text>
                  <div className="d-grid">
                      <p><span><FiUsers size={20}/></span> {cars.capacity} orang </p>
                      <p><span><FiSettings size={20}/></span> {cars.transmission}</p>
                      <p><span><FiCalendar size={20}/></span> Tahun {cars.year}</p>
                  <Button variant='success' className=''>Pilih Mobil</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
const currencyFormat = (e) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(e); //Currency Formatting

export default Car;
