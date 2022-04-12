import {useUser} from "../../context/UserContext";
import {useForm} from "react-hook-form";
import axios from "axios";

export default function CreateEvent() {
    const {token} = useUser();

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:3001/events', data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            console.log(response);
        })
    };

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nom" {...register("name", {required: true})} />
            {errors.name && <span className="login-error">This field is required</span>}

            <input placeholder="Description" {...register("description", {required: true})} />
            {errors.description && <span className="login-error">This field is required</span>}

            <input placeholder="Localisation" {...register("location", {required: true})} />
            {errors.location && <span className="login-error">This field is required</span>}

            <input placeholder="Tag" {...register("tag", {required: true})} />
            {errors.tag && <span className="login-error">This field is required</span>}

            <input placeholder="URL Image" {...register("image", {required: true})} />
            {errors.image && <span className="login-error">This field is required</span>}

            <input type="submit" value="Créer" />
        </form>
    );
}