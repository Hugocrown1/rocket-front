import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="grid grid-cols-2 px-12 py-6 h-[500px]  ">
      <div className=" flex flex-col gap-4">
        <h1 className="text-5xl font-semibold text-white bg-black py-1 px-2 w-fit">
          ROCKET TARRO
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
      <div className="relative w-full h-full">
        <Image
          fill
          alt="Producto destacado"
          src={"https://hdpng.com/images/png-mug-coffee-mug-1800.png"}
        />
      </div>
    </section>
  );
};

export default Featured;
