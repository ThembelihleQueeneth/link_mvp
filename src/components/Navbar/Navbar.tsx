import { Text } from '../Text/Text'
import styles from "./Narbar.module.css"
import logo from "../../assets/linkage_logo.png"
import menu from "../../assets/menu.svg"

export const Navbar = () => {
  return (
    // <nav>
    //     <div className={styles.content}> 
    //             <img src={logo} alt="Logo" className={styles.logo}/>
            
    //         <div className={styles.title}>

    //             <Text variant='h1' >Linkage </Text>
    //         </div>
    //         <div>
    //             <img src={menu}  alt="menu Icon" className={styles['menu-icon']} />
    //         </div>
    //         </div>
      
    // </nav>
    <header>
        <img src={logo} alt="Logo" className={styles.logo}/>
        <Text variant='h1' style={{margin: 0, fontSize: '30px', fontStyle: 'italic'}}>Linkage </Text>
        <img src={menu}  alt="menu Icon" className={styles['menu-icon']} />

    </header>
  )
}
