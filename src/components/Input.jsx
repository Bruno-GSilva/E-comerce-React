import React from "react";
import Procurar from '/src/assets/images/Search.png'

export default function Input() {
  return (
    <label for="Search" class="relative">
      <input
        type="text"
        id="Search"
        placeholder="Pesquisar produto..."
        class="h-[60px] w-[560px] rounded-[8px] border-none px-[24px] py-[16px] bg-DarkGray-60 focus:outline-Primary"
      />
      <span class="absolute top-1/2 translate-y-[-10px] right-0 mr-6  h-5 w-5">
        <img
          src={Procurar}
          alt="..."
          class="h-full w-full object-cover"
        />
      </span>
    </label>
  );
}
