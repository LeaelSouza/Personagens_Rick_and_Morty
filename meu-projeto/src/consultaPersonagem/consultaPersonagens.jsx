import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ConsultaId(){
    const [listaPersonagens, setListaPersonagens] = useState([]);
    const navigate = useNavigate();
    
    let params = useParams();

    console.log(params);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/'+params.personagemId)
        .then((resposta) => {
            return resposta.json();
        })//transformas em javascript

        .then((resultadoConsulta) => {//Name
           setListaPersonagens(resultadoConsulta); 
        });
    }, []);

    function episodio(episodios){
        const episodioId = episodios.split('https://rickyandmortyapi.com/api/episode')
        navigate("/mostra/episodio/" + episodios);
    }
     
     return <>
                    <h2>{<img src={listaPersonagens.image}/>},<br/>
                    {listaPersonagens.id},<br/>
                    {listaPersonagens.name},<br/>
                    {listaPersonagens.gender},<br/>
                    {listaPersonagens.status},<br/>
                    {listaPersonagens.species}</h2>

                        {
                            listaPersonagens.episode && listaPersonagens.episode.map(episodios => {
                                return <h2>Episódios: <a onClick={episodio} href="#">{episodios}</a></h2>
                            })
                        }
           </>
}

export default ConsultaId;
