import React from "react";
import Params from "./Tabs/Params";
import Authorization from "./Tabs/Authorization";
import Headers from "./Tabs/Headers";
import Body from "./Tabs/Body";

const RequestOptions = (props) => {
  const { tabIndex } = props;
  const componentMappings = {
    0: Params,
    1: Authorization,
    2: Headers,
    3: Body
  };

  var Component = componentMappings[tabIndex];
  return (
    <div>
      <Component />
    </div>
  );
};
export default RequestOptions;
