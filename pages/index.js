import Default from "../components/layouts/Default";
import axios from "axios";
import Link from 'next/link'

export default function Home({events}) {
    console.log(events);
    return (
        <div>
            <Default>
                <h1>Liste des évènements</h1>
                <p>Vous retrouverez ici la liste complète des évènements</p>
                <Link href="/events/create">
                    <button>Créer un évènement</button>
                </Link>
                <div className="card-list">
                    {events.map(event => (
                        <div className="card" key={event._id}>
                            <h2>{event.name}</h2>
                            <img src={event.image} alt="image-event"/>
                            <p>{event.description}</p>
                            <p>{event.location} | {event.date}</p>
                        </div>
                    ))}
                </div>
            </Default>
        </div>
    )
}

export async function getStaticProps() {
    const result = await axios.get('http://localhost:3001/events');
    const events = result.data;
    console.log(events);
    return {
        props: {
            events
        }
    }
}
