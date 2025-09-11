import editIcon from '../../assets/edit.svg'
import deleteIcon from '../../assets/delete.svg'
import styles from './LinkCards.module.css'

export const LinkCards = () => {
  return (
    <div className="links">
        <input type="text" className={styles['link-input']} placeholder='http://facebook.co.za' disabled/>
        
        <img src={editIcon} alt="Edit Icon" className={styles['edit-icon']} />
        <img src={deleteIcon} alt="Delete Icon" className={styles['delete-icon']} />
        
    </div>
    
  )
}
