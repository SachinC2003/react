import React from "react";
import { NavLink } from "react-router-dom";
export default function Home()
{
    return(
        <>
            <table className="border-none">
                <tr>
                    <td>*</td>
                    <td> </td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>0</td>
                    <td>*</td>
                    <td> </td>
                </tr>
                <tr>
                    <td> </td>
                    <td>8</td>
                    <td> </td>
                </tr>
            </table>

            <Input
                label="Player 1: "
                placeholder="Enter Player 1 name"
                type="text"
                {...register("text", {
                    required: true,
                })}
                />

            <Input
                label="Player 2: "
                placeholder="Enter Player 2 name"
                type="text"
                {...register("text", {
                    required: true,
                })}
                />

                <button>
                <NavLink to="/game">
                    Game
                </NavLink>
                JOIN
                </button>

        </>
        


    );
}