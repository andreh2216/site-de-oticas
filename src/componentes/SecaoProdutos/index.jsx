import Image from "next/image";
import Oculos1 from "../../../public/oculos01.png";
import Oculos2 from "../../../public/oculos02.png";
import Oculos3 from "../../../public/oculos03.png";
import Oculos4 from "../../../public/oculos04.png";

import estilos from "./SecaoProdutos.module.css"


export default function SecaoProdutos(){
    return(

            <div id="produto" className={estilos.container}>
                                    <h1>NOSSOS PRODUTOS</h1>
                                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.<br></br>
Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                                <div className={estilos.container_imagens}>

                                <div className={estilos.card}>
                                    <h3>Óculos de grau</h3>
                                    <Image className={estilos.card_imagem} src={Oculos1}/>
                                    <p>R$ 500,00</p>
                                </div>

                                <div className={estilos.card}>
                                    <h3>Óculos transition</h3>
                                    <Image className={estilos.card_imagem} src={Oculos2}/>
                                    <p>R$ 750,00</p>
                                </div>


                                <div className={estilos.card}>
                                    <h3>Óculos de sol</h3>
                                    <Image className={estilos.card_imagem} src={Oculos3}/>
                                    <p>R$ 700,00</p>
                                </div>

                                <div className={estilos.card}>
                                    <h3>Óculos infantil</h3>
                                    <Image className={estilos.card_imagem} src={Oculos4}/>
                                    <p>R$ 500,00</p>
                                </div>

                                </div>


                                <p className={estilos.titulo_lista}>Todos os nossos produtos incluem:</p>

                                <ul className={estilos.lista}>
                                    <li>Garantia de 1 ano</li>
                                    <li>Manutenção preventiva</li>
                                    <li>Descontos especiais na compra da segunda unidade</li>
                                    <li>Flexibilidade de pagamento</li>
                                </ul>

            </div>

    )
}