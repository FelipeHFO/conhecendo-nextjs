export default function Repositorios({ repositorios }) {
  return (
    <>
      <h1>Meus repositorios</h1>
      <ul>
        {repositorios.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <h4>Explicação</h4>
      <p>
        Apesar de serem dados de uma resposta da API do Github, estes dados são
        processados no momento de Build desta página, sendo assim gerada uma
        página totalmente estática com esses dados.
      </p>
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
