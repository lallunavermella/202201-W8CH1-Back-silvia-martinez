import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Navigation = () => {
  return (
    <>
      <List>
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
      </List>
    </>
  );
};

export default Navigation;
