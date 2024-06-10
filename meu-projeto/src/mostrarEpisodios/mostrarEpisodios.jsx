import { useParams, useEffect } from "react-router-dom";

function Episodio(){
    const params = useParams();

    useEffect(() => {
        fetch('https://rickyandmortyapi.com/api/episode' + params.episodioId)
        .then((resposta) => {
            return resposta.json();
        })
        .then((resultado) => {
            setPersonagens(resultado.results);
        })
    }, []);
}

export default Episodio;