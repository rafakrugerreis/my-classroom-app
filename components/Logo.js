import styles from './Topbar.css';

function Logo() {
  return (
    <img 
      src="/logo.png" 
      alt="Logo"
      className={styles.logo} 
    />
  );
}

export default Logo;
