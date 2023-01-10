import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

export default function Paginainicial () {
    return (
    <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
                <Menu/>
                <div className={styles.principal__imagem}>
                    <h1>Gallery React App</h1>
                    <img src={banner} alt="" />
                </div>
            </section>
        </main>
    </>
    )
}