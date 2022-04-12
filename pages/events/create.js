import CreateEvent from "../../components/forms/CreateEvent";
import Default from "../../components/layouts/Default";

export default function EventCreate() {

    return (
        <div>
            <Default>
                <h1>Création d'évènements</h1>
                <CreateEvent />
            </Default>
        </div>
    )
}
