import { useState } from "react";
import styles from "../styles/page.module.css";

export default function Home() {
  //state
  const [dark, setDark] = useState(false);
  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <main className={`${styles.container_center} ${dark ? styles.container_dark : styles.container_light} `}>
      <h1>Home Page</h1>
      <button onClick={handleDark}>dark / light ☀️</button>
    </main>
  );
}
