import React, { useState } from "react";

import Game from "../Game/game";
export default function Home()
{
    const [player1,setPlayer1]=useState("");
    const [player2,setPlayer2]=useState("");
    const [joined,setJoined]=useState(false);
    if(joined)
    {
        return(<>
            <Game player1={player1} player2={player2} />
        </>)
    }
    return(
        <>
           <div className="center bg-blue-500">
                <table className="border-2 h-100px">
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </table>
           </div>

                <input value={player1} onChange={(e)=>{setPlayer1(e.target.value)}}>
                </input>
                <input value={player2} onChange={(e)=>{setPlayer2(e.target.value)}}>
                </input>
                <button
                onClick={()=>{
                    if (player1==="" || player2==="") alert("Player name can not be empty");
                   else if (player1 === player2) alert("both player can not be same");
                   else setJoined(true)
                   
                }}>
                JOIN
                </button>

        </>
    );
}