import { Fragment } from "react";

function ChannelLink(props) {
  const local_website = "http://localhost:3000/";

  const class1 = props.channelsWidth+" border py-1 text-grey-61666D text-13px font-normal bg-gray-50 rounded-md tracking-wider";

  return (
    <Fragment>
      <a 
        href={local_website} 
        className={class1}
      >
        {props.name}
      </a>
    </Fragment>
  );
}

export default ChannelLink;