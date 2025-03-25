"use client";

import styles from "@/app/styles/share.module.css";
import ImagePicker from "@/components/header/teachers/image-picker";
import shareTeacher from "@/lib/form.action";
import FormSubmit from "@/components/header/teachers/form-submit";
//for accesing message
//Ako je jaci error mozes i throw an error pa te redirects na drugi nearest error page
//useactionstate ili bivsi useformstate je bolja praksa i bolji scaleability
import { useActionState } from "react";
const ShareTeacherPage = () => {
  //used to menage current state of the form,errors,,..
  //2 params:functionToTriggerForm,valueToSendIfLeftFunctionDontWork
  //2 values-value that  will come when form runs and
  // new function we will use in action
  const [state, formAction] = useActionState(shareTeacher, { message: null });
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share Your <span className={styles.highlight}> TEACHER!</span>
        </h1>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <div>
              <label htmlFor="name">Teacher Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="surname">Teacher Surname</label>
              <input type="text" id="surname" name="surname" required />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="teacher">Teacher CV</label>
            <textarea name="teacher" id="teacher" rows="10"></textarea>
          </div>
          <ImagePicker label="Teacher Images" name="image" />
          {state.message && <h3>{state.message}</h3>}
          <div className={styles.actions}>
            <FormSubmit />
          </div>
        </form>
      </main>
    </>
  );
};
export default ShareTeacherPage;
