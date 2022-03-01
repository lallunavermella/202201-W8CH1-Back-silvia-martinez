const PokemonSSR = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <ul>
      {/*  {pokemons.map((pokemon) => (
        <li key={pokemon}>{pokemon.name}</li>
      ))} */}
    </ul>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://pokesil.herokuapp.com/pokemon");
  const pokemons = await res.json();
  console.log(pokemons);
  return {
    props: {
      pokemons,
    },
  };
}

export default PokemonSSR;
