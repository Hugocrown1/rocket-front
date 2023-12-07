import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <section className="grid grid-cols-2 gap-2 max-h-[500px]">
      <div className="row-span-2 flex flex-col bg-[#dee2e6]  w-full py-4 px-8">
        <h3 className="font-bold">ROCKET PAPOS</h3>

        <img
          className="aspect-auto "
          alt="Producto destacado"
          src={
            "https://i.pinimg.com/originals/0e/05/b0/0e05b096d260feacee88505342c75b4f.png"
          }
        />
        <h3 className="font-bold">$1499</h3>
      </div>
      <div className=" flex flex-row bg-[#dee2e6] w-full py-4 px-8">
        <h3 className="font-bold">ROCKET PAPOS</h3>
        <h3 className="font-bold">$1499</h3>
      </div>
      <div className=" flex flex-row bg-[#dee2e6]  w-full py-4 px-8">
        <h3 className="font-bold">ROCKET PAPOS</h3>
        <h3 className="font-bold">$1499</h3>
      </div>
    </section>
  );
};

export default Featured;
