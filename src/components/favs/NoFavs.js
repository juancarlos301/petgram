import React from "react";
import { Div, Img } from "./stylesNoFavs";
import sadPet from '../../assets/logo192.png';
export const NoFavs = () => {
    return (
        <Div>
            <Img src={sadPet} alt="Sad pet" />
        </Div>
    );
};