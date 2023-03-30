import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "/src/assets/images/Logo.png";
import Buy from "/src/assets/images/Buy.png";

export default function Header() {
  return (
    <header className="relative w-full h-48 flex flex-col justify-start items-center px-16 bg-white">
      <div className=" w-full flex items-center my-7">
        {/* logo */}
        <div className="flex items-center mr-7">
          <span className="mr-2">
            <img src={Logo} alt="Logo" />
          </span>
          <h1 className="font-semibold text-4xl text-Primary">Digital Store</h1>
        </div>
        {/* input */}
        <Input />
        {/* link */}
        <a
          href="#"
          className="underline-offset-4 text-base ml-12 mr-7 text-DarkGray-20 hover:underline">
          Cadastre-se
        </a>
        {/* login */}
        <Button text={"Entrar"} />
        {/* compras */}
        <div className="scale-125 cursor-pointer hover:scale-110">
          <img src={Buy} alt=".." />
        </div>
      </div>
      {/* navbar */}
      <nav className="w-full my-7">
        <ul className="flex gap-8">
          <li>
            <a
              href="#"
              className="hover:text-Primary hover:underline hover:underline-offset-4 text-DarkGray-20 hover:font-bold">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-Primary hover:underline hover:underline-offset-4 text-DarkGray-20 hover:font-bold">
              Produtos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-Primary hover:underline hover:underline-offset-4 text-DarkGray-20 hover:font-bold">
              Categorias
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-Primary hover:underline hover:underline-offset-4 text-DarkGray-20 hover:font-bold">
              Meus Pedidos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
