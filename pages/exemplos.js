export default function Exemplos() {
  return (
    <>
      <h1>Recursos do NextJS</h1>
      <h4>File System Routing</h4>
      <p>
        Neste projeto é apresentado o NextJS e para conseguirmos trabalhar com
        ele é necessário criar o diretório 'pages' na pasta raiz do projeto.
      </p>
      <p>
        Esta pasta 'pages' utiliza o conceito de páginas File System Routing que
        faz com que cada arquivo JS dentro dela seja uma rota no projeto.
      </p>
      <p>
        Dessa forma o arquivo 'index.js' automaticamente se torna a nossa página
        principal (site.com/).
      </p>
      <p>
        Outros arquivos JS como neste exmplo os arquivos 'exemplos.js' e
        'sobre.js' se tornam rotas (site.com/exemplos e site.com/sobre).
      </p>
      <p>
        Você também pode criar diretórios e rotas dinâmicas como segue imagens
        abaixo:
      </p>
      <p>Uma imagem aqui</p>

      <h4>Link do NextJS</h4>
      <p>
        O Link do NextJS permite você acessar essas rotas da pasta 'pages', o
        diferencia deste 'Link' é que quando em Ambiente de Produção ele faz o
        Prefetch (Pré busca) da página seguinte do Link somente ao passar o
        mouse em cima do 'Link'.
      </p>
    </>
  );
}
