import { useEffect,useState } from "react";
import { useLocation } from 'react-router-dom';
export const SingleCard =()=>{
    const [singleProduct, setSingleProduct] = useState();
    //useEffect function
    const location = useLocation()
    useEffect(() => {
        fetchProduct();       
    }, [])
    const fetchProduct = () => {
        return (
            fetch(`https://fakestoreapi.com/products/${location.pathname}`)
                .then(res => res.json())
                .then(res=>setSingleProduct(res))
                // .then(json => setSingleProduct(json))
        )
    };
    return(
     
     <>   
     <span>Path is: {location.pathname}</span>
        <div>single card</div>
        <div>{singleProduct.title}</div>
        </>
    )
}