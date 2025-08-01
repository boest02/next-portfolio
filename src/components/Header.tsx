"use client"; // for app/ directory, not needed in pages/

import Link from "next/link";

import styles from "./styles/header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
];

const links = [
  {
    name: "Home",
    target: "/",
  },
  {
    name: "Resume",
    target: "/resume",
  },
  {
    name: "Blog",
    target: "/blog",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.socials}>
        {socials.map((social, index) => {
          return (
            <a href={social.url} target="_blank" key={index}>
              <FontAwesomeIcon icon={social.icon} size="xl" />
            </a>
          );
        })}
      </nav>
      <nav className={styles.links}>
        {links.map((link, index) => (
          <Link href={link.target} key={index}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
export default Header;
