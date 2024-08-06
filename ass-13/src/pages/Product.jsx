import React from 'react'
import { useParams } from 'react-router-dom'
import { dataProduct } from '../components/Data';

const Product = () => {
    const {id} = useParams();
    // console.log(id)

    const filterData = dataProduct.filter((e, i) => {
        return id == e.id;
    })
    // console.log(filterData
  return (
    <div>
    <h1>Product Page</h1>
    {
        filterData.map((e, i)=>{
            return(
                <div key={i}>
                    <img height={300} src={e.image} />
                    <h1>{e.description}</h1>
                    <h2>Rs.{e.price}</h2>
                </div>
            )
        })
    }
    </div>
  )
}

export default Product;