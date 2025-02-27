import { useState } from "react";


const emailPattern = /^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/;

export const useForm = <T extends Record<string, string>>(initialValues : T) => {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value});
    };

    
    const validate = () => {
        const tempErrors: Record<string, string> = {};
        
        if (!values.nom.trim()) tempErrors.nom = 'Le nom est requis.';

        if(!values.email.trim()) tempErrors.email = 'L\'addresse email est requise';
        if(!emailPattern.test(values.email)) tempErrors.email = 'Email invalide.'

        if(values.password.length < 6) tempErrors.password = 'Le mot de passe doit avoir 6 caractères minimum.';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    return { values, errors, handleChange, validate };
}