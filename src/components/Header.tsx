import  styles from './Header.module.css'

import logo from '../assets/logo.svg'
import todo from '../assets/todo.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <img src={todo} alt="todo" />
        </header>
    );
}