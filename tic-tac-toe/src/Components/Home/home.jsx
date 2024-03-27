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
        <div className="min-h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center bg-slate-500 h-full p-10">
                <div className="mb-5">
                    <table className="border-2">
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
                <div className="flex flex-col items-center">
                    <input
                        className="border rounded px-2 py-1 mb-2"
                        value={player1}
                        onChange={(e) => {
                            setPlayer1(e.target.value);
                        }}
                        placeholder="Player 1"
                    />
                    <input
                        className="border rounded px-2 py-1 mb-2"
                        value={player2}
                        onChange={(e) => {
                            setPlayer2(e.target.value);
                        }}
                        placeholder="Player 2"
                    />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                        onClick={() => {
                            if (player1 === "" || player2 === "") alert("Player name can not be empty");
                            else if (player1 === player2) alert("Both players cannot have the same name");
                            else setJoined(true);
                        }}
                    >
                        JOIN
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}