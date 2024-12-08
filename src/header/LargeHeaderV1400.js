import { Fragment } from "react";
import Header from './Header';
import HeaderBanner from './HeaderBanner';
import HeaderChannel from './HeaderChannel';

function LargeHeaderV1400() {
  
  return (
    <Fragment>
        <div className='block'>
          <Header version="normal"/>
          <HeaderBanner />
          <HeaderChannel version="normal"/>
        </div>
    </Fragment>
  );
}

export default LargeHeaderV1400;