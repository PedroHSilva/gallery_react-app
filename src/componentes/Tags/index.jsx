import styles from './Tags.module.scss'

export default function Tags({ tags, filtraFotos, setFotos }) {
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return (
                        <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
                    )
                })}
                <li onClick={() => filtraFotos()}>Todas</li>
            </ul>
        </div>
    )
}
