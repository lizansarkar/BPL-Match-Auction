import React, { useState } from 'react';
import PlayerIcon from '../../assets/player-icon.png'
import CountryFlag from '../../assets/flag.png'
import { toast } from 'react-toastify';

const PlayerCard = ({player, avBalance, setAvBalance, selPlayers, setSelPlayers}) => {
    const [isSelected, setIsSelected] = useState(false)

    const playerData = (data) => {
        if(avBalance > 0 && avBalance >= data.price) {
            setAvBalance(avBalance - data.price)
            if(avBalance<data.price) {
                toast("Not Enought Money!!!tung tung tung!!!")
            }
            if(selPlayers.length>8) {
                toast("Your Player Enought To Selection!!!")
                return
            }
            setIsSelected(true)
            setSelPlayers([...selPlayers, data])
            toast("Player Was Selected")
        }
        else {
            toast("Not Enought Balance")
        }
    }

    return (
        <div class="card bg-base-100 shadow-sm p-4">
            <figure>
                <img className='w-full object-cover' src={player.image} alt="" />
            </figure>
            <div class="">
                <div className="tittle mt-5 flex items-center gap-3">
                    <img className='h-[20px]' src={PlayerIcon} alt="" />
                    <h2 class="card-title">{player.name}</h2>
                </div>
                <div className='flex justify-between items-center pb-3 mt-5'>
                    <div className='flex gap-3 items-center'>
                        <img className='h-[20px] ' src={CountryFlag} alt="country" />
                        <h4>{player.country}</h4>
                    </div>
                    <button className='btn'>{player.role}</button>
                </div>
                <hr className='text-gray-300 mb-3'/>
                <div className='flex justify-between items-center my-3'>
                    <h4 className='font-bold'>Rating</h4>
                    <span>{player.rating}</span>
                </div>
                <div className='flex justify-between items-center my-3'>
                    <h4 className='font-bold'>Bating Style</h4>
                    <span>{player.battingStyle}</span>
                </div>
                <div className='flex justify-between items-center my-3'>
                    <div className='flex gap-3 items-center'>
                        <span>Price: $</span>
                        <span>{player.price}</span>
                    </div>
                    <button disabled={isSelected} onClick={()=>{
                        playerData(player)
                    }} className='btn'>{isSelected===true?"Sold Out":"Chose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;