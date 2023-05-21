import Board from "./board";
import { useState } from "react";
import './game.css';

const Game = () => {

    // This saves the history of the game
    const [history, setHistory] = useState([Array(9).fill(null)]);
    
    // This is the current move
    const [currentMove, setCurrentMove] = useState(0)

    // This is the current state of the board
    const currentSquares = history[currentMove];

    // This tells who's turn is it
    const xIsNext = currentMove % 2 === 0;

    // This function tells how the game runs
    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move; 
        } else {
            description = "Go to the game start";
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    })

    // Func: To jump to various moves
    const jumpTo = (move) => {
        setCurrentMove(move);
    };
    
    return (
        <div className="game">
            <div className="game-board">
                <Board squares={currentSquares} xIsNext={xIsNext} onClick={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;