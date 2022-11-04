/* eslint-disable no-undef */
import CARS from "./type";

const initialState = {
    carsData : [],
    filteredCars : [],
    isLoading : false,
    isError : false,
    isFilterLoading : false,
    isFilterError : false,
    searchFilter : (null),
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CARS.LOAD:
            return{
                ...state,
                isLoading: true,
                isError : false,
        }
        case CARS.LOAD_SUCCESS:
            return{
                ...state,
                carsData : action.carsData,
                filteredCars : action.carsData,
                isLoading : false
            }
        case CARS.LOAD_FILTER : 
            return{...state}
        case CARS.DO_FILTER:
            const data = state.carsData
            const filteredCars = data.filter((el) => el.capacity <= 2 && el.available === true )
            console.log(action.payload)
            return{
                ...state, 
                filteredCars, 
                isLoading : true,
                isFilterLoading : false,
                isFilterError : false,
                searchFilter : action.payload
            }
        default : 
            return state
    }
}

export default reducer