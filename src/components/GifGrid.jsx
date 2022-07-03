import { useState,useEffect } from "react";
import { getGifs } from "../herlpers/getGifs"; //Hace el Fetch a la API para traer los gift
import { GifItem } from "./GifItem";
import '../styles.css'
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

     //console.log({images, isLoading})



  return (
    <>
      <h3>{category}</h3>
      {
        isLoading ? (<h2>Cargando...</h2>) : null
      }
      <h2></h2>
      <div className="card-grid">{
        images.map((image) => (
           <GifItem key={image.id}
                    { ...image }/*Permite esparcir todas las props al componente sin tener que estar definiendo cada una*/
           /> 
        ))
      }
      </div>
    </>
  );
};
