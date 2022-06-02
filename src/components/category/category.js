import React from "react";
import img from '../../assets/logo192.png'
import { Link, Image } from "./styleCategory";

const Default_Image = img


export const AllCategory = ({ cover = Default_Image, id }) => (
    <Link to={`/detail/${id}`}>
        <Image src={cover} />
    </Link>
)