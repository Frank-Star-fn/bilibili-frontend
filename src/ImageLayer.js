
function ImageLayer(props) {

  return(
    <div>
      <img 
        src={props.imageSrc} alt="" 
        className='h-40' 
      />
    </div>
  );

}

export default ImageLayer;