import logo from "@/app/assets/logonovi.jpg";
import Image from "next/image";
import styles from "@/app/styles/header.module.css";
import Link from "next/link";
import NavLink from "./nav-link";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="logo" priority />
      </Link>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink href="/teacher">Teachers</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
