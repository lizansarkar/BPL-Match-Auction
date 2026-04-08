import React from 'react';
import navImg from '../../assets/logo.png'
import currency from '../../assets/Currency.png'

const Navbar = ({ avBalance }) => {
    return (
        <div>
            <div class="navbar max-w-[1200px] mx-auto">
                <div class="flex-1">
                    <div class="w-10 rounded-full">
                    <img class="w-[50px] h-[50px]" src={navImg} alt="" />
                    </div>
                </div>

                <div class="dropdown dropdown-end flex items-center gap-2">
                <span>{avBalance}</span>
                <span>Coin</span>
                <img src={currency} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;