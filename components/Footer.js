import React from 'react';
import styles from '../styles';
import {
  CopyIcon,
  FacebookIcon,
  IglIcon,
  VivaIcon,
  YoutubeIcon,
} from './icons';

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} flex-col my-20`}>
      <div className="flex gap-[15px] mb-[7px]">
        <a href="youtube.com">
          <YoutubeIcon />
        </a>
        <a href="youtube.com">
          <VivaIcon />
        </a>
        <a href="youtube.com">
          <FacebookIcon />
        </a>
        <a href="youtube.com">
          <IglIcon />
        </a>
      </div>
      <h2 className="text-[22px] uppercase flex gap-2 items-center">
        CozieStone 2022
        <CopyIcon />
      </h2>
    </div>
  );
};

export default Footer;
