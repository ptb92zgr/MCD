import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={`container ${styles.menuContainer}`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
