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
    <header className="flex flex-row justify-between items-center p-2 border-b-2 h-[55px] shadow-md">
      <div className="flex gap-x-4 items-center">
        <Link className="flex flex-row items-center" href={"/"}>
          <IconRocket size={40} />{" "}
          <p className="text-2xl font-bold">Rocket Store</p>
        </Link>
        <nav className="flex flex-row justify-between">
          <ul className="flex flex-row gap-x-1">
            {routes.map((route, index) => (
              <li key={index}>
                <Link className="px-2 py-1" href={route.href}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-x-2">
        <Link href={"/cuenta"}>Cuenta</Link>
        <Link href={"/carrito"}>Carrito (0)</Link>
      </div>
    </header>
  );
};

export default Header;
