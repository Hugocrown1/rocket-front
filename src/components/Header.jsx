import { IconRocket } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const routes = [
    {
      name: "Inicio",
      href: "/",
    },
    {
      name: "Productos",
      href: "/productos",
    },
    {
      name: "Categorias",
      href: "/categorias",
    },
  ];
  return (
    <header className="flex flex-row justify-between items-center p-2 border-b-[1px]  h-[55px]  ">
      <Link className="flex flex-row items-center" href={"/"}>
        <IconRocket size={40} />{" "}
        <p className="text-2xl font-extrabold">Robertito C</p>
      </Link>
      <nav className="flex flex-row justify-between">
        <ul className="flex flex-row gap-x-4">
          {routes.map((route, index) => (
            <li key={index}>
              <Link
                className="px-2 py-1 font-bold  border-b-4 border-transparent hover:border-[#ffd500] "
                href={route.href}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-x-2 font-bold">
        <Link href={"/cuenta"}>Cuenta</Link>
        <Link href={"/carrito"}>Carrito (0)</Link>
      </div>
    </header>
  );
};

export default Header;
