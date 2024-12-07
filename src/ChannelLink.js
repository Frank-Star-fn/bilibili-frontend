import { Fragment } from "react";

function ChannelLink(props) {

  return (
    <Fragment>
      <a href="" className="border w-18 py-1 text-grey-61666D text-sm font-normal bg-gray-50 rounded-md tracking-wider">
        {props.name}
      </a>
    </Fragment>
  );
}

export default ChannelLink;