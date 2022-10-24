import Contenido from "./Componentes/Contenido";
import Contenido2 from "./Componentes/Contenido2";
import Indice from "./Componentes/Indice";
import Pagina from "./Componentes/Pagina";
import Titulo from "./Componentes/Titulo";
import './style/Styles.css';

export function App(){
  return ( 
    <div className="Container">
    <Pagina/>
    <Titulo/>
    <Indice/>
    <Contenido/>
    <Contenido2/>
    
    
    </div>
  )
}