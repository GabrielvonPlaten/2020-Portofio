import React from 'react';
import './Work.sass';

import workData from '../../data/works.json';
import { url } from 'inspector';

export const Work: React.FC = () => {
  return (
    <div className='work-container'>
      {workData.works.map((work: any) => (
        <div
          className='work-container__work'
          style={{ backgroundImage: `url(${work.thumbnail})` }}
        >
          <div className='work-darkBackground' />
          <div className='work-about'>
            <h2>{work.name}</h2>
            <ul className='tech-list'>
              {work.tech.map((tech: any) => (
                <li className='tech-list__item'>{tech.name}</li>
              ))}
            </ul>
            <p>{work.description}</p>
            <ul className='links-list'>
              {work?.github && (
                <li>
                  <a className='btn btn--small' href={work.github}>
                    Github
                  </a>
                </li>
              )}
              <li>
                <a className='btn btn--small' href={work.website}>
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
