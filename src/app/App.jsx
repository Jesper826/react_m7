import "./App.css"
import styles from './app.module.css'
import { AboutMe } from '../aboutme/aboutme';
import { Top10 } from '../top10/Top10';
import { Card } from '../card/Card';
import { Cookie } from '../cookie/cookie';
import { Cat } from '../cat/cat';
import { Pokemon } from '../pokemon/Pokemon';

function App() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="/games">games</a>
          </li>
          <li className={styles.listItem}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Pokemon />
      <Cookie />
      <AboutMe />
      <Top10 />
      <Card name="jap" />
      <Card name="jap2" />
      <Card name="jap3" />
      <Card name="jap4" />
      <Cat />
    </>
  )
}

export default App

