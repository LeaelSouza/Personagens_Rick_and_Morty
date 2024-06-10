import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider}  from 'react-router-dom'
import Tarefas from './tarefas/tarefas-componente.jsx'
import Cabecalho from './componente-cabecalho/cabecalho.jsx'
import ConsultaRAM from './consulta-ram/consulta-ram.jsx'
import Consulta_id from './consultaPersonagem/consultaPersonagens.jsx'

//Criação dos caminhos para as páginas
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Cabecalho /> ,
    children:[
      {
        path: '/tarefas',//Caminho
        element: <Tarefas/>//Aqui é a página(Elementos)
      },
      {
        path: '/consulta-ram',
        element: <ConsultaRAM/>
      },
      {
        path: '/consulta_id/:personagemId',
        element: <Consulta_id/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
//<RouterProvider router={routes} />  -> é o responsavel por pegar a lista de rotas e fazer o gerenciamento ao para acessar a URL especifica