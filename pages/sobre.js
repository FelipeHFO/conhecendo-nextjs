import Link from 'next/link';

export default function Sobre() {
  return (
    <>
      <h2>Olá, eu sou</h2>
      <h1>Felipe Henrique Fonseca Oliveira</h1>
      <h4>Estudante de Ciência da Computação e Desenvolvedor Junior</h4>
      <p>
        Hoje aos meus 25 anos sou estudante de Ciência da Computação na
        Pontifícia Universidade Católica de Minas Gerais e Desenvolvedor Junior
        na Empresa Medsystem.
      </p>
      <p>
        Minha paixão pelo desenvolvimento web começou no início de 2019, sempre
        gostei de programar desde linguagens de baixo nível como C até as de
        alto nível como C# e Java mas nada voltado para web.
      </p>
      <p>
        Em 2019 por conta de uma matéria na faculdade precisei expandir meus
        conhecimentos no desenvolvimento web e foi uma viajem sem volta. Acabei
        me deparando e me apaixonando por JavaScript, uma linguagem onde a curva
        de aprendizado é muito grande e foi fazendo os projetos que me imaginei
        em um futuro desenvolvendo aplicações web, algo mudou dentro de mim
        quando conheci o Desenvolvimento Web.
      </p>

      <h4>Links</h4>
      <p>Facebook</p>
      <p>Instagram</p>
      <p>LinkedIn</p>
      <p>Github</p>

      <h3>Caso não tenha visto</h3>
      <p>Abaixo segue o link onde explico mais deste projeto.</p>
      <Link href="exemplos">
        <a>Conhecndo um pouco do NextJS</a>
      </Link>
    </>
  );
}
