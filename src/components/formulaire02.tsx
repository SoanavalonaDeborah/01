import React from "react";
import { useForm } from "../hooks/useForm02";

const Formulaire02 : React.FC = () => {
    const { values, errors, handleChange, validate } = useForm({
        nom: "",
        email: "",
        password: "",
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

            <div>
                <label>Mot de passe :</label>
                <input type="text" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>

            <button type="submit">Envoyer</button>
        </form>
    );
}

export default Formulaire02;