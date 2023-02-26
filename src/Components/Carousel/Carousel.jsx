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
      style={{
        background: `linear-gradient(#9b9b9ba5, #eeeeee5a), url(${projectInfo.background})`,
      }}
    >
      <div className="carousel__blur">
        <div className="carousel__container">
          {projectsInfo.map((project) => {
            return (
              <img
                loading="lazy"
                decoding="async"
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
          <h4>¿Cuál fue mi rol dentro del proyecto?</h4>
          <p>{projectInfo.role}</p>
          <ul>
            {projectInfo.stack &&
              projectInfo.stack.map((element) => {
                return <li className="carousel__stackElement">{element}</li>;
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
