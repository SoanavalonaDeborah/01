import { useState } from "react"


export default function Formulaire() {
    const [element, setElement] = useState<string[]>([]);
    const [newElement, setNewElement] = useState<string>("");

    const addElement = () => {
        setElement([...element, newElement]);
        setNewElement("");
    }

    const deleteElement = (index: number) => {
        const updatedElement = [...element];
        updatedElement.splice(index, 1);
        setElement(updatedElement);
    }

    return (
        <div>
      <h1>Liste Dynamique</h1>
      <ul>
        {element.map((element, index) => (
          <li key={index}>
            {element}
            <button onClick={() => deleteElement(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newElement}
        onChange={(e) => setNewElement(e.target.value)}
        placeholder="Ajouter un élément"
      />
      <button onClick={addElement}>Ajouter</button>
    </div>
    )
}