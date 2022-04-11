import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useUser} from "../../context/UserContext";

export default function Login() {
    // const {setToken} = useUser();

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3001/auth/login', data)
            .then(response => {
                console.log(response.data);
                //setToken(response.data.access_token)
            })
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("Pseudo", {required: true})} />
            {errors.username && <span>Le pseudo est obligatoire</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("Mot de passe", {required: true})} />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>Le mot de passe est obligatoire</span>}

            <input type="submit"/>
        </form>
    );
}