import React from "react";
import { FavsWithQuery } from "../containers/getFavorites";
import { UserTitle, Div, H1Favs } from '../styles/stylesFavs'
import { ListOfFavs } from "../components/favs/listOfFavs";
import { NoFavs } from "../components/favs/NoFavs";
import { } from '../styles/stylesFavs'

export const Favs = () => {
  const { loading, data, error } = FavsWithQuery();
  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>error</h1>;
  const { favs } = data;
  return (
    <div >
      <H1Favs>Tus favoritos</H1Favs>
      <Div>
        <UserTitle>
          {favs.length > 0 ? "Tus favoritos ❤" : "No tienes favoritos 😢"}
        </UserTitle>
        {favs.length < 1 ? <NoFavs /> : <ListOfFavs favs={favs} />}
      </Div>
    </div>
  );
};