import { useRouter } from "next/router";

export default function Room() {
    const {query} = useRouter()

    return(
        <h1>Room {query.id}</h1>
    )
}