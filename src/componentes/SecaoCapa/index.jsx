import estilos from './SecaoCapa.module.css';
import Capa from "../../../public/capa.png";


export default function SecaoCapa(){
    return(

        <section className={estilos.secaoCapa} >
            
            
                <div className={estilos.container_informacoes}>



                                     <div className={estilos.container_mini}>
                                        <p>Preços baixos em</p>
                                        <h1>ÓCULOS DE<br></br>GRAU E DE SOL</h1>
                                        <p>Você só encontra aqui</p>
                                    </div>


                </div>


        </section>


    )
}