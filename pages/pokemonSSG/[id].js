import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function PokemonSSG({ result: pokemon }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h2>Pokemon SSG</h2>
        <Link href={"/pokemonSSG"}>Back</Link>
        <ul>
          <li key={pokemon.name}>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width="100"
              height="100"
            />
            <p>{pokemon.name}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(process.env.NEXT_PUBLIC_POKE);
  const { results } = await response.json();
  const pokemon = results.find((result) => {
    return result.id === parseInt(params.id);
  });

  return {
    props: { result: pokemon },
  };
};

export default PokemonSSG;
