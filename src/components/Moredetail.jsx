// // import React from 'react'

// // const Moredetail = () => {
// //     const count = JSON.parse(localStorage.getItem("cart"))
// //     console.log(count);
// //     return (
// //         <>
// //             <div className="container">
// //                 {count.map((elel) => {
// //                     console.log(elel);
// //                     return (
// //                         <div className="row justify-center align-items-center">
// //                             <div className="col">
// //                                 <img src={elel.thumbnail} alt="" />
// //                             </div>
// //                             <div className="col">
// //                                 <h2>{elel.title}</h2>
// //                                 <p>{elel.description}</p>
// //                                 <p>{elel.price}</p>
// //                                 <input type="number" name="" id="" value={elel.quantity} />
// //                                 <p>{elel.stock}</p>

// //                             </div>
// //                         </div>

// //                     )
// //                 })}
// //             </div>
// //         </>
// //     )
// // }

// // export default Moredetail



// // import React, { useState } from 'react'

// // const Moredetail = () => {
// //     const [count, setCount] = useState(() => {
// //         return JSON.parse(localStorage.getItem("cart")) || []
// //     })

// //     function increment(index) {
// //         const updatedCart = [...count]

// //         if (updatedCart[index].quantity < updatedCart[index].stock) {
// //             updatedCart[index].quantity += 1
// //         }

// //         setCount(updatedCart)
// //         localStorage.setItem("cart", JSON.stringify(updatedCart))
// //     }

// //     function decrement(index) {
// //         const updatedCart = [...count]

// //         if (updatedCart[index].quantity > 1) {
// //             updatedCart[index].quantity -= 1
// //         }

// //         setCount(updatedCart)
// //         localStorage.setItem("cart", JSON.stringify(updatedCart))
// //     }

// //     return (
// //         <div className="container">
// //             {count.map((elel, index) => (
// //                 <div
// //                     className="row align-items-center justify-content-center mb-4"
// //                     key={elel.id || index}
// //                 >
// //                     <div className="col-md-5">
// //                         <img
// //                             src={elel.thumbnail}
// //                             alt={elel.title}
// //                             className="img-fluid"
// //                         />
// //                     </div>

// //                     <div className="col-md-7">
// //                         <h2>{elel.title}</h2>
// //                         <p>{elel.description}</p>
// //                         <p>Price: ${elel.price}</p>

// //                         <div className="d-flex align-items-center gap-2">
// //                             <button
// //                                 className="btn btn-danger"
// //                                 onClick={() => decrement(index)}
// //                                 disabled={elel.quantity <= 1}
// //                             >
// //                                 −
// //                             </button>

// //                             <input
// //                                 type="number"
// //                                 className="form-control"
// //                                 style={{ width: "80px" }}
// //                                 value={elel.quantity}
// //                                 readOnly
// //                             />

// //                             <button
// //                                 className="btn btn-success"
// //                                 onClick={() => increment(index)}
// //                                 disabled={elel.quantity >= elel.stock}
// //                             >
// //                                 +
// //                             </button>
// //                         </div>

// //                         <p className="mt-2">Stock: {elel.stock}</p>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     )
// // }

// // export default Moredetail



// import React, { useState } from 'react'

// const Moredetail = () => {

//     const [count, setCount] = useState(() => {
//         return JSON.parse(localStorage.getItem("cart")) || []
//     })

//     function increment(index) {
//         const updatedCart = [...count]
//         console.log(updatedCart);
//         const product = updatedCart[index]
//         console.log(product);

//         if (product.stock > 0) {
//             product.quantity = (product.quantity || 1) + 1
//             product.stock = product.stock - 1

//             setCount(updatedCart)
//             localStorage.setItem("cart", JSON.stringify(updatedCart))
//         }
//     }

//     function decrement(index) {
//         const updatedCart = [...count]
//         const product = updatedCart[index]

//         if (product.quantity > 1) {
//             product.quantity -= 1
//             product.stock += 1

//             setCount(updatedCart)
//             localStorage.setItem("cart", JSON.stringify(updatedCart))
//         }
//     }

//     return (
//         <div className="container mt-4">
//             {count.map((elel, index) => (
//                 <div
//                     className="row align-items-center mb-4"
//                     key={elel.id || index}
//                 >
//                     <div className="col-md-5">
//                         <img
//                             src={elel.thumbnail}
//                             alt={elel.title}
//                             className="img-fluid"
//                         />
//                     </div>

//                     <div className="col-md-7">
//                         <h2>{elel.title}</h2>
//                         <p>{elel.description}</p>
//                         {/* <p>Price: ${elel.price}</p> */}
//                         {/* Price: ₹{(elel.price * 88).toFixed(2)} */}
//                         <p>
//                             Price: {new Intl.NumberFormat('en-IN', {
//                                 style: 'currency',
//                                 currency: 'INR'
//                             }).format(elel.price * 1)}
//                         </p>

//                         <div className="d-flex align-items-center gap-2">
//                             <button
//                                 className="btn btn-danger"
//                                 onClick={() => decrement(index)}
//                                 disabled={elel.quantity <= 1}
//                             >
//                                 -
//                             </button>

//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 style={{ width: "80px" }}
//                                 value={elel.quantity || 1}
//                                 readOnly
//                             />

//                             <button
//                                 className="btn btn-success"
//                                 onClick={() => increment(index)}
//                                 disabled={elel.stock <= 0}
//                             >
//                                 +
//                             </button>
//                         </div>

//                         <p className="mt-2">
//                             Remaining Stock: {elel.stock}
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Moredetail



// import React, { useState } from 'react'

// const Moredetail = () => {
//     const [count, setCount] = useState(() => {
//         return JSON.parse(localStorage.getItem("cart")) || []
//     })

//     console.log(count);
//     function increment(index) {
//         const updatedCart = [...count]
//         const product = updatedCart[index]

//         if (product.stock > 0) {
//             product.quantity = (product.quantity || 1) + 1
//             product.stock -= 1

//             setCount(updatedCart)
//             localStorage.setItem("cart", JSON.stringify(updatedCart))
//         }
//     }

//     function decrement(index) {
//         const updatedCart = [...count]
//         const product = updatedCart[index]

//         if (product.quantity > 1) {
//             product.quantity -= 1
//             product.stock += 1

//             setCount(updatedCart)
//             localStorage.setItem("cart", JSON.stringify(updatedCart))
//         }
//     }

//     // Remove product from cart
//     function removeProduct(id) {
//         console.log(id);
//         // const updatedCart = count.filter((_, i) => i !== index)
//         const updatedCart = count.filter((data, index, arr) => {
//             console.log(index);
//             return index !== id
//         })
//         console.log(updatedCart);

//         setCount(updatedCart)
//         localStorage.setItem("cart", JSON.stringify(updatedCart))
//     }

//     return (
//         <div className="container mt-4">
//             {count.length === 0 ? (
//                 <h3>Your cart is empty</h3>
//             ) : (
//                 count.map((elel, index) => (
//                     <div
//                         className="row align-items-center mb-4"
//                         key={elel.id || index}
//                     >
//                         <div className="col-md-5">
//                             <img
//                                 src={elel.thumbnail}
//                                 alt={elel.title}
//                                 className="img-fluid"
//                             />
//                         </div>

//                         <div className="col-md-7">
//                             <h2>{elel.title}</h2>
//                             <p>{elel.description}</p>

//                             <p>
//                                 Price: {new Intl.NumberFormat('en-IN', {
//                                     style: 'currency',
//                                     currency: 'INR'
//                                 }).format(elel.price)}
//                             </p>

//                             <div className="d-flex align-items-center gap-2">
//                                 <button
//                                     className="btn btn-danger"
//                                     onClick={() => decrement(index)}
//                                     disabled={(elel.quantity || 1) <= 1}
//                                 >
//                                     -
//                                 </button>

//                                 <input
//                                     type="number"
//                                     className="form-control"
//                                     style={{ width: "80px" }}
//                                     value={elel.quantity || 1}
//                                     readOnly
//                                 />

//                                 <button
//                                     className="btn btn-success"
//                                     onClick={() => increment(index)}
//                                     disabled={elel.stock <= 0}
//                                 >
//                                     +
//                                 </button>
//                             </div>

//                             <p className="mt-2">
//                                 Remaining Stock: {elel.stock}
//                             </p>

//                             <button
//                                 className="btn btn-outline-danger mt-2"
//                                 onClick={() => removeProduct(index)}
//                             >
//                                 Remove Product
//                             </button>
//                         </div>
//                     </div>
//                 ))
//             )}
//         </div>
//     )
// }

// export default Moredetail


import React, { useState } from 'react'
import Spinner1 from './Spinner'

const Moredetail = () => {
    const [count, setCount] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || []
    })

    const [selected, setSelected] = useState([])

    function increment(index) {
        const updatedCart = [...count]
        const product = updatedCart[index]

        if (product.stock > 0) {
            product.quantity = (product.quantity || 1) + 1
            product.stock -= 1

            setCount(updatedCart)
            localStorage.setItem("cart", JSON.stringify(updatedCart))
        }
    }

    function decrement(index) {
        const updatedCart = [...count]
        const product = updatedCart[index]

        if (product.quantity > 1) {
            product.quantity -= 1
            product.stock += 1

            setCount(updatedCart)
            localStorage.setItem("cart", JSON.stringify(updatedCart))
        }
    }

    // Select or deselect one product
    function handleCheckbox(index) {
        console.log(index);
        setSelected((pre) => {
            console.log(pre);
            return pre.includes(index) ? pre.filter((data, i) => {
                return i !== index
            }) : [...pre, index]
        })
        // setSelected(prev =>
        //     prev.includes(index)
        //         ? prev.filter(i => i !== index)
        //         : [...prev, index]
        // )
    }

    // Select or deselect all products
    function selectAll() {
        console.log(selected);
        console.log(count);
        if (selected.length === count.length) {
            console.log(selected);
            setSelected([])
        } else {
            // setSelected(count.map((_, index) => index))
            setSelected(count.map((data, index) => {
                return index
            }))
        }
    }

    // Delete selected products
    function deleteSelected() {
        // const updatedCart = count.filter(
        //     (_, index) => !selected.includes(index)
        // )

        const updatedCart = count.filter((data, index) => {
            return !selected.includes(index)
        })

        setCount(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        setSelected([])
    }

    // Delete one product
    function removeProduct(index) {
        const updatedCart = count.filter((_, i) => i !== index)

        setCount(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))

        setSelected(prev =>
            prev
                .filter(i => i !== index)
                .map(i => i > index ? i - 1 : i)
        )
    }
    console.log(count.length);

    return (
        <div className="container mt-4">

            {count.length > 0 && (
                <div className="d-flex align-items-center gap-3 mb-4">
                    <label className="d-flex align-items-center gap-2">
                        <input
                            type="checkbox"
                            checked={
                                count.length > 0 &&
                                selected.length === count.length
                            }
                            onChange={selectAll}
                        />
                        Select All
                    </label>

                    <button
                        className="btn btn-danger"
                        onClick={deleteSelected}
                        disabled={selected.length === 0}
                    >
                        Delete Selected ({selected.length})
                    </button>
                </div>
            )}

            {count.length === 0 ? (
                // <h3>Your cart is empty</h3>
                <Spinner1 />
            ) : (
                count.map((elel, index) => (
                    <div
                        className="row align-items-center mb-4 border-bottom pb-4"
                        key={elel.id || index}
                    >
                        <div className="col-md-1">
                            <input
                                type="checkbox"
                                checked={selected.includes(index)}
                                onChange={() => handleCheckbox(index)}
                            />
                        </div>

                        <div className="col-md-4">
                            <img
                                src={elel.thumbnail}
                                alt={elel.title}
                                className="img-fluid"
                            />
                        </div>

                        <div className="col-md-7">
                            <h2>{elel.title}</h2>
                            <p>{elel.description}</p>

                            <p>
                                Price: {new Intl.NumberFormat('en-IN', {
                                    style: 'currency',
                                    currency: 'INR'
                                }).format(elel.price)}
                            </p>

                            <div className="d-flex align-items-center gap-2">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => decrement(index)}
                                    disabled={(elel.quantity || 1) <= 1}
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    className="form-control"
                                    style={{ width: "80px" }}
                                    value={elel.quantity || 1}
                                    readOnly
                                />

                                <button
                                    className="btn btn-success"
                                    onClick={() => increment(index)}
                                    disabled={elel.stock <= 0}
                                >
                                    +
                                </button>
                            </div>

                            <p className="mt-2">
                                Remaining Stock: {elel.stock}
                            </p>

                            <button
                                className="btn btn-outline-danger mt-2"
                                onClick={() => removeProduct(index)}
                            >
                                Remove Product
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Moredetail