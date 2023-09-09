import useApi from "_/hooks/api";

import { PageTitle } from "_/components/page";

const ProjectsList = () => {
  const { data } = useApi<Api.Projects.Index>(["projects"]);

  if (!data) {
    return null;
  }

  if (data.length < 1) {
    return <p>No projects found!</p>;
  }

  return (
    <ul>
      {data.map(({ id, name, slug }) => (
        <li key={id}>
          {name} / {slug}
        </li>
      ))}
    </ul>
  );
};

const ProjectsIndex = () => (
  <>
    <PageTitle>Projects</PageTitle>
    <ProjectsList />
  </>
);

export default ProjectsIndex;
