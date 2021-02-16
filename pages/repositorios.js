import axios from 'axios';

export default function Repositorios(props) {
  return (
    <>
      <h1>Hello World!</h1>
      <p>{props.repositorios}</p>
    </>
  );
}

export async function getStaticsProps() {
  const repositorios = {};

  axios.get('https://api.github.com/users/felipehfo/repos').then((res) => {
    repositorios = res.data;
  });

  return {
    props: {
      repositorios
    }
  };
}
