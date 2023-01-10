'use client';

import styles from '../../styles';

const PrintScreen = () => {
  return (
    <section
      className={`${styles.xPaddings} flex sm:flex-row flex-col text-white gap-16 mt-[50px] sm:mt-[100px]`}
    >
      <div className="flex max-w-[500px]">
        <img
          src="/images/oriental/5.png"
          alt="print image"
          className="w-full h-auto object-cover aspect-3/4 mx-auto"
        />
      </div>

      <div className={`${styles.subTitle} block`}>
        <div className="pb-0 sm:pb-8">
          <h2 className="">Nemegt Canyon</h2>
          <p className="font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            nisi.
          </p>
        </div>
        <p className="my-10">Price: 499,000 MNT</p>
        <div>
          <p className="font-normal">Select canvas size</p>
          <div className="grid xs:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-2 md:gap-5 text-[13px] sm:text-[16px] lg:text-[20px] mt-1">
            <button className={`${styles.sizeButton}`}>
              24&quot; x 10&quot;
            </button>
            <button className={`${styles.sizeButton}`}>
              24&quot; x 10&quot;&quot;
            </button>

            <button className={`${styles.sizeButton}`}>
              24&quot; x 10&quot;
            </button>
            <button className={`${styles.sizeButton}`}>
              24&quot; x 10&quot;
            </button>
          </div>
        </div>
        <button className="bg-orange bg-opacity-70 sm:mt-20 mt-10 px-20 rounded-[5px] py-2 tracking-wide font-normal uppercase inline-block w-full sm:w-auto">
          Payment method
        </button>
      </div>
    </section>
  );
};

export default PrintScreen;
