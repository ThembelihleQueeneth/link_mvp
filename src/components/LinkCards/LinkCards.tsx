import { useState } from "react";
import styles from './LinkCards.module.css'
import logo from '../../assets/linkage_logo.png'

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

  return (
    <div className={styles["linkage-container"]}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles['logo']}/>
        <h1>Linkage</h1>
      </div>

      <div className={styles["input-box"]}>
        <input
          type="text"
          placeholder="Add a link"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addLink}>+</button>
      </div>

      <div className="list">
        {links.map((link) => (
          <div key={link.id} className={`item ${link.completed ? "done" : ""}`}>
            <input
              type="checkbox"
              checked={link.completed}
              onChange={() => toggleLink(link.id)}
            />
            <span>{link.text}</span>
            <button onClick={() => editLink(link.id, prompt("Edit link:", link.text) || link.text)}>Edit</button>
            <button onClick={() => deleteLink(link.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkCards;
