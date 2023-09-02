import { useState, useEffect } from 'react'
// useEffect: utilizado quando quiser realizar uma ação sem que o usuario faça algo (clicar)

import styles from './Game.module.css'

import Icon from '../icon/Icon'
import GameOption from '../gameOption/gameOption'

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

    const handleClick = (position) => {
        if (gameState[position] === 0 && winner === 0) {
            0
            let newGameState = [...gameState]
            newGameState[position] = currentPlayer
            setGameState(newGameState)
        }
    }

    const verifyGame = () => {
        winnerTable.forEach((i) => {
            const values = i.map((position) => gameState[position])
            const sum = values.reduce((sum, total) => sum + total)
            if (sum === 3 || sum === -3) setWinner(sum / 3)
        })
    }

    useEffect(() => { //! sempre deve ser estes dois parametros, uma function e um array
        setCurrentPlayer(currentPlayer * (-1))
        verifyGame()
    }, [gameState])

    return (
        <div className={styles.gameContent}>

            <div className={styles.game}>

                {
                    gameState.map((value, position) =>
                        <GameOption
                            key={`game-option-position-${position}`}
                            status={value}
                            onClick={() => handleClick(position)}
                        />
                    )
                }
            </div>

            <div className={styles.gameInfo}>
                <h3>Próximo a jogar:</h3>
                {
                    currentPlayer === 1 && <Icon iconName="circle" />
                }
                {
                    currentPlayer === -1 && <Icon iconName="x" />
                }

            </div>
        </div>
    )
}

export default Game