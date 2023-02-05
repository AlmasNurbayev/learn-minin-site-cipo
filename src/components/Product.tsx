import React, { useState } from "react";
import { IProduct } from "../model";

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps ) {

    const [details, setDetails] = useState(false);
    const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnAfterClassName = ['py-2 px-4 border', btnClassName];

    //console.log(props);
    return (

        
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={props.product.image} alt={props.product.title} className="w-1/6"></img>
            <p>Product: {props.product.title}</p>
            <p className="font-bold">{props.product.price}</p>
            <button 
                className ={btnAfterClassName.join(' ')}
                onClick={()=> {setDetails(prev => !prev)}}
                >
                {details ? 'hide details' : 'show details'}  
            </button>
            {details && <div>
                <p>{ props.product.description }</p>
                <p>Rate: <span style={{fontWeight:'bold'}}>{ props.product.rating.rate}</span></p>
            </div>} 
        </div>


    );
}

