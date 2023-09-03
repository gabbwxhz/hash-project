import { useState, useEffect } from 'react'
// useEffect: utilizado quando quiser realizar uma ação sem que o usuario faça algo (clicar)

import styles from './Game.module.css'

import GameOption from '../gameOption/GameOption'
import GameInfo from '../gameInfo/GameInfo'
import Score from '../score/Score'

const winnerTable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function Game() {

    const [gameState, setGameState] = useState(Array(9).fill(0))
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [winner, setWinner] = useState(0)
    const [winnerLine, setWinnerLine] = useState([])
    const [draw, setDraw] = useState(false)
    const [winnerCircle, setWinnerCircle] = useState(0)
    const [winnerX, setWinnerX] = useState(0)

    const handleClick = (position) => {
        if (gameState[position] === 0 && winner === 0) {
            let newGameState = [...gameState]
            newGameState[position] = currentPlayer
            setGameState(newGameState)
        }
    }

    const verifyGame = () => {
        winnerTable.forEach((i) => {
            const values = i.map((position) => gameState[position])
            const sum = values.reduce((sum, total) => sum + total)
            if (sum === 3 || sum === -3) {
                setWinner(sum / 3)
                setWinnerLine(i)
                sum > 0 ? setWinnerCircle(winnerCircle + 1) : setWinnerX(winnerX + 1)
            }
        })
    }

    const handleReset = () => {
        setGameState(Array(9).fill(0))
        setWinner(0)
        setWinnerLine([])
        setDraw(false)
    }

    const verifyDraw = () => {
        if (gameState.find((value) => value === 0) === undefined && winner === 0) {
            setDraw(true)
        }
    }

    const verifyWinnerLine = (pos) => winnerLine.find((value) => value === pos) !== undefined

    useEffect(() => { //! sempre deve ser estes dois parametros, uma function e um array
        setCurrentPlayer(currentPlayer * (-1))
        verifyGame()
        verifyDraw()
    }, [gameState])

    useEffect(() => {
        if (winner !== 0) setDraw(false)
    }, [winner])

    return (
        <>
            <div className={styles.gameContent}>

                <div className={styles.game}>
                    {
                        gameState.map((value, position) =>
                            <GameOption
                                key={`game-option-position-${position}`}
                                status={value}
                                onClick={() => handleClick(position)}
                                isWinner={verifyWinnerLine(position)}
                                isDraw={draw}
                            />
                        )
                    }
                </div>

                <GameInfo
                    currentPlayer={currentPlayer}
                    winner={winner}
                    onReset={handleReset}
                    isDraw={draw}
                />
            </div>

            <Score
                winnerCircle={winnerCircle}
                winnerX={winnerX}

            />

        </>
    )
}

export default Game