import Home from 'src/containers/home';

export default async function Page({ params: { lng } }) {
  return <Home lng={lng} />;
}
