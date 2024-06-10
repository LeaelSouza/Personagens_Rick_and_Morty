import { Link, Outlet } from "react-router-dom";

function Cabecalho() {
    return (
        <>
            <h1>Meu primeiro projeto React</h1>
            <Link to={'/tarefas'}>Tarefas</Link>
            <br />
            <Link to={'/consulta-ram'}>Consulta personagem</Link>
            <Outlet />
        </>
    );
}
export default Cabecalho;