import SlideShow from "../components/header/slide/slide";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  // console.log("Server and Client");
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <SlideShow />
        </div>
        <div className={styles.rightside}>
          <div className={styles.top}>
            <h1>The Future of Education</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className={styles.bottom}>
            <Link href="/community">Join Our Courses</Link>
            <Link href="/teacher">Teacher</Link>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <h1>How It Works?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quaerat! Mollitia voluptate necessitatibus illum vel neque
            architecto molestias, excepturi eligendi perspiciatis ab officiis
            facilis minus, ad exercitationem, autem sint vero?
          </p>
        </section>

        <section>
          <h1>How Does One Become a Member?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            quaerat! Mollitia voluptate necessitatibus illum vel neque
            architecto molestias, excepturi eligendi perspiciatis ab officiis
            facilis minus, ad exercitationem, autem sint vero?
          </p>
        </section>
      </main>
    </>
  );
}
