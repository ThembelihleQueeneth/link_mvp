import styles from './SearchInput.module.css'
import serachIcon from '../../assets/search.svg'

export const SearchInput = () => {
  return (
    <div className={styles['search-bar']}>
        <input type="text" className={styles['search-input']} placeholder='Search for link'/>
        <img src={serachIcon} alt="Search Icon" className={styles['search-icon']} />

    </div>
  )
}
