import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ConsultaId(){
    const [personagens, setPersonagens] = useState([]);
    
    let params = useParams();

    console.log(params);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/'+params.personagemId)
        .then((resposta) => {
            return resposta.json();
        })//transformas em javascript

        .then((resultadoConsulta) => {//Name
           setPersonagens(resultadoConsulta); 
        });
    }, []);
     
     return <>
                    <h2>{<img src={personagens.image}/>},<br/>
                    {personagens.id},<br/>
                    {personagens.name},<br/>
                    {personagens.gender},<br/>
                    {personagens.status},<br/>
                    {personagens.species}</h2>
           </>
}

export default ConsultaId;



