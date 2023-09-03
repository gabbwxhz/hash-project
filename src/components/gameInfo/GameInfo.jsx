import styles from './GameInfo.module.css'

import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo({ currentPlayer, winner, onReset, isDraw }) {

    const shouldEnableButton = () => winner !== 0 || isDraw // "if" enxuto, se winner for verdadeiro retorna o primeiro caso, senao retorna o empate

    return (
        <div className={styles.gameInfo}>

            {
                !isDraw && winner === 0 &&
                <>

                    <h3>Próximo a jogar:</h3>

                    {
                        currentPlayer === 1 && <Icon iconName="circle" />
                    }
                    {
                        currentPlayer === -1 && <Icon iconName="x" />
                    }
                </>
            }
            {
                !isDraw && winner !== 0 &&
                <>
                    <h3 >Fim de Jogo! Campeão:</h3>
                    {
                        winner === 1 && <Icon iconName="circle" />
                    }
                    {
                        winner === -1 && <Icon iconName="x" />
                    }
                </>
            }
            {
                isDraw &&
                <>
                    <h3>Empate!</h3>
                </>
            }

            <Button
                onClick={onReset}
                disabled={!shouldEnableButton()}

            >
                Reiniciar
            </Button >

        </div>
    )
}

export default GameInfo