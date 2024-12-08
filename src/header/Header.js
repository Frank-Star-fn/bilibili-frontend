// import { Fragment } from "react";
import React from 'react';
import LeftEntry from './LeftEntry';
import RightEntry from './RightEntry';
import RightEntryV1400 from './RightEntryV1400';
import SearchContainer from "./SearchContainer";

function Header(props) {
  // const version = props.version;
  const ele1 = (
    <div className='z-30 absolute w-100vw h-16 px-2.22vw flex justify-center items-center'>
      <LeftEntry version={props.version}/>
      <SearchContainer />
      <RightEntry />
    </div>
  );
  const ele2 = (
    <div className='z-30 absolute w-100vw h-16 px-2.22vw flex justify-center items-center'>
      <LeftEntry version={props.version}/>
      <SearchContainer />
      <RightEntryV1400 />
    </div>
  );

  if (props.version === 'normal') {
    return ele2;
  }else{ // small
    return ele1;
  }
}

export default Header;
