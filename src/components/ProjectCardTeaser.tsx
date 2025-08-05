"use client";

import React from "react";
import { useState, useRef } from "react";
import styles from "./styles/projectCard.module.css";
import { ResumeProject } from "@/types/ResumeData";
import Dialog from "@/components/Dialog";

interface ProjectCardProps {
  project: ResumeProject;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, children }) => {
  const teaserText = (text: string) => {
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (open) {
      ref.current?.close();
    } else {
      ref.current?.showModal();
    }
    setOpen((open) => !open);
  };

  return (
    <article className={styles.outlineWrapper}>
      <div className={styles.name}>{project.name}</div>
      <div className={styles.type}>{project.type}</div>

      <div className={styles.description}>
        {teaserText(project.description)}
      </div>

      <div className={styles.tech}>
        {project.tech.map((item, index) => (
          <div className={`${styles.item} ${styles.two}`} key={index}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={toggleDialog}>Show Me</button>
      <Dialog ref={ref}>
        {children}
        <button onClick={toggleDialog}>Close</button>
      </Dialog>
    </article>
  );
};

export default ProjectCard;
