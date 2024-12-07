import { Fragment } from "react";

function ChannelLink(props) {

  return (
    <Fragment>
      <a href="" className="border w-18 text-gray-500 bg-gray-50 rounded-md">
        {props.name}
      </a>
    </Fragment>
  );

}


export default ChannelLink;