import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterCars } from "../redux/carsSlice";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [driverType, setDriverType] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState('');
  const [capacity, setCapacity] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onCapacityChanged = (e) =>{ setCapacity(e.target.value);e.preventDefault()};
  const onDriverTypeChanged = (e) => setDriverType(e.target.value)
  const onDateChanged = (e) => setDate(e.target.value)
  const onTimeChanged = (e) => setTime(e.target.value)
  

  const onSearchClicked = (e) => {
    e.preventDefault()
    dispatch(filterCars({ driverType, time, date, capacity  }));
  };
  return (
    <Container>

    <Form className="searchCard p-3" onSubmit={onSearchClicked}>
    <Row className="mb-3 justify-content-around">
        <Form.Group as={Col} sm={2} controlId="formGridCity">
          <Form.Label>Tipe Driver</Form.Label>
            <Form.Select name="driverType" id="driverType" value={driverType} onChange={onDriverTypeChanged}>
                    <option default>Pilih tipe Driver</option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Lepas Kunci</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} sm={2} controlId="formGridDate">
          <Form.Label>Tanggal</Form.Label>
          <FormControl type='date' value={date} onChange={onDateChanged} placeholder="asd"/>
        </Form.Group>

        <Form.Group as={Col} sm={2} controlId="formGridTime">
          <Form.Label>Waktu Jemput/Ambil</Form.Label>
            <Form.Select name="time" id="driverType" value={time} onChange={onTimeChanged}>
                <option>Pilih Waktu</option>
                <option value="8">08.00</option>
                <option value="9">09.00</option>
                <option value="10">10.00</option>
                <option value="11">11.00</option>
                <option value="12">12.00</option>
            </Form.Select>
        </Form.Group>
        
        <Form.Group as={Col} sm={2} controlId="formGridZip">
          <Form.Label className='text-nowrap'>Jumlah Penumpang(Optional)</Form.Label>
          <Form.Control type="number" value={capacity} onChange={onCapacityChanged}/>
        </Form.Group>

       <Form.Group as={Col} sm={1} className="d-flex align-items-end">
      <Button variant="primary" onClick={onSearchClicked} >
        Submit
      </Button>
      </Form.Group>
      </Row>
    </Form>
    </Container>
    
    // <div>
    // <input type="text" placeholder='Capacity' value={capacity} onChange={onCapacityChanged}/>
    
    // </div>
  );
};
