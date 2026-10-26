import React from 'react'
// import indexDb from "../scrip"
const Card = (props) => {
    // console.log(props);
    const { data } = props
    const { thumbnail, title, price, id } = data
    // console.log(data);

    const addtocart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []

        const existingProduct = cart.find((ele) => {
            // console.log(ele);
            return ele.id === id
        })

        if (existingProduct) {
            // console.log(existingProduct);
            existingProduct.quantity += 1
        } else {
            console.log(data);
            cart.push({ ...data, quantity: 1 })
            console.log(cart);

        }
        console.log(existingProduct);

        console.log("dskfsd", id);
        localStorage.setItem("cart", JSON.stringify(cart))
    }


    return (
        <>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto exercitationem recusandae ex magnam quia error repellat nihil hic, mollitia possimus necessitatibus itaque esse rem perspiciatis, animi harum velit aliquid voluptas?</h1>
            <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
                <a href="#">
                    <img className="rounded-t-base" src={thumbnail} alt="" />
                </a>
                <div className="p-6 text-center">
                    <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">

                        Trending
                    </span>
                    <a href="#">
                        <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
                    </a>
                    <p>{data.description}</p>

                    <h4><span>₹ </span>{price}</h4>
                    <button onClick={() => addtocart()} className='border my-4 flex items-center px-3 py-2 rounded-2xl bg-amber-400 text-1xl font-semibold'>
                        Add to Cart
                        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Card