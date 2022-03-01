import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/pokemon"}>Pokemon</Link>
        </li>
        <li>
          <Link href={"/pokemonSSR"}>Mis pokémon SSR</Link>
        </li>
        <li>
          <Link href={"/pokemonSSG"}>Mis pokémon SSG</Link>
        </li>
        <li>
          <Link href={"/pokemonISR"}>Mis pokémon ISR</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
