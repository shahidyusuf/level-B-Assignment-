import React from 'react'
import AppCard from '../pages/Cards'
import { dataProduct } from '../components/Data'
// import CardApp from '../pages/CardApp'

const Dashboard = () => {
  return (
    <>
    <h1>
        DashBoard Page
    </h1>
        {
            
            dataProduct.map((e, i) => {
                return(
                    <div key={i} style={{ display: "inline-block"}}>
                    <AppCard   
                        image={e.image} 
                        id={e.id}
                        title={e.title}
                        // price={e.price}
                        desc={e.description}
                        category={e.category}
                        key={i}
                     />

                    </div>
                )
            })
        }
    </>
)
}

export default Dashboard;