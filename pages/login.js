import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import Link from "next/link";

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
        <>
            <div>
                <Link href="/" passHref>
                    <p className="back-to">
                        Retour à l'accueil
                    </p>
                </Link>
            </div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Connexion</h1>
                {/* register your input into the hook by invoking the "register" function */}
                <input {...register("username", {required: true})} placeholder="Pseudo" />
                {errors.username && <span className="login-error">Le pseudo est obligatoire</span>}

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("password", {required: true})} placeholder="Mot de passe" type="password" />
                {/* errors will return when field validation fails  */}
                {errors.password && <span className="login-error">Le mot de passe est obligatoire</span>}

                <input type="submit" value="Connexion"/>

                <hr className="hr-login"></hr>

                <Link href="/register">
                    <p className="signup-button">Inscription</p>
                </Link>
            </form>
        </>
    );
}