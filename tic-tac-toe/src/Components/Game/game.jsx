import React, { useState } from "react";

export default function Game(){
    const [activeX, setActiveX] =useState(true)
    const [activeO, setActiveO] =useState(false)
    function win (){

    }
    return(
        <>
        <h3> </h3>
        <table className="border-none">
                <tr>
                    <td>
                        <button> onClick(()=>{}) </button>
                    </td>
                    <td>
                        <button> </button>
                    </td>
                    <td>
                        <button> </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button> </button>
                    </td>
                    <td>
                        <button> </button>
                    </td>
                    <td>
                        <button> </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button> </button>
                    </td>
                    <td>
                        <button> </button>
                    </td>
                    <td>
                        <button> </button>
                    </td>
                </tr>
            </table>
            <h3>Player 1 Score : </h3>
            <h3>Player 2 Score : </h3>
            <button> Rematch </button>
            <button> Restart </button>
        </>
    );
}