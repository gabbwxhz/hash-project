import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score() {
    return (
        <>
            <h3 className={styles.scoreTitle}>Placar:</h3>

            <div className={styles.score}>
                <div className={styles.scoreContent}>
                    <Icon iconName="circle" />
                    <h2>0</h2>
                </div>

                <div className={styles.scoreContent}>
                    <Icon iconName="x" />
                    <h2>0</h2>
                </div>
            </div>

        </>
    )
}

export default Score