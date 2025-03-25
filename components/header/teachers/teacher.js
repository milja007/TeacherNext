"use client";
import { useEffect, useState } from "react";
import styles from "@/app/styles/main-teacher.module.css";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);

  // try {
  //     fetch("https://reqres.in/api/users")
  //       .then((res) => res.json())
  //       .then((data) => setTeachers(data.data));
  // } catch (error) {
  //   console.log(error);
  //   setTeachers(error);

  const fetchData = async () => {
    try {
      //stavis loading.js file u app za sve ili u svaki posebno tj za svaki page svoga ako hoces
      // new Promise((resolve) => setTimeout(resolve, 5000));
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      setTeachers(data.data);
      //error.js -isti k ko sa loading-za test errora ispod
      // throw new Error("Something went wrong");
    } catch (error) {
      console.log(error);
      setTeachers(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {teachers.map((teacher) => (
        <div key={teacher.id} className={styles.card}>
          <img src={teacher.avatar} alt="avatar" className={styles.card} />
          <br></br>
          <h2>
            {teacher.first_name} {teacher.last_name}
          </h2>
          <p> {teacher.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Teacher;
