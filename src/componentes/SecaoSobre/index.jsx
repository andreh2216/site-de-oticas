import estilos from './SecaoSobre.module.css';
import Image from "next/image";
import Loja from "../../../public/loja.png";
import Atendimento from "../../../public/atendimento.png";



export default function Sobre(){
    return(

        <section id="sobre" className={estilos.secaoSobre}>

                <h2>QUEM SOMOS NÓS</h2>
                <p className={estilos.parag}>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. 
                </p>

                    <div className={estilos.container_cards}>




                        <Image src={Loja} className={estilos.card_img}/>


                        <div className={estilos.card_info}>
                            <h3 className={estilos.subti}>NOSSAS FILIAIS</h3>
                            <p className={estilos.par}>Hoje temos mais de 20 filiais pelo Brasil e <br></br>na América</p>
                        </div>


                        <div className={estilos.card_info}>
                            <h3  className={estilos.subti}>ATENDIMENTO <br></br>FLEXÍVEL</h3>
                            <p className={estilos.par}>Nossa equipe possui é treinada para te atender</p>
                        </div>




                        <Image src={Atendimento} className={estilos.card_img}/>




                    </div>



        </section>

    )
}