import { useState } from "react";


export const useForm = <T extends Record<string, string>>(initialValues : T) => {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value});
    };

    const validate = () => {
        const tempErrors: Record<string, string> = {};
        if (!values.nom) tempErrors.nom = 'Le nom est requis.';
        if(!values.email.includes('@')) tempErrors.email = 'L\' email est invalide.';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    return { values, errors, handleChange, validate };
}