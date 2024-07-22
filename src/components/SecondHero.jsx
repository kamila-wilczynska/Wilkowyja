export default function SecondHero({ children, hero = "defaultHero" }) {
  return <header className={hero}>{children}</header>;
}
