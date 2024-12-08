import './App.css';
import React from 'react';
import { Fragment } from 'react';
import LargeHeader from './header/LargeHeader';
import GridBox from './GridBox';
import GridBoxFiveCol from './GridBoxFiveCol';
import ButtonChange from './ButtonChange';

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { width };
}

function App() {
  const { width } = useViewport();
  const breakpoint = 1400;

  const eleSmall = (
    <div>
        <LargeHeader />
        <div className="font-chinese font-normal">
          <main className='mx-5'>
            <div>
              <GridBox />
              <ButtonChange />
            </div>
          </main>
        </div>
    </div>
  );

  const eleNormal = (
    <div>
        <LargeHeader />
        <div className="font-chinese font-normal">
          <main className='px-15'>
            <div>
              <GridBoxFiveCol />
              <ButtonChange />
            </div>
          </main>
        </div>
    </div>
  );

  if (width < breakpoint) {
    console.log("small, width = "+width)
    return (
      <Fragment>
        {eleSmall};
      </Fragment>
    );
  }else{ // width >= breakpoint
    console.log("normal, width = "+width)
    return (
      <Fragment>
        {eleNormal}
      </Fragment>
    );
  }
}

export default App;
