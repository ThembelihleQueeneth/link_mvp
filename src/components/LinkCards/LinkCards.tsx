import { useState } from "react";
import styles from './LinkCards.module.css';
import logo from '../../assets/linkage_logo.png';
import darkmode from '../../assets/darkmode.svg';
// import deletei from '../../assets/delete.svg';
// import edit from '../../assets/edit.svg';

interface Link {
  id: number;
  text: string;
  completed: boolean;
}

function LinkCards() {
  const [links, setLinks] = useState<Link[]>([]);
  const [input, setInput] = useState("");

  const addLink = () => {
    if (input.trim()) {
      setLinks([...links, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleLink = (id: number) => {
    setLinks(
      links.map((link) =>
        link.id === id ? { ...link, completed: !link.completed } : link
      )
    );
  };

  const deleteLink = (id: number) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const editLink = (id: number, newText: string) => {
    setLinks(
      links.map((link) =>
        link.id === id ? { ...link, text: newText } : link
      )
    );
  };

  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={`${styles["linkage-container"]} ${darkMode ? styles.dark : ""}`}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles['logo']}/>
        <h1>Linkage</h1>
       <img 
  src={darkmode} 
  alt="Dark Mode" 
  className={styles['darkmode']} 
  onClick={() => setDarkMode(!darkMode)}
/>

      </div>

      <div className={styles["input-box"]}>
        <input
          type="text"
          placeholder="Add a link"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.addButton} onClick={addLink}>+</button>
      </div>

      <div className="list" id={styles.list}>
        {links.map((link) => (
          <div key={link.id}  className={`item ${link.completed ? "done" : ""}`}>
            <input
              type="checkbox"
              checked={link.completed}
              onChange={() => toggleLink(link.id)}
            />
            <span className={styles.itemText}>{link.text}</span>
            <button onClick={() => editLink(link.id, prompt("Edit link:", link.text) || link.text)} className={styles.editButton}>Edit</button>
            <button onClick={() => deleteLink(link.id)} className={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>

      {/* <button onClick={addLink}>+</button> */}
    </div>
  );
}

export default LinkCards;
