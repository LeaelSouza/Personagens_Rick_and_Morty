import { useEffect, useState } from "react";
import "./estilos.css"
import { useNavigate } from "react-router-dom";

function ConsultaRAM(){
    const [personagens, setPersonagens] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then((resposta) => {
            return resposta.json();
        })//transformas em javascript

        .then((resultadoConsulta) => {//Name
           setPersonagens(resultadoConsulta.results); 
        });
    }, []);

    function click(personagemId){
        navigate("/consulta_id/"+ personagemId);
    }
     

    function pagina(numero){//

        fetch("https://rickandmortyapi.com/api/character/?page="+ numero)
        .then((resposta) => {
            return resposta.json();
        })
        .then((resultadoConsulta) => {
            setPersonagens(resultadoConsulta.results);
        });

    }

    function pegaPagina(){//
        const listaPaginas = []; //cria uma lista para armazenar as <div>
        
        for(let i = 0; i <= 42; i++){

            listaPaginas.push(<div className="page-item" onClick={()=> pagina(i)}><a class="page-link" href="#">{i}</a></div>);
            
        }
        return listaPaginas;
    }

    
     return <>
            {
                personagens.map(personagem => {
                    return <> 
                    <h2>{<button onClick={()=>click(personagem.id)}><img src={personagem.image}/><h2>{personagem.name}</h2></button>}</h2>
                    </>
                })
            }

            <footer>
                {pegaPagina()}
            </footer>
           </>
}
    
export default ConsultaRAM;