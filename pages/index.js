import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Conhecendo NextJS</title>
      </Head>

      <header>
        <h1 className="title">Hello World!</h1>
      </header>

      <main className="container">
        <h3 className="subtitle">Apresentação</h3>
        <p className="text">
          Olá! Meu nome é Felipe Henrique e sou um entusiasta no desenvolvimento
          web.
        </p>
        <Link href="/sobre">
          <a className="link">Saiba mais sobre mim</a>
        </Link>

        <h3 className="subtitle">Brincadeiras à parte</h3>
        <p className="text">
          O título é um marco na vida de um desenvolvedor que no seu primeiro
          código ele provavelmente fez um 'Hello World!'.
        </p>

        <h3 className="subtitle">Sobre este projeto</h3>
        <p className="text">
          A ideia deste projeto é ganhar um desenvolvimento pessoal e trazer
          alguns conhecimentos do Framework NextJS. Lógico que não irei trazer
          tudo porém com estas partes já irão conseguir dar seus primeiros
          passos para conhecer essa tecnologia.
        </p>
        <Link href="/exemplos">
          <a className="link">Alguns exemplos das novidades do NextJS</a>
        </Link>
      </main>
    </>
  );
}
