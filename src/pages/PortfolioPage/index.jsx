import routeMain from "./routes";
import styles from "./styles.module.scss";

const PortfolioPage = () => {
  return (
    <section className={styles.root}>
      <h1 style={{ fontSize: "45px", color: "red" }}>PortfolioPage</h1>;
    </section>
  );
};

export { routeMain };
export default PortfolioPage;
