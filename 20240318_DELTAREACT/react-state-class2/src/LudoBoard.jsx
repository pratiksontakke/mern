import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    let [arr, setArr] = useState(["no moves"]);
    let updateBlue = () => {
        // setMoves((preMoves) => {
        //     return { ...preMoves, blue: preMoves.blue + 1 };
        // });
        setArr((prevArr) => {
            return [...prevArr, " blue moves"];
        });
        console.log(moves);
        console.log(arr);
    };

    let updateYellow = () => {
        setMoves((preMoves) => {
            return { ...preMoves, yellow: preMoves.yellow + 1 };
        });
        console.log(moves);
    };

    return (
        <div>
            <p>{arr}</p>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button
                    style={{ backgroundColor: "blue" }}
                    onClick={updateBlue}
                >
                    +1
                </button>
                <p>Yellow moves = {moves.yellow}</p>
                <button
                    style={{ backgroundColor: "yellow", color: "black" }}
                    onClick={updateYellow}
                >
                    +1
                </button>
                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green" }}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red" }}>+1</button>
            </div>
        </div>
    );
}