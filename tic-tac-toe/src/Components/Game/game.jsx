import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Game({player1,player2}) {
    const [activeX, setActiveX] = useState(true);
    const [activeO, setActiveO] = useState(false);
    const [countX, setCountX] = useState(0)
    const [countO, setCountO] = useState(0)
    const [board, setBoard] = useState(Array(9).fill(null));
    const [status, setStatus] = useState("Game in progress");
    const curr_player = activeX ? 'X' : 'O';

    // useEffect hook to log status changes
    useEffect(() => {
        console.log(status);
    }, [status]);
    function result(newBoard){
        console.log(newBoard)
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6]             // Diagonal
        ];
    
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            
            if (newBoard[a]!=null && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                setStatus(`Player ${newBoard[a]} wins!`);
                if(board[a] === 'X')   setCountX(countX => countX+1)
                else setCountO(countO => countO+1)
                console.log(`Player ${newBoard[a]} wins!`);
                return;
            }
        }
    
        if (newBoard.every(square => square !== null)) {
            setStatus(`Draw`);
        } else {
            setStatus(`Game in progress`);
        }
    }
    function addText(index) {
        
            if(board[index]!= null || status !== "Game in progress")
            {
                return;
            }
            const newBoard =[...board];
            newBoard[index] = curr_player;
            console.log(newBoard)
            setBoard(newBoard);
         
            setActiveO(prevState => !prevState)
            setActiveX(prevState => !prevState)
            result(newBoard);
        
    }
    
    return (
        <>
            <h3> Current Player : {curr_player} </h3>
            <h3> Game Status : {status} </h3>
            <table className="">
                <tbody>
                    <tr>
                        <td>
                            <button onClick={()=>{addText(0);}}> {board[0]} </button>
                        </td>
                        <td>
                            <button onClick={()=>{addText(1);}}> {board[1]}</button>
                        </td>
                        <td>
                            <button onClick={()=>{addText(2);}}> {board[2]}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>{addText(3);}}>  {board[3]}</button>
                        </td>
                        <td>
                            <button onClick={()=>{addText(4);}}>  {board[4]}</button>
                        </td>
                        <td>
                            <button onClick={()=>{addText(5);}}>  {board[5]}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>{addText(6);}}>  {board[6]}</button>
                        </td>
                        <td>
                            <button onClick={()=>{addText(7);}}>  {board[7]}</button>
                        </td>
                        <td>
                            <button onClick={()=>{addText(8);}}>  {board[8]}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>{player1} Score : {countX}</h3>
            <h3>{player2} Score : {countO}</h3>
            <button onClick={() => {
                const newBoard = Array(9).fill(null);
                setBoard(newBoard);
                setStatus("Game in progress");
                setActiveX(true);
                setActiveO(false);
            }}>
                Rematch
            </button>

            <br></br>
            <button>
                <NavLink to="/">home</NavLink>
                Restart
            </button>
        </>
    );
}