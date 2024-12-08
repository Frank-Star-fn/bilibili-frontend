import { Fragment } from "react";
import Header from './Header';
import HeaderBanner from './HeaderBanner';
import HeaderChannel from './HeaderChannel';

function LargeHeader() {
  
  return (
    <Fragment>
        <div className='block'>
          <Header />
          <HeaderBanner />
          <HeaderChannel />
        </div>
    </Fragment>
  );
}

export default LargeHeader;