import React from "react";

const Banner = () => {
  return (
    <section className="relative flex items-center justify-center h-[700px] w-ful ">
      <div className="flex flex-col gap-1 text-white">
        <p className=" text-8xl font-bold">ROCKET STORE</p>
        <div className="flex w-full gap-12 text-xl justify-center items-center font-medium">
          <button className="border-2 border-white p-2">PRODUCTOS</button>
          <button className="border-2 border-white p-2">CATEGORIAS</button>
        </div>
      </div>
      <video
        src={require("../../public/assets/waves.mp4")}
        autoPlay
        muted
        loop
        className="absolute -z-10 object-cover h-full w-full"
      />
    </section>
  );
};

export default Banner;
