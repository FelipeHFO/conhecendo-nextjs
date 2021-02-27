import Link from 'next/link';
import Image from 'next/image';

export default function Sobre() {
  return (
    <>
      <header>
        <h3 className="title">Sobre</h3>
      </header>
      <main className="container">
        <h1 className="author">Felipe Henrique Fonseca Oliveira</h1>
        <h4 className="sub-author">
          Estudante de Ciência da Computação e Desenvolvedor Junior
        </h4>
        <p className="text">
          Hoje aos meus 25 anos sou estudante de Ciência da Computação na
          Pontifícia Universidade Católica de Minas Gerais e Desenvolvedor
          Junior na Empresa Medsystem.
        </p>
        <p className="text">
          Minha paixão pelo desenvolvimento web começou no início de 2019,
          sempre gostei de programar desde linguagens de baixo nível como C até
          as de alto nível como C# e Java mas nada voltado para web.
        </p>
        <p className="text">
          Em 2019 por conta de uma matéria na faculdade precisei expandir meus
          conhecimentos no desenvolvimento web e foi uma viajem sem volta.
          Acabei me deparando e me apaixonando por JavaScript, uma linguagem
          onde a curva de aprendizado é muito grande e foi fazendo os projetos
          que me imaginei em um futuro desenvolvendo aplicações web, algo mudou
          dentro de mim quando conheci o Desenvolvimento Web.
        </p>

        <h4 className="subtitle">Links</h4>
        <div className="container-social">
          <Link href="/">
            <div className="icon-facebook"></div>
          </Link>
          <Link href="/">
            <div className="icon-github"></div>
          </Link>
          <Link href="/">
            <div className="icon-linkedin"></div>
          </Link>
        </div>

        <h3 className="subtitle">Caso não tenha visto</h3>
        <p className="text">
          Abaixo segue o link onde explico mais deste projeto.
        </p>
        <Link href="exemplos">
          <a className="link">Conhecendo um pouco do NextJS</a>
        </Link>
      </main>
    </>
  );
}
