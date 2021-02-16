import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <h3>Apresentação</h3>
      <p>
        Olá! Meu nome é Felipe Henrique e sou um entusiasta no desenvolvimento
        web.
      </p>
      <Link href="/sobre">
        <a>Saiba mais sobre mim</a>
      </Link>

      <h3>Brincadeiras à parte</h3>
      <p>
        O título é um marco na vida de um desenvolvedor que no seu primeiro
        código ele provavelmente fez um 'Hello World!'.
      </p>

      <h3>Sobre este projeto</h3>
      <p>
        A ideia deste projeto é ganhar um desenvolvimento pessoal e trazer
        alguns conhecimentos do Framework NextJS. Lógico que não irei trazer
        tudo porém com estas partes já irão conseguir dar seus primeiros passos
        para conhecer essa tecnologia.
      </p>
      <Link href="/exemplos">
        <a>Alguns exemplos das novidades do NextJS</a>
      </Link>
    </>
  );
}
