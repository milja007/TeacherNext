"use client";

//used to monitor the status of the
// form(monitoring submision statuus of the form 1 of the features)
//npr preveneting user from clicking submit btn more than
// once, join loading animation,error handling if form condition fails
import { useFormStatus } from "react-dom";

const FormSubmit = () => {
  //using only pending property on this example so destructuring
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting" : "Share Teacher"}
    </button>
  );
};

export default FormSubmit;
