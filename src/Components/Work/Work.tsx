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
            <p>{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
