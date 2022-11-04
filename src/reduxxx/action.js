/* eslint-disable no-undef */
import axios from "axios";
import CARS from "./type";

export const requestCars = (data) => async (dispatch) => {
    dispatch({
        type: CARS.LOAD
    })
    try {
        const url = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
        const json = await axios.get(url)
    setTimeout(() => dispatch({
            type: CARS.LOAD_SUCCESS,
            carsData : json.data,
            isError : false
        }),1000 )
    } catch (error) {
        dispatch({
            type: CARS.LOAD_SUCCESS,
            carsData : [],
            isError : true
        })
    }
}

export const filterCars = (state, data) => async (dispatch) => {
    dispatch({
        type:CARS.LOAD_FILTER
    })
    try {
        dispatch({
            type: CARS.DO_FILTER,
            filteredCars,
            isFilterError : false,
            
        })
    } catch (error) {
        dispatch({
            type: CARS.DO_FILTER,
            filteredCars : [],
            isError : true,
        })
    }
}

