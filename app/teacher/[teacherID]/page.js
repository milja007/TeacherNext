//!! metadata used component
import styles from "@/app/styles/teacher-detail.module.css";
import { notFound } from "next/navigation";
//2.
const fetchUserData = async (teacherID) => {
  const res = await fetch("https://reqres.in/api/users/" + teacherID);
  const data = await res.json();
  return data.data;
};
//3.
export async function generateMetadata({ params }) {
  const user = await fetchUserData(params.teacherID);
  if (!user) {
    return {
      title: "User not found",
      description: "The user you are looking for does not exist",
    };
  }
  return {
    title: `${user.first_name} ${user.last_name}`,
    description: `Details of ${user.first_name} ${user.last_name}, Email: ${user.email}`,
  };
}
//1.
const TeacherDetailPage = async ({ params }) => {
  const user = await fetchUserData(params.teacherID);

  if (!user) {
    notFound();
  }

  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={user.avatar} alt="avatar" />
        </div>
        <div>
          <h1>
            {user.first_name} {user.last_name}
          </h1>
          <p>
            <a href="#"> {user.email} </a>
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum et,
          sapiente, rerum veniam nobis dignissimos recusandae, mollitia
          voluptates ex aliquam voluptate consectetur perspiciatis numquam rem
          quidem sequi. Expedita non exercitationem saepe pariatur. Omnis
          voluptate totam officiis, esse enim recusandae.
        </div>
      </main>
    </>
  );
};

export default TeacherDetailPage;
//OVAKO SMO PRVO PA PRETVORILI U SERVER COMPONENT ZBOG METADATE

// "use client";

// import styles from "@/app/styles/teacher-detail.module.css";
// import { notFound } from "next/navigation";
// import { useEffect, useState } from "react";
// import { use } from "react"; // Import the `use` function

// export async function generateMetadata() {
//   return {};
// }
// const TeacherDetailPage = ({ params }) => {
//   const [user, setUser] = useState([]);

//   // Unwrap the `params` Promise using `React.use()`
//   const unwrappedParams = use(params);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://reqres.in/api/users/" + unwrappedParams.teacherID // Use unwrappedParams
//       );
//       const data = await response.json();
//       setUser(data.data);
//     } catch (error) {
//       setUser(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [unwrappedParams.teacherID]); // Add unwrappedParams.teacherID as a dependency

//   if (!user) {
//     //GOES TO NEAREST  NOT FOUND COMPONENT
//     notFound();
//   }
//   return (
//     <>
//       <header className={styles.header}>
//         <div>
//           <img src={user.avatar} alt="avatar" />
//         </div>
//         <div>
//           <h1>
//             {user.first_name} {user.last_name}{" "}
//           </h1>
//           <p>
//             {" "}
//             <a href="#">{user.email}</a>
//           </p>
//         </div>
//       </header>
//       <main className={styles.main}>
//         <div>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </div>
//       </main>
//     </>
//   );
// };

// export default TeacherDetailPage;
