import Head from "next/head";
import estilos from "@/styles/Home.module.css";

import Topo from '../componentes/Topo/index';
import SecaoCapa from '../componentes/SecaoCapa/index';
import SecaoProdutos from "@/componentes/SecaoProdutos";
import SecaoSobre from '../componentes/SecaoSobre/index.jsx';
import SecaoContatos from "@/componentes/SecaoContatos";
import Rodape from "@/componentes/Rodape";


export default function Home() {
  return (
    <>

      <Head>
        <title>Óticas Vida - Loja de Oculos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
 <main>

      <Topo/>
      <SecaoCapa/>
      <SecaoProdutos/>
      <SecaoSobre/>
      <SecaoContatos/>
      <Rodape/>
      
      
</main>

    </>
  );
}
