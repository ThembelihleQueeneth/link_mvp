import styles from './Landing.module.css'
import logo from '../../assets/linkage_logo.png'
import { useNavigate } from 'react-router-dom'



export const Landing = () => {
  const navigate = useNavigate();
  return (
    // logo
    <div className={styles.landingContainer}>
      <img src={logo} alt="Logo"  className={styles.logo}/>

      {/* Card */}
      <div className={styles.card}>
        <h2>Welcome to Linkage</h2>
        <p>
          Linkage will help you <br />
          keep track if <br />
          your favourite links
        </p>
        <button className={styles.btn} onClick={() => navigate('/linkage')}>Get Started</button>

    </div>
    </div>

    

    
  )
}
