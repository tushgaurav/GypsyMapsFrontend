import Image from "next/image";
import styles from "./page.module.css";
import Weather from "../../components/Weather";

export default function Home() {
  return (
    <main className={styles.main}>
      <Weather lat={23} lon={34} />
    </main>
  );
}
