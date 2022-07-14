import React from "react";
import Image from "next/image";

function BackgroundImage() {
  return (
    <>
      <div className="p-4 w-full text-center bg-slate-150 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Welcome to my Portfolio!
        </h2>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Hi I'm Andrew!
        </p>
      </div>
      <div className="mb-10 bg-blend-overlay">
        <Image
          height={12}
          width={24}
          quality={100}
          src="/blackWaves.jpg"
          layout="responsive"
          objectFit="cover"
          alt="Background image welcome users to Andrew's portfolio."
        />
      </div>
    </>
  );
}

export default BackgroundImage