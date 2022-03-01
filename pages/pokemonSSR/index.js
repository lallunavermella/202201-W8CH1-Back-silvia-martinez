import Image from "next/image";

function PokemonsSSR({ results }) {
  return (
    <>
      <div>
        <ul>
          {results &&
            results.map((pokemon) => (
              <li key={pokemon.name}>
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  width="100"
                  height="100"
                />
                <p>{pokemon.name}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_POKE);
  const { results } = await response.json();

  return {
    props: { results },
  };
}

export default PokemonsSSR;
