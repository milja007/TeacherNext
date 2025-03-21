import Link from "next/link";
import styles from "@/app/styles/main-teacher.module.css";
import Teacher from "../components/header/teachers/teacher";
const TeacherPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Our Courses Instructors</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Link href="/teacher/share"> Recommend a New Teacher</Link>
      </header>
      <main>
      <Teacher />
      </main>
    </>
  );
};

export default TeacherPage;
