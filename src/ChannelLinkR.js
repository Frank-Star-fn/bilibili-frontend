import { Fragment } from "react";

function ChannelLinkR(props) {

  return (
    <Fragment>
      <a href="" className="px-2.5 py-1 text-grey-61666D text-sm font-normal">
        {props.name}
      </a>
    </Fragment>
  );
}

export default ChannelLinkR;