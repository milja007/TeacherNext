"use server";

import { redirect } from "next/navigation";

//LIB FOLDER JE ZA SERVER FUNCTIONS
//function on which form is triggered
//nesmije biti triggered by hook or event zato moras
//korisit action instead of npr onSubmit
//-formData only on server
const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

//mora biti formData 2. argument
const shareTeacher = async (prevState, formData) => {
  const teacher = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    image: formData.get("image"),
  };
  if (
    isInvalidText(teacher.name) ||
    isInvalidText(teacher.surname) ||
    isInvalidText(teacher.email)
  ) {
    return {
      message: "Invalid input",
    };
  }

  redirect("/teacher");
};

export default shareTeacher;
