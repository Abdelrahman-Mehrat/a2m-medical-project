import { useEffect,useState } from "react";
import { useLocation } from 'react-router-dom';
export const SingleCard =(props)=>{
    const [singleProduct, setSingleProduct] = useState();
    //useEffect function
    const location = useLocation()
    useEffect(() => {
        // fetchProduct();
        fetch(`https://fakestoreapi.com/products/${location.pathname}`)
                .then(res => res.json())
                .then(json=>setSingleProduct(json))       
    }, [])
   console.log(props);
    return(
     
     <>
     <div>{props.i.name}</div>
        <img src={props.img} alt="" />
     {/* <span>Path is: {location.pathname}</span> */}
        {/* <div>single card</div> */}
        {/* <div>{singleProduct?.title}</div> */}
        </>
    )
}
 // const fetchProduct = () => {
    //     return (
    //         fetch(`https://fakestoreapi.com/products/${location.pathname}`)
    //             .then(res => res.json())
    //             .then(res=>setSingleProduct(res))
    //             // .then(json => setSingleProduct(json))
    //     )
    // };