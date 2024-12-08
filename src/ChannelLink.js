import { Fragment } from "react";

function ChannelLink(props) {
  const local_website = "http://localhost:3000/";

  return (
    <Fragment>
      <a href={local_website} className="border w-18 py-1 text-grey-61666D text-13px font-normal bg-gray-50 rounded-md tracking-wider">
        {props.name}
      </a>
    </Fragment>
  );
}

export default ChannelLink;