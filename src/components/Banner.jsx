export default function Banner({ title, subtitle, children }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div>{subtitle}</div>
      {children}
    </div>
  );
}
