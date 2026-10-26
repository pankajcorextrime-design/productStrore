import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate = useNavigate()



    // const count = JSON.parse(localStorage.getItem("cart"))
    const count = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log(count.length);

    function moreDetails() {
        console.log("dsklfsdf");
        navigate("/moredetail")
    }

    return (
        <>
            <div className="nav flex justify-between px-10 bg-amber-900 h-24 items-center text-white mb-4">
                <div className="logo text-2xl">Logo</div>
                <div className="right-menu">
                    <ul className='flex gap-2 text-3xl'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                </div>
                <div className="cart" onClick={moreDetails}>
                    <span><i className="ri-shopping-basket-fill"></i>
                        <sup>{count.length}</sup>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar