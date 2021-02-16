# lista-repositorios-nextjs

Exemplo de uma aplicação utilizando o Framework NextJS de React.

- [ ] - https://lista-repositorios-nextjs.vercel.app - Hospedagem na Vercel.

## Link do NextJS

- [ ] - Ao clicar em qualque um dos links na Página principal você já estará usando um recurso e nem sequer conseguiu ver. Estes links utilizam do Prefetch para carregar a página seguinte do link, isso somente é visto caso tenham acessado o site na Vercel, ou seja, essa função é somente utilizada no ambiente de produção e o carregamento da página do link é muito rápido!

## getStaticsProps

- [ ] - getStaticsProps é executado no processo de build da página e esse processo é executado somente uma vez. Ele basicamente congela (vira estático)
    estes dados vindo de algum lugar.
- [ ] - revalidate - Essa propriedade revalida estes dados pois talvez em algum momento você precise que seja atualizado estes dados estáticos. A cada acesso passando o tempo da propriedade revalidate irá trazer o dado mais atual.
- [ ] - Conclusão: Uma das vantagens da função getStaticsProps é de que ela traz a segurança de que sua página não apresente um erro vindo de um banco de dados ou de uma API, por exemplo. Caso você esteja usando o getStaticsProps para buscar dados em uma API ou banco de dados e a função revalidate seja acionada e neste momento o banco de dados ou API retorne um erro, a função getStaticsProps não substituirá o que está em produção, somente ela se ela conseguir trazer os dados sem nenhum erro que ela substituirá o que está em produção.
