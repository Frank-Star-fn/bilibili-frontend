import { Fragment } from "react";

function VideoCard(props) {
  let title_cut = props.title;
  // console.log(props.title.length);

  let len1 = props.title.length
  let max_len = 32;
  if(len1 > max_len){
    title_cut = props.title.substring(0, max_len-1)+"..."
  }

  return (
    <Fragment>
      <div>
        <div>
          <div>
            
          </div>

          <div>
            <p>
              
            </p>
            <p></p>
            <p>
              
            </p>
          </div>
        </div>

        <div className="w-60">
          <a href="">
            <div>
              <div>
                <div>
                  {/* 添加至稍后再看 */}
                </div>
                <picture className="">
                  <img 
                    src={props.pictureSrc} alt="" 
                    className="rounded-md w-60 h-32"
                  />
                </picture>

                <div></div>
              </div>

              <div>

              </div>
            </div>
          </a>

          <div>
            <div>
              <div>

              </div>
              <h3 title={title_cut}>
                <a href="">
                  {title_cut}
                </a>
              </h3>
              <div>
                <a href="">
                  {/* <svg></svg> */}
                  <span className="text-gray-400">{props.author} </span>
                  <span className="text-gray-400">· {props.date} </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default VideoCard;