
function ImageLayer(props) {

  return(
    <div className="absolute">
      <img 
        src={props.imageSrc} alt="" 
        className='h-38.75' 
      />
    </div>
  );

}

export default ImageLayer;