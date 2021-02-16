# Conhecendo o NextJS

Exemplo de uma aplicação utilizando o Framework NextJS de React.

- [ ] https://conhecendo-nextjs.vercel.app - Hospedagem na Vercel.

## File System Routing

- [ ] Usamos por baixo dos panos um sistema de rotas do NextJS onde cada Arquivo JS dentro da pasta 'pages' na raiz do projeto se torna uma rota. O Arquivo index.js se torna a página principal (site.com/) e neste exmplo as páginas exemplos e sobre se tornam (site.com/exemplos e site.com/sobre) respectivamente. Você ainda pode criar diretórios que vão se tornar parte das rotas entre outras funções que iremos exemplificar mais à frente.

## Link do NextJS

- [ ] Ao clicar em qualque um dos links na Página principal você já estará usando um recurso. Estes links utilizam do Prefetch para carregar a página seguinte do link, porém isso somente é feito no ambiente de produção.

## getStaticsProps

- [ ] getStaticsProps é executado no processo de build da página e esse processo é executado somente uma vez. Ele basicamente congela (vira estático)
      estes dados vindo de algum lugar.
- [ ] revalidate - Essa propriedade revalida estes dados pois talvez em algum momento você precise que seja atualizado estes dados estáticos. A cada acesso passando o tempo da propriedade revalidate irá trazer o dado mais atual.
- [ ] Conclusão: Uma das vantagens da função getStaticsProps é de que ela traz a segurança de que sua página não apresente um erro vindo de um banco de dados ou de uma API, por exemplo. Caso você esteja usando o getStaticsProps para buscar dados em uma API ou banco de dados e a função revalidate seja acionada e neste momento o banco de dados ou API retorne um erro, a função getStaticsProps não substituirá o que está em produção, somente ela se ela conseguir trazer os dados sem nenhum erro que ela substituirá o que está em produção.
