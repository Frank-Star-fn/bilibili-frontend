
function ImageLayer(props) {

  return(
    <div className="absolute">
      <img 
        src={props.imageSrc} alt="" 
        className='w-416 h-40' 
      />
    </div>
  );

}

export default ImageLayer;