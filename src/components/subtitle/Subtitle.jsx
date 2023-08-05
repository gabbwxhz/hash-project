import styles from './Subtitle.module.css'

function Subtitle({ children }) {
    return (
        <h5 className={styles.subtitle}>{children}</h5>
    )
}

export default Subtitle