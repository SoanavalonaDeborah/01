import React from "react";
import { useForm } from "../hooks/useForm02";

const formulaire02 : React.FC = () => {
    const { values, errors, handleChange, validate } = useForm({
        nom: "",
        email: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            alert('Formulaire validé');
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom :</label>
                <input type="text" name="nom" value={values.nom} onChange={handleChange}/>
                {errors.nom && <p style={{ color: "red" }}>{errors.nom}</p>}
            </div>

            <div>
                <label>Email :</label>
                <input type="text" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <button type="submit">Envoyer</button>
        </form>
    );
}

export default formulaire02;