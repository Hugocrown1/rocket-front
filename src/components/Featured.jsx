import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="relative items-center  grid grid-cols-2 px-12 py-6 h-[500px] w-full bg-[#dee2e6]  ">
      <div className=" flex flex-col gap-4 z-10">
        <h1 className="text-5xl font-semibold text-white bg-black py-1 px-2 w-fit">
          ROCKET PAPOS
        </h1>
        <p className="text-left text-lg font-medium text-white bg-black p-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
          fugiat. Quisquam reiciendis aperiam nostrum, repellendus autem
          praesentium itaque illum velit eos saepe non quos eveniet impedit
          soluta rerum sint quibusdam!
        </p>

        <button className="bg-blue-600 text-white font-semibold  px-4 py-2 w-fit">
          Mirar producto
        </button>
      </div>
      <div className="relative w-full h-full z-10">
        <img
          className="aspect-auto  "
          alt="Producto destacado"
          src={
            "https://i.pinimg.com/originals/0e/05/b0/0e05b096d260feacee88505342c75b4f.png"
          }
        />
      </div>

      <div className="absolute  bg-gradient-radial from-white to-transparent blur-[100px]  rounded-full left-1/2 -translate-x-2/4 bottom-[0%]  w-[60%] h-[100%] z-0  "></div>
    </section>
  );
};

export default Featured;
