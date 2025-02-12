import styles from "./style.module.scss";
import ThemeChanger from "../themeChanger";
import Meta from "../meta";
import { description as intro, siteTitle } from "../../utils";

export default function Layout({
  children,
  description = intro,
  canonical = "https://isarubim.com",
  image = "/images/profile.jpg",
}) {
  return (
    <div className={styles.container}>
      <ThemeChanger />
      <Meta
        title={siteTitle}
        description={description}
        canonical={canonical}
        image={image}
      />
      <section className={styles.wrapper}>
        <main>{children}</main>
        <footer className={styles.creator}>
          Feito com <span>💜</span> {siteTitle}.
        </footer>
      </section>
    </div>
  );
}
