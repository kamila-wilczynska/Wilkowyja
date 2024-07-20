export default function SecondHero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

SecondHero.defaultProps = {
  hero: "defaultHero",
};
