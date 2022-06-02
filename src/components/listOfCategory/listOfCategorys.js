import React, { useState, useEffect, Fragment, } from "react";
import { AllCategory } from '../category/category'
import { Item, List } from "./styledListOfC";
import { Principal, Inside } from '../../styles/loader'

function useCategoriesData() {
    const [categories, setCategories] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(function () {
        setLoading(true)
        fetch('https://petgram-server-edsf8xpy2.now.sh/categories').then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    }, [])
    return { categories, loading }
}

const ListOfCategoriesComponent = () => {

    const { categories, loading } = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)



    useEffect(function () {

        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const RenderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading ? <Principal key='loading'> <Inside />
                </Principal> :
                    categories.map(category =>
                        <Item
                            key={category.id}
                        >
                            <AllCategory {...category} />
                        </Item>)
            }
        </List>
    )
    return (
        <Fragment>
            {RenderList()}
            {showFixed && RenderList(true)}
        </Fragment>

    )
}
export const ListOfCategories = React.memo(ListOfCategoriesComponent)