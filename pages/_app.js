import './globals.css';

// Globals CSS não podem ser inseridos direto no index. NextJS retornará um erro

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
