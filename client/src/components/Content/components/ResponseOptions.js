import React from "react";
import BodyRsponse from "./Tabs/BodyRsponse";
import Cookies from "./Tabs/Cookies";
import HeadersResponse from "./Tabs/HeadersResponse";
import TestResults from "./Tabs/TestResults";

const ResponseOptions = (props) => {
  const { tabIndex } = props;
  const componentMappings = {
    0: BodyRsponse,
    1: Cookies,
    2: HeadersResponse,
    3: TestResults
  };

  var Component = componentMappings[tabIndex];
  return (
    <div>
      <Component />
    </div>
  );
};
export default ResponseOptions;
