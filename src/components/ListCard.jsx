// import React from 'react'
// import { useEffect, useState } from 'react'
// import Card from './Card'
// const ListCard = () => {

//     const [productvalue, setProducts] = useState([])
//     const products = async () => {
//         const res = await fetch("https://dummyjson.com/products")
//         const data = await res.json()
//         // console.log(data.products);
//         setProducts(data.products)
//     }
//     useEffect(() => {
//         products()
//     }, [])

//     return (

//         {
//             productvalue.length === 0 ?

//                 (<Spinner1 />) : (
//                     < div className='flex flex-wrap justify-center gap-2' >
//                         {
//                             productvalue.map((ele) => {
//                                 // returnret ele.title
//                                 // console.log(ele.title);
//                                 return < Card key={ele.id} data={ele} />
//                             })
//                         }

//                         )

//         }

//                     </ >
//                 )
//         }

// export default ListCard




import React, { useEffect, useState } from 'react'
import Card from './Card'
import Spinner1 from './Spinner'

const ListCard = () => {

    const [productvalue, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const products = async () => {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()

        setProducts(data.products)


        setCategories([
            // ...new Set(data.products.map((ele) => ele.category))
            ...new Set(data.products.map((data) => {
                // console.log(data.category);
                return data.category
            }))
        ])

    }
    console.log(categories);
    // console.log(productvalue);

    useEffect(() => {
        products()
    }, [])

    return (
        <>
   
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <input type="search" name="" id="" />
                    </div>
                    <div className="col">
                        <select name="" id="">
                            <option value="" hidden>Select categories</option>
                            {categories.map((ele, i) => {
                                return <option key={i} value="">{ele}</option>
                            })}

                        </select>
                    </div>
                </div>
            </div>
            {
                productvalue.length === 0 ? (
                    <Spinner1 />
                ) : (
                    <div className='flex flex-wrap justify-center gap-2 mt-3'>
                        {
                            productvalue.map((ele) => {
                                // console.log(ele.category);
                                return <Card key={ele.id} data={ele} />
                            })
                        }
                    </div>
                )
            }
        </>
    )
}

export default ListCard
