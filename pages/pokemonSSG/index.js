import Image from "next/image";
import Link from "next/link";

function PokemonsSSG({ results }) {
  return (
    <>
      <div>
        <h2>Pokemon SSG</h2>
        <ul>
          {results &&
            results.map((pokemon) => (
              <Link
                key={pokemon.name}
                href={`/pokemonSSG/${pokemon.id}`}
                passHref
              >
                <li>
                  <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    width="100"
                    height="100"
                  />
                  <p>{pokemon.name}</p>
                </li>
              </Link>
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
  };
}

export default PokemonsSSG;
