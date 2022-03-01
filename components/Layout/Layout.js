import Navigation from "../Navigation/Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
