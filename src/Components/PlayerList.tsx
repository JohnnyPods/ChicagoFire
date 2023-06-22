import React from 'react';
import { useState } from 'react';


export const PlayerList = () => {


const [open, setOpen] = useState<boolean>(false);


    return(
        <div className ="button">
            <button onClick={e=>setOpen(!open)}>Player List</button>
            {open && (
                <ul>
                    <li>Player 1</li>
                    <li>Player 2</li>
                    <li>Player 3</li>
                    <li>Player 4</li>
                    <li>Player 5</li>
                    <li>Player 6</li>
                    <li>Player 7</li>
                    <li>Player 8</li>
                    <li>Player 9</li>
                    <li>Player 10</li>
                    <li>Player 11</li>
                </ul>
                )}
        </div>
    )
}