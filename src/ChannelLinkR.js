import { Fragment } from "react";

function ChannelLinkR(props) {
  const local_website = "http://localhost:3000/";

  return (
    <Fragment>
      <a href={local_website} className="px-2.5 py-1 text-grey-61666D text-sm font-normal">
        {props.name}
      </a>
    </Fragment>
  );
}

export default ChannelLinkR;