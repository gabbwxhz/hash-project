import styles from './GameInfo.module.css'

import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo({ currentPlayer, winner, onReset }) {

    const shouldEnableButton = () => {
        if (winner !== 0) return true
    }

    return (
        <div className={styles.gameInfo}>

            {
                winner === 0 &&
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
                winner !== 0 &&
                <>
                    <h3 >Fim de Jogo!</h3>
                    <h3 >Campeão:</h3>

                    {
                        winner === 1 && <Icon iconName="circle" />
                    }
                    {
                        winner === -1 && <Icon iconName="x" />
                    }

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