import Link from 'next/link';

export default function Exemplos() {
  return (
    <>
      <header>
        <h1 className="title">NextJS</h1>
      </header>
      <main className="container">
        <h2 className="subtitle">Alguns recursos deste Projeto</h2>
        <h4 className="subtopico">File System Routing</h4>
        <p className="text">
          Neste projeto é apresentado o NextJS e para conseguirmos trabalhar com
          ele é necessário criar o diretório 'pages' na pasta raiz do projeto.
        </p>
        <p className="text">
          Esta pasta 'pages' utiliza o conceito de páginas File System Routing
          que faz com que cada arquivo JS dentro dela seja uma rota no projeto.
        </p>
        <p className="text">
          Dessa forma o arquivo 'index.js' automaticamente se torna a nossa
          página principal (site.com/).
        </p>
        <p className="text">
          Outros arquivos JS como neste exmplo os arquivos 'exemplos.js' e
          'sobre.js' se tornam rotas (site.com/exemplos e site.com/sobre).
        </p>
        <p className="text">
          Você também pode criar diretórios e rotas dinâmicas como segue imagens
          abaixo:
        </p>
        <p className="text">Uma imagem aqui</p>

        <h4 className="subtopico">Link do NextJS</h4>
        <p className="text">
          O Link do NextJS permite você acessar essas rotas da pasta 'pages', o
          diferencia deste 'Link' é que quando em Ambiente de Produção ele faz o
          Prefetch (Pré busca) da página seguinte do Link somente ao passar o
          mouse em cima do 'Link'.
        </p>

        <h4 className="subtopico">
          Geração de Páginas Estáticas a partir de conteúdos dinâmicos
        </h4>
        <p className="text">
          Este tópico é um pouco mais avançado porém vou tentar explicar de
          forma simples.
        </p>
        <p className="text">
          Uma página estática ou que contém somente dados estáticos são
          geralmente páginas mais simplistas que não precisam de uma alteração.
          O seu conteúdo não vai mudar por conta disso o nome estático.
        </p>
        <p className="text">
          Já uma página dinâmica ou que contém dados dinâmicos, possui dados que
          podem mudar a cada requisição, para cada cliente que pedir este
          conteúdo pode ser uma resposta distinta da outra. Um exemplo bem
          simples, páginas que utilizam uma forma de login, para cada pessoa que
          logar a resposta será diferente.
        </p>
        <h4 className="subtopico">Onde o NextJS entra nisso tudo?</h4>
        <p className="text">
          O NextJS traz uma funcionalidade que mescla uma página estática mas
          que traz conteúdos dinâmicos!
        </p>
        <h4 className="subtopico">Como assim?</h4>
        <p className="text">
          A função getStaticsProps é uma das funcionalidades que mescla esses
          dois tipos. Ela é executada no momento de Build (Contrução) da página,
          sendo assim ela busca dados dinâmicos antes da criação da página e
          caso ela seja executada com êxito ela retorna esses dados estáticos
          para o lado do cliente.
        </p>
        <h4 className="subtopico">
          Mas o Build não é executado somente uma vez? Como isso é dinâmico?
        </h4>
        <p className="text">
          A função getStaticsProps tem uma propriedade que se chama 'revalidate'
          onde a cada nova requisição, ela revalida os dados trazendo os dados
          mais atuais.
        </p>
        <h4 className="subtopico">A cereja do bolo vem agora!</h4>
        <p className="text">
          Caso a revalidação dos dados traga algum erro vindo da resposta, os
          dados que estão estáticos serão mantidos, somente com o sucesso da
          revalidação irá substituir esses dados pelos novos dados.
        </p>
        <h4 className="subtopico">Vamos ver na Prática!</h4>
        <p className="text">
          No exemplo abaixo irei trazer os dados da API do Github para uma
          página utilizando o getStaticsProps e transformando eles em dados
          estáticos
        </p>
        <Link href="repositorios">
          <a className="link">Meus repositorios</a>
        </Link>
      </main>
    </>
  );
}
