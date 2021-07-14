import  React , { useState} from 'react'
import { useParams} from 'react-router-dom';



function Products() {
    const [ list , setList] = useState({ tea: "https://source.unsplash.com/199x200/?tea",
                                        coffee:"https://source.unsplash.com/199x200/?coffee",
                                        chocolate:"https://source.unsplash.com/199x200/?chocolate"
 })
    const product = useParams();
    console.log(product);
    return (
        <div>
            <h1> products page </h1>
            <p> this is the product {product.productName}  </p>
            { product.productName ? <img src = { list[product.productName] }  /> : 'no image for the product' }

        </div>
    )
}

export default Products
