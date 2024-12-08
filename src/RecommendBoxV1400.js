
function RecommendBoxV1400() {
  const local_website = "http://localhost:3000/";

  return (
  <div className='col-span-2 row-span-2'>
    <div className='pb-16 h-full'>
      <div>
        <div>
          <div></div>
          <a href={local_website}>
            <picture>
              <img 
                src="recommend-pic-1.jpg" alt="" 
                className='rounded-t-md'
              />
            </picture>
          </a>
          <div className='flex flex-col'>
            <div className='absolute z-30 w-35.47vw h-20 -mt-20 bg-gradient-to-t from-purple-443'>
            </div>
            <div 
              className='reference-element w-full h-20 rounded-b-md bg-purple-443'
            >
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <div>
        <div></div>

        <div className='absolute mx-4 -mt-16'>
          <div className='flex'>
            <a href={local_website}>
              <span className='text-white text-lg'>
                鹿角我要消灭你！
              </span>
            </a>
          </div>
        </div>

        <div>
          {/* 一排小圆点 */}
          <ul>
            <li>
              <div></div>
              <div></div>
            </li>
          </ul>
        </div>
      </div>

      <div className='absolute -mt-16 z-20 flex left-112'>
        <button className='justify-center mr-3 px-1.5 text-white bg-transparent-white rounded-lg'>
          &lt;
          {/* <svg>
            <use>
            </use>
          </svg> */}
        </button>  
        <button className='justify-center px-1.5 text-white bg-transparent-white rounded-lg'>
          &gt;
        </button>  
      </div>
    </div>
  </div>
  );
}

export default RecommendBoxV1400;