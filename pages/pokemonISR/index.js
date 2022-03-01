import Image from "next/image";

function PokemonsISR({ results }) {
  return (
    <>
      <div>
        <h2>Pokemon ISR</h2>
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

export async function getStaticProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_POKE);
  const { results } = await response.json();

  return {
    props: { results },
    revalidate: 20,
  };
}

export default PokemonsISR;
