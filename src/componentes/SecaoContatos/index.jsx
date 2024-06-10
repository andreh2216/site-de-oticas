import Image from "next/image";
import estilos from './SecaoContatos.module.css';


import Local from "@/../../public/local.png";
import Tel from "../../../public/telefone.png";
import email from "../../../public/email.png";

import fb from "../../../public/fb.png";
import ig from "../../../public/ig.png";
import tt from "../../../public/tt.png";



export default function SecaoContatos(){
    return(
        <section id="contato" className={estilos.secaoContatos}>

<div className={estilos.max}>

                <h2 className={estilos.color}>FALE CONOSCO</h2>
                <p className={estilos.color}>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
</div>


                <div className={estilos.container_contatos}>

                            <ul className={estilos.contato}>

                                <li className={estilos.lista_titulo} >Contatos</li>

                                <li className={estilos.lista}>
                                    <Image src={Local} className={estilos.img} />
                                    <p>Nova Iguaçu, RJ</p>
                                </li>
                                <li className={estilos.lista}>
                                    <Image src={Tel}  className={estilos.img}/>
                                    <p>(21) 9999-9999</p>
                                </li>

                                <li className={estilos.lista}>
                                    <Image src={email}  className={estilos.img}/>
                                    <p>contato@oticavida.com</p>
                                </li>


                               
                                

                            </ul>


                            <ul className={estilos.redes}>

                                <li className={estilos.lista_titulo}>Redes</li>

                                <li className={estilos.lista}>
                                    <Image src={fb}  className={estilos.img}/>
                                    <p>/OticaVida</p>
                                </li>
                                <li  className={estilos.lista}>
                                    <Image src={ig}  className={estilos.img}/>
                                    <p>@oticavidar</p>
                                </li>

                                <li className={estilos.lista}>
                                    <Image src={tt}  className={estilos.img}/>
                                    <p>@oticavidar</p>
                                </li>
                            </ul>

                </div>


        </section>
    )
}