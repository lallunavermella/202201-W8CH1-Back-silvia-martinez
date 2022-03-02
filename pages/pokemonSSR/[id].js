import Image from "next/image";
import Link from "next/link";

function PokemonSSR({ result: pokemon }) {
  return (
    <>
      <div>
        <h2>Pokemon SSR</h2>
        <Link href={"/pokemonSSR"}>Back</Link>
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

// export const getStaticPaths = async () => {
//   const response = await fetch(process.env.NEXT_PUBLIC_POKE);
//   const pokeApi = await response.json();
//   return {
//     paths: pokeApi.map((pokeApi) => ({
//       params: {
//         id: `${pokeApi.id}`,
//       },
//     })),
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const response = await fetch(`process.env.NEXT_PUBLIC_POKE${params.id}`);
//   const pokeApi = await response.json();

//   return {
//     props: {
//       pokemon: pokeApi,
//     },
//   };
// };

export async function getServerSideProps(context) {
  const response = await fetch(process.env.NEXT_PUBLIC_POKE);
  const { results } = await response.json();
  const pokemon = results.find((result) => {
    return result.id === parseInt(context.params.id);
  });
  return {
    props: { result: pokemon },
  };
}

export default PokemonSSR;
