import Image from "next/image";
import Logo from "../../../public/logo.png";

import SecaoProdutos from "../SecaoProdutos/index.jsx";

import estilos from "./Topo.module.css";
import Link from "next/link";

export default function Topo(){
    return(
        <header className={estilos.topo}>
           <Image src={Logo} alt="logomarca" className={estilos.logotipo} />

           <nav>

            
                <Link className={estilos.links} href="#produto">PRODUTOS</Link>
                <Link className={estilos.links} href="#sobre">SOBRE</Link>
                <Link className={estilos.links} href="#contato">CONTATO</Link>

           </nav>
        
        </header>
    )
}