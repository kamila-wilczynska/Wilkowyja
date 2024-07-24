import styles from "./Banner.module.css";

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
