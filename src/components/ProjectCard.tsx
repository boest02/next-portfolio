"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles/projectCard.module.css";
import { ResumeProject } from "@/types/ResumeData";

interface ProjectCardProps {
  project: ResumeProject;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, children }) => {
  return (
    <div className={styles.outlineWrapper}>
      <h2>Tech for this project</h2>
      <div className={styles.tech}>
        {project.tech.map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.name}>{project.name}</div>
      <div className={styles.type}>{project.type}</div>

      <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }}></div>

      <div className={styles.bullets}>
        <div className={styles.title}>Highlights:</div>
        <ul>
          {project.highlights.map((highlight, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: highlight}}></li>
          ))}
        </ul>
      </div>

      {project?.url && (
        <div className={styles.link}>
          <a target="_blank" href="{project.url}">
            Git Hub link...
          </a>
        </div>
      )}

      {project.images.length > 0 &&
        project.images.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt={
              project.name
                ? `${project.name} image ${index + 1}`
                : `Project image ${index + 1}`
            }
          />
        ))}
    </div>
  );
};

export default ProjectCard;
