import React, { use } from 'react';

import PlayerCard from '../player-card/PlayerCard';

const Available = ({playerPromise, avBalance, setAvBalance, selPlayers, setSelPlayers}) => {
    const playerData = use(playerPromise)

    return (
        <div className='max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                playerData.map(player => <PlayerCard key={player.id} selPlayers={selPlayers} setSelPlayers={setSelPlayers} player={player} avBalance={avBalance} setAvBalance={setAvBalance}></PlayerCard>)
            }
        </div>
    );
};

export default Available;