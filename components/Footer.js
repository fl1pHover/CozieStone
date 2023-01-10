import React from 'react';
import styles from '../styles';
import { CopyIcon, FacebookIcon, IglIcon, YoutubeIcon } from './icons';

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} flex-col my-20`}>
      <div className="flex gap-[15px] mb-[7px]">
        <a href="youtube.com">
          <YoutubeIcon />
        </a>
        <a href="youtube.com" className="duration-300">
          {/* <img src="/images/vimeo.svg" alt="" /> */}
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.98266L0.878837 6.05324C0.878837 6.05324 2.53266 4.59117 2.92414 5.56588C3.31562 6.54059 5.94413 14.8256 5.94413 14.8256C5.94413 14.8256 6.7271 17.0707 8.47679 17.0707C10.0667 17.0707 11.3849 15.5926 12.4076 14.554C15.1639 11.7657 18.0241 8.32224 18.5514 4.29556C18.7911 2.46599 17.8883 0.540534 15.851 0.484608C14.8044 0.452651 13.7258 0.772228 12.871 1.36345C11.6885 2.18636 11.0174 3.50461 10.7218 4.88678C10.7218 4.88678 12.2797 3.8162 13.0627 5.07853C13.5341 5.84551 13.2065 6.82821 12.839 7.57123C12.4875 8.28229 12.088 8.97737 11.6566 9.64848C11.353 10.1199 10.8816 10.9268 10.2345 10.9268C9.4515 10.9268 9.17985 9.01732 9.068 8.498C8.65255 6.66843 8.66854 4.76694 8.11726 2.96932C7.7897 1.89075 7.07864 0.220957 5.65652 0.588471C2.63651 1.37143 0 4.98266 0 4.98266Z"
              fill="#a3a3a3"
              className="hover:fill-vivid footer__icon"
            />
          </svg>
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
