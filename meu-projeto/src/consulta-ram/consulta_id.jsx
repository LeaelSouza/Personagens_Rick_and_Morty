import { useEffect, useState } from "react";

function ConsultaRAM(){
    const [personagens, setPersonagens] = useState([]);
    

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then((resposta) => {
            return resposta.json();
        })//transformas em javascript

        .then((resultadoConsulta) => {//Name
           setPersonagens(resultadoConsulta.results); 
        });
    }, []);
     
     return <>
            {
                personagens.map(personagem => {
                    return <> 
                    <h2>{<img src={personagem.image}/>},<br/>
                    {personagem.name},<br/>
                    {personagem.gender},<br/>
                    {personagem.status},<br/>
                    {personagem.species}</h2>
                    </>
                })
            }
           </>
}

export default ConsultaRAM;