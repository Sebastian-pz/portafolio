import { useState, useEffect } from 'react';
import { projectsInfo } from './Projects';

const Carrousel = () => {
  const [current, setCurrent] = useState('Ducker');
  const [projectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    setProjectInfo(projectsInfo.find((project) => project.project === current));
  }, [current]);

  if (!Object.keys(projectInfo)) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      className="carousel"
      style={{ background: `url(${projectInfo.background})` }}
    >
      <div className="carousel__blur">
        <div className="carousel__container">
          {projectsInfo.map((project) => {
            return (
              <img
                src={project.image}
                alt={`Imagen del proyecto ${project.project}`}
                width="200px"
                height="200px"
                className="carousel__projectImg"
                onClick={() => setCurrent(project.project)}
              />
            );
          })}
        </div>
        <div className="carousel__info">
          <h3>{projectInfo.project}</h3>
          <p>{projectInfo.description}</p>
          <p>Rol: {projectInfo.role}</p>
          <ul>
            {projectInfo.stack &&
              projectInfo.stack.map((element) => {
                return <li>{element}</li>;
              })}
          </ul>
          <h4>Repositorios</h4>
          {projectInfo.repository &&
            projectInfo.repository.map((repo) => {
              return (
                <p>
                  {repo.type}:{'  '}
                  <a href={repo.link} target="_blank" rel="noopener noreferrer">
                    {repo.link}
                  </a>
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
