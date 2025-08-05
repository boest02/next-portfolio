import fetchResumeData from "@/lib/fetchResumeData";

// Import the ProfileCard component we will use
import ProfileCard from "../../components/ProfileCard";
// Import the ResumeData type from its definition file, adjust the path if needed
import type { ResumeData } from "../../types/ResumeData.ts";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardTeaser from "@/components/ProjectCardTeaser";


// This is a Server Component, so data fetching happens on the server.
interface TestProps {
  searchParams?: {
    fileName?: string;
  };
}

export default async function Test() {
  const fileName: string = "resume_dev";
  const resumeData: ResumeData = await fetchResumeData(fileName);

  // Pass the 'basics' object from the loaded data to the ProfileCard component.
  return (
    <>
      <h1 style={{ marginBottom: "15px" }}>My Resume Test Page</h1>
      {/* The ProfileCard component is fed the data it needs */}
      <ProfileCard basics={resumeData.basics} type="photo" />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {resumeData.projects.map((project, index) => (
          <ProjectCardTeaser project={project} key={index}>
            <ProjectCard project={project} key={index} />
          </ProjectCardTeaser>
        ))}
      </div>
    </>
  );
}
