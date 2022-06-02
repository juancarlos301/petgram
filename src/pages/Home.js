import React, { Fragment } from "react";
import { ListOfCategories } from "../components/listOfCategory/listOfCategorys";
import { ListOfPhotoCards } from "../components/listOfPhotocards/listOfPhotocards";
import { useParams } from 'react-router-dom'


export const Home = () => {
    const params = useParams();
    return (
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.id} />
        </Fragment>
    )
}
