const { defaultConfig } = require("next/dist/server/config-shared");
import styles from "@/app/styles/loading.module.css";
const TeacherLoading = () => {
  return <h1 className={styles.loading}>Loading....</h1>;
};

export default TeacherLoading;
