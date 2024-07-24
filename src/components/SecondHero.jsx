export default function SecondHero({
  children,
  hero = "defaultHero",
  backgroundImage,
}) {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <header className={hero} style={heroStyle}>
      {children}
    </header>
  );
}
