import Image from "next/image";
import styles from "@/app/styles/community.module.css";
import dataImg from "@/app/assets/data.jpg";
import frontendImg from "@/app/assets/frontend.jpg";
import backendImg from "@/app/assets/backend.jpg";

export const metadata = {
  title: "Student Community",
  description: "Generated by create next app",
};

const Community = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          One shared passion: <span className={styles.software}>Software</span>
        </h1>
        <p>Join our community and share your favorite project</p>
      </header>
      <main className={styles.main}>
        <h2>Data Science</h2>

        <ul className={styles.projects}>
          <li>
            <Image src={dataImg} alt="big data" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <Image src={frontendImg} alt="frontend" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
          <li>
            <Image src={backendImg} alt="backend" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </li>
        </ul>
      </main>
    </>
  );
};
export default Community;
