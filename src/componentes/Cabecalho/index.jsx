import logo from './logo.png'
import search from './search.png'
import style from './Cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header className={style.cabecalho}>
            <img src={ logo } alt="Logo" />
            <div className={style.cabecalho__container}>
                <input type="text" placeholder="pesquisar..." className={style.cabecalho__input} />
                <img src={ search } alt="Search icon" />
            </div>
        </header>
    )
}