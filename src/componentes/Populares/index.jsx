import fotosPopulares from './fotos-populares.json'
import styles from './Populares.module.scss' 

export default function Populares() {
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares_imagens}>
                {fotosPopulares.map((foto) => {
                    return (
                        <li key={foto.id}>
                            <img src={foto.path} alt={foto.alt} />
                        </li>
                    )
                })}
            </ul>
            <button className={styles.populares_imagens}>Ver mais</button>
        </aside>
    )
}
