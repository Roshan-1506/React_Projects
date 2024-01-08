import styles from './Navigation.module.css';

const Navigation = () => {
    console.log(styles);
    return (
      <nav className={`${styles.navigation} container`}>
          <div className='logo'>
              <img src='./images/Frame_2_1.png' alt='logo' />
          </div>
          <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
          </ul>
      </nav>
    );
  };    
  
  export default Navigation;