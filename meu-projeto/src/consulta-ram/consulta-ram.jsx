import { useEffect, useState } from "react";
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// function ConsultaRAM(){
//     const [personagens, setPersonagens] = useState([]);
//     const [personagemAtual, setpersonagemAtual] = useState(null);
    

//     useEffect(() => {
//         fetch('https://rickandmortyapi.com/api/character')
//         .then((resposta) => {
//             return resposta.json();
//         })//transformas em javascript

//         .then((resultadoConsulta) => {//Name
//            setPersonagens(resultadoConsulta.results); 
//         });
//     }, []);

//     function click(personagem){
//         console.log(personagem.id);
//         setpersonagemAtual(personagem)
//     }
     
//      return <>
//             {
//                 personagens.map(personagem => {
//                     return <> 
//                     <h2 key={personagem.id}>{<button onClick={()=>click(personagem)}><img src={personagem.image}/>{personagem.id}</button>}</h2>
//                     {
//                         personagemAtual && <Navigate to='consulta_id' />
//                     }
//                     </>
//                 })
//             }
//            </>
// }
    
// export default ConsultaRAM;

function ConsultaRAM(){
    const [personagens, setPersonagens] = useState([]);
    //const [personagemAtual, setpersonagemAtual] = useState(null);
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
     
     return <>
            {
                personagens.map(personagem => {
                    return <> 
                    <h2>{<button onClick={()=>click(personagem.id)}><img src={personagem.image}/></button>}</h2>
                    </>
                })
            }
           </>
}
    
export default ConsultaRAM;