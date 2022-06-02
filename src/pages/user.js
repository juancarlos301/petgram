import React, { useContext, Fragment } from "react";
import { AppContext } from "../contex";
import ImgU from '../assets/user.png'
import { ImgUs, Div, ButtonOff } from '../styles/stylesUser'

export const User = () => {
    const { removeAuth } = useContext(AppContext)
    return (
        <Fragment>
            <Div>
                <ImgUs src={ImgU} />
            </Div>
            <Div>
                <ButtonOff onClick={removeAuth}>
                    cerrar sesión
                </ButtonOff>
            </Div>
        </Fragment>
    )
}