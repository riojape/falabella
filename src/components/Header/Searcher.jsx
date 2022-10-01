import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BoxIcon, IconSearch, Input, Search } from "../../styles/Header";

const Searcher = () => {
  return (
    <Search>
      <Input type="text" placeholder="Buscar en falabella.com" />
      <BoxIcon>
        <IconSearch icon={faMagnifyingGlass} />
      </BoxIcon>
    </Search>
  );
};

export default Searcher;
