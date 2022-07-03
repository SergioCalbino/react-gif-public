import { useEffect, useState } from "react"
import { getGifs } from "../herlpers/getGifs"




export const useFetchGifs = (category) => {

        const [images, setImage] = useState([])
        const [isLoading, setIsLoading] = useState(true)
    
    const getImage = async () => {
        const newImage = await getGifs(category)
        setImage(newImage)
        setIsLoading(false)
        // console.log(category)
    }
  
  
    useEffect(() => {
    getImage();
   
  }, []);


  return {
    images: images,
    isLoading: isLoading
  }
}
