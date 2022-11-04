import React from "react";
import iconCheck from '../img/icon_check.png'

const CheckList = (props) =>{
        return(
                <li>
                    <img src={iconCheck} alt={iconCheck} />
                    <span>{props.text}</span>
                </li>
        )
}

export default CheckList