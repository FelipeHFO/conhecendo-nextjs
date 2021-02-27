export default function Repositorios({ repositorios }) {
  return (
    <>
      <header>
        <h1 className="title">Meus repositorios</h1>
      </header>
      <main className="container">
        <h4 className="subtitle">Projetos</h4>
        <ul>
          {repositorios.map((repo) => (
            <li className="items" key={repo.id}>
              {repo.name}
            </li>
          ))}
        </ul>

        <h4 className="subtitle">Explicação</h4>
        <p className="text">
          Apesar de serem dados de uma resposta da API do Github, estes dados
          são processados no momento de Build desta página, sendo assim gerada
          uma página totalmente estática com esses dados.
        </p>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/felipehfo/repos');
  const [...repositorios] = await response.json();

  return {
    props: {
      repositorios
    },
    revalidate: 1
  };
}
