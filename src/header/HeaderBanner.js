import ImageLayer from '../ImageLayer';

function HeaderBanner() {
  const local_website = "http://localhost:3000/";
  
  return (
  <div className=''>
    <div className='z-0'>
      <ImageLayer imageSrc="head-layer/lay1.webp"/>
      <ImageLayer imageSrc="head-layer/lay2.webp"/>
    </div>

    <div className='z-20 h-38.75 px-14 flex items-end'>
      <a href={local_website} className='mb-2.5'>
        <img 
          src="bili-logo.png" alt="" 
          className='z-20 w-40 relative'
        />
      </a>
    </div>

    <div></div>
  </div>
  );
}

export default HeaderBanner;
