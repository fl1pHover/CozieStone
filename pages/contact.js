import React from 'react';
import styles from '../styles';

const Contact = () => {
  return (
    <div
      className={`${styles.flexCenter} flex-col my-[25vh] sm:text-[25px] md:text-[30px]`}
    >
      <a href="#" className="text-poop hover:text-[#333333]">
        + 7 702 532 44 20
      </a>
      <div className="flex gap-[5px]">
        <a href="#" className="poop__text">
          e.tanaev@gmail.com
        </a>
        <p> | </p>
        <a href="#" className="poop__text">
          telegram
        </a>
      </div>
      <p>Ulaanbaatar, Mongolia</p>
    </div>
  );
};

export default Contact;
