import React, { useEffect } from 'react';
import './Home.sass';

export const Home: React.FC = () => {
  useEffect(() => {
    const elements: any = document.querySelectorAll('.anim');

    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim_one 2.6s ${entry.target.dataset.delay} forwards ease-out`;
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      },
    );

    elements.forEach((el: any) => {
      observer.observe(el);
    });
  });

  return (
    <div className='name anim' data-delay='1'>
      <h3 className='name__profession'>
        Frontend Developer / Stockholm, Sweden
      </h3>
      <h1 className='name__gabriel anim' data-delay='1'>
        Gabriel von Platen
      </h1>
      <div className='name__line anim' data-delay='1' />
      <div className='name__about'>
        <p>
          Veniam anim nostrud et commodo irure duis culpa eu mollit dolore
          magna. Nostrud magna ipsum ea pariatur id nostrud est consequat
          incididunt do ea. Aliqua nostrud amet irure eiusmod est reprehenderit
          occaecat ea cillum velit reprehenderit non dolore sit. Pariatur sunt
          nulla aliquip minim ut proident eiusmod.
        </p>
      </div>
      <a
        href='https://www.docdroid.net/J5U2Pxs/cv-pdf'
        target='_blank'
        className='btn btn--orange name__resume-btn anim'
        data-delay='1'
      >
        My Resume
      </a>
    </div>
  );
};
