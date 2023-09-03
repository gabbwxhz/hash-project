import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score({ winnerCircle, winnerX }) {
    return (
        <>
            <h3 className={styles.scoreTitle}>Placar:</h3>

            <div className={styles.score}>
                <div className={styles.scoreContent}>
                    <Icon iconName="circle" />
                    <h2>{winnerCircle}</h2>
                </div>

                <div className={styles.scoreContent}>
                    <Icon iconName="x" />
                    <h2>{winnerX}</h2>
                </div>
            </div>

        </>
    )
}

export default Score