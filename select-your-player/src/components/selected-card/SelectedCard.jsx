import React from 'react';
import DeleteImg from '../../assets/delete.png'

const SelectedCard = ({player, removePlayer}) => {
    const handleRemove = () => {
        removePlayer(player)
    }
    console.log(player)
    return (
        <div className='border-2 border-gray-300 rounded-2xl mt-5 px-8 py-5 flex justify-between items-center'>
            <div className='flex items-center justify-center gap-5'>
                <img className='h-[50px] w-[50px]' src={player.image} alt="" />
                <div>
                    <h4 className='font-bold'>{player.name}</h4>
                    <p className='text-gray-400'>{player.role}</p>
                </div>
            </div>
            <div>
                <img onClick={handleRemove} className='cursor-pointer' src={DeleteImg} alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;