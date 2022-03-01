import { useEffect, useState } from "react";
import Image from "next/image";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(process.env.NEXT_PUBLIC_API);
      const pokemons = await response.json();
      const pokePromise = Promise.all(
        pokemons.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
      );
      const pokemonsList = await pokePromise;
      setPokemons(pokemonsList);
      setLoading(false);
    })();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!pokemons) return <p>Los pokemon no quieren decirte hola</p>;

  return (
    <div>
      <ul>
        {pokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.forms.name}
                width="200"
                height="100"
              />
              <p>{pokemon.forms[0].name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Pokemon;
