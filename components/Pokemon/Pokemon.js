import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(process.env.NEXT_PUBLIC_API)
      .then((res) => res.json())
      .then((pokemons) => {
        setPokemons(pokemons);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!pokemons) return <p>Los pokemon no quieren decirte hola</p>;

  return (
    <div>
      <ul className="pokemon">
        {pokemons.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Pokemon;
