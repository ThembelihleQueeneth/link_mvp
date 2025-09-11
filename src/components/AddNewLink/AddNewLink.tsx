import addIcon from '../../assets/add.svg'
import styles from './AddNewLink.module.css'

export const AddNewLink = () => {
  return (
    <div>
        <button className={styles['add-button']}>
            <img src={addIcon} alt="Add Icon" className={styles['add-icon']} />
        </button>
    </div>
  )
}
