import open from './open.png'
import favorito from './favorito.png'

export default function Card({ foto, styles }) {
    return (
        <li key={foto.id} className={styles.galeria__card}>
            <img
                className={styles.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
            />
            <p className={styles.galeria__descricao}>{foto.titulo}</p>
            <div>
                <p>{foto.creditos}</p>
                <span>
                    <img src={favorito} alt="icone curtir" />
                    <img src={open} alt="icone tela cheia" />
                </span>
            </div>
        </li>
    )
}
