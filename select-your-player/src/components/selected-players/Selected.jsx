import React from 'react';

import SelectedCard from '../selected-card/SelectedCard';

const Selected = ({selPlayers, removePlayer}) => {
    console.log(selPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                selPlayers.map(player => <SelectedCard removePlayer={removePlayer}  player={player}></SelectedCard>)
            }
        </div>
    );
};

export default Selected;