import { Fragment } from "react";
import React from 'react';
import LeftEntry from './LeftEntry';
import RightEntry from './RightEntry';
import SearchContainer from "./SearchContainer";

function Header(props) {
  return (
    <Fragment>
      <div className='z-30 absolute w-100vw h-16 px-2.22vw flex justify-center items-center'>
        <LeftEntry />
        <SearchContainer />
        <RightEntry />
      </div>
    </Fragment>
  );
}

export default Header;
