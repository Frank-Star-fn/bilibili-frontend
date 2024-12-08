import { Fragment } from "react";

function VideoCardV1400(props) {
  let title_cut = props.title;
  const local_website = "http://localhost:3000/";
  // console.log(props.title.length);

  // let len1 = props.title.length
  // let max_len = 33;
  // if(len1 > max_len){
  //   title_cut = props.title.substring(0, max_len-1)+"..."
  // }

  return (
    <Fragment>
      <div>
        <div>
          <div></div>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>

        <div className="w-17.07vw">
          <a href={local_website}>
            <div>
              <div>
                <div>
                  {/* 添加至稍后再看 */}
                </div>

                <picture className="">
                  <img 
                    src={props.pictureSrc} alt="" 
                    className="rounded-md w-full h-9.6vw"
                  />
                </picture>
                <div></div>
              </div>

              <div className="absolute z-20 w-17.07vw h-9 -mt-9 text-white text-13px">
                <div className="justify-center items-center flex w-full h-full bg-gradient-to-t from-gray-600 rounded-md">
                  <div className="mb-1 mt-auto flex">
                    <span className="flex mx-1.5">
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 mt-0.5 mx-0.5 pt-px">
                        <path d="M12 4.99805C9.48178 4.99805 7.283 5.12616 5.73089 5.25202C4.65221 5.33949 3.81611 6.16352 3.72 7.23254C3.60607 8.4998 3.5 10.171 3.5 11.998C3.5 13.8251 3.60607 15.4963 3.72 16.76355C3.81611 17.83255 4.65221 18.6566 5.73089 18.7441C7.283 18.8699 9.48178 18.998 12 18.998C14.5185 18.998 16.7174 18.8699 18.2696 18.74405C19.3481 18.65655 20.184 17.8328 20.2801 16.76405C20.394 15.4973 20.5 13.82645 20.5 11.998C20.5 10.16965 20.394 8.49877 20.2801 7.23205C20.184 6.1633 19.3481 5.33952 18.2696 5.25205C16.7174 5.12618 14.5185 4.99805 12 4.99805zM5.60965 3.75693C7.19232 3.62859 9.43258 3.49805 12 3.49805C14.5677 3.49805 16.8081 3.62861 18.3908 3.75696C20.1881 3.90272 21.6118 5.29278 21.7741 7.09773C21.8909 8.3969 22 10.11405 22 11.998C22 13.88205 21.8909 15.5992 21.7741 16.8984C21.6118 18.7033 20.1881 20.09335 18.3908 20.23915C16.8081 20.3675 14.5677 20.498 12 20.498C9.43258 20.498 7.19232 20.3675 5.60965 20.2392C3.81206 20.0934 2.38831 18.70295 2.22603 16.8979C2.10918 15.5982 2 13.8808 2 11.998C2 10.1153 2.10918 8.39787 2.22603 7.09823C2.38831 5.29312 3.81206 3.90269 5.60965 3.75693z" fill="currentColor"></path>
                        <path d="M14.7138 10.96875C15.50765 11.4271 15.50765 12.573 14.71375 13.0313L11.5362 14.8659C10.74235 15.3242 9.75 14.7513 9.75001 13.8346L9.75001 10.1655C9.75001 9.24881 10.74235 8.67587 11.5362 9.13422L14.7138 10.96875z" fill="currentColor"></path>
                      </svg>
                      <span className="mt-0.5">{props.numWatch}</span>
                    </span>

                    <span className="flex mx-1.5">
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 mt-0.5 mx-0.5 pt-px">
                        <path d="M12 4.99805C9.48178 4.99805 7.283 5.12616 5.73089 5.25202C4.65221 5.33949 3.81611 6.16352 3.72 7.23254C3.60607 8.4998 3.5 10.171 3.5 11.998C3.5 13.8251 3.60607 15.4963 3.72 16.76355C3.81611 17.83255 4.65221 18.6566 5.73089 18.7441C7.283 18.8699 9.48178 18.998 12 18.998C14.5185 18.998 16.7174 18.8699 18.2696 18.74405C19.3481 18.65655 20.184 17.8328 20.2801 16.76405C20.394 15.4973 20.5 13.82645 20.5 11.998C20.5 10.16965 20.394 8.49877 20.2801 7.23205C20.184 6.1633 19.3481 5.33952 18.2696 5.25205C16.7174 5.12618 14.5185 4.99805 12 4.99805zM5.60965 3.75693C7.19232 3.62859 9.43258 3.49805 12 3.49805C14.5677 3.49805 16.8081 3.62861 18.3908 3.75696C20.1881 3.90272 21.6118 5.29278 21.7741 7.09773C21.8909 8.3969 22 10.11405 22 11.998C22 13.88205 21.8909 15.5992 21.7741 16.8984C21.6118 18.7033 20.1881 20.09335 18.3908 20.23915C16.8081 20.3675 14.5677 20.498 12 20.498C9.43258 20.498 7.19232 20.3675 5.60965 20.2392C3.81206 20.0934 2.38831 18.70295 2.22603 16.8979C2.10918 15.5982 2 13.8808 2 11.998C2 10.1153 2.10918 8.39787 2.22603 7.09823C2.38831 5.29312 3.81206 3.90269 5.60965 3.75693z" fill="currentColor"></path>
                        <path d="M15.875 10.75L9.875 10.75C9.46079 10.75 9.125 10.4142 9.125 10C9.125 9.58579 9.46079 9.25 9.875 9.25L15.875 9.25C16.2892 9.25 16.625 9.58579 16.625 10C16.625 10.4142 16.2892 10.75 15.875 10.75z" fill="currentColor"></path>
                        <path d="M17.375 14.75L11.375 14.75C10.9608 14.75 10.625 14.4142 10.625 14C10.625 13.5858 10.9608 13.25 11.375 13.25L17.375 13.25C17.7892 13.25 18.125 13.5858 18.125 14C18.125 14.4142 17.7892 14.75 17.375 14.75z" fill="currentColor"></path>
                        <path d="M7.875 10C7.875 10.4142 7.53921 10.75 7.125 10.75L6.625 10.75C6.21079 10.75 5.875 10.4142 5.875 10C5.875 9.58579 6.21079 9.25 6.625 9.25L7.125 9.25C7.53921 9.25 7.875 9.58579 7.875 10z" fill="currentColor"></path>
                        <path d="M9.375 14C9.375 14.4142 9.03921 14.75 8.625 14.75L8.125 14.75C7.71079 14.75 7.375 14.4142 7.375 14C7.375 13.5858 7.71079 13.25 8.125 13.25L8.625 13.25C9.03921 13.25 9.375 13.5858 9.375 14z" fill="currentColor"></path>
                      </svg>
                      <span className="mt-0.5">{props.numChat}</span>
                    </span>
                  </div>
                  <span className="mb-1 mt-auto ml-auto text-white px-2">
                    {props.videoTime}
                  </span>
                </div>

              </div>
            </div>
          </a>

          <div className="my-2">
            <div className="">
              <div></div>
              <h3 title={title_cut} className="my-1.5 h-12">
                <a href={local_website} className="webkit-box">
                  {title_cut}
                </a>
              </h3>
              <div className="flex text-xs">
                <div className="px-1 text-orange-FF7F24 bg-orange-FFF0E3 rounded">
                  {props.cardInfo}
                </div>
                <a href={local_website}>
                  {/* <svg></svg> */}
                  <span className="text-gray-400 px-1">{props.author}</span>
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

export default VideoCardV1400;