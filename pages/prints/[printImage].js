'use client';

import styles from '../../styles';

const PrintScreen = () => {
  return (
    <section className={`${styles.xPaddings}`}>
      <div className="flex">
        <img src="/images/1.png" alt="print image" />
      </div>
      <div className="flex flex-col">
        <h2 className={`${styles.subTitle}`}>Nemegt Canyon</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
          nisi.
        </p>
      </div>
      
      <p>Price: 499,000 MNT</p>

      <p>Select canvas size</p>


      <button className=''></button>
    </section>
  );
};

export default PrintScreen;
