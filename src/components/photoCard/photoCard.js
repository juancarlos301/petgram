import React, { Fragment } from "react";
import { ImgWrapper, Img, Article } from "./styledPhotoCard";
import { useNearScreen } from "../../hooks/useNearScreen"
import { FavButton } from "../likes/likePhoto";
import { TogleLikeMutation } from "../../containers/togleLikeMutation";
import { Link } from "react-router-dom";


const default_Image = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = default_Image }) => {

    const [show, ref] = useNearScreen()

    const { mutation } = TogleLikeMutation();

    const handleFavClick = () => {
        mutation({
            variables: {
                input: { id },
            },
        });
    };

    return (
        <Article ref={ref}>
            {show && (
                <Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>

                    <FavButton liked={liked} likes={likes} onClick={handleFavClick} />

                </Fragment>
            )}
        </Article>
    )
}
