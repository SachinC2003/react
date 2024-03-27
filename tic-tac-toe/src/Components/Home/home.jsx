/*import React, { useState } from "react";
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
           <div className="justify-center center bg-blue-500">
                <table className=" border-2 h-100px">
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
}*/
import React, { useState } from "react";
import Game from "../Game/game";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Home() {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [joined, setJoined] = useState(false);

    if (joined) {
        return (
            <>
                <Game player1={player1} player2={player2} />
            </>
        );
    }

    return (
        <>
          <div className="h-screen">
            <Header />
            <div className="flex justify-center items-center bg-slate-500" style={{ height: '68%' }}>
                <table className="border-2 mt-5 mb-5">
                    <tbody>
                        <tr>
                            <td className="w-16 h-16 text-center">X</td>
                            <td className="w-16 h-16 text-center"></td>
                            <td className="w-16 h-16 text-center">0</td>
                        </tr>
                        <tr>
                            <td className="w-16 h-16 text-center">0</td>
                            <td className="w-16 h-16 text-center">0</td>
                            <td className="w-16 h-16 text-center">X</td>
                        </tr>
                        <tr>
                            <td className="w-16 h-16 text-center">X</td>
                            <td className="w-16 h-16 text-center"></td>
                            <td className="w-16 h-16 text-center">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                    <div className="flex justify-center bg-slate-500">
                        <input
                            className="border rounded px-2 py-1 mr-2 mt-4 mb-4"
                            value={player1}
                            onChange={(e) => {
                                setPlayer1(e.target.value);
                            }}
                            placeholder="Player 1"
                        />
                        <input
                            className="border rounded px-2 py-1 mr-2 mt-4 mb-4"
                            value={player2}
                            onChange={(e) => {
                                setPlayer2(e.target.value);
                            }}
                            placeholder="Player 2"
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded pb-2 h-10 mt-3"
                            onClick={() => {
                                if (player1 === "" || player2 === "") alert("Player name can not be empty");
                                else if (player1 === player2) alert("Both players cannot have the same name");
                                else setJoined(true);
                            }}
                        >
                            JOIN
                        </button>
                    </div>
                <Footer />
              </div>
        </>
    );
}