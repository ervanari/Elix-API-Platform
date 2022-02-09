import React, { useState } from "react";

import "./Content.css";
import TabsBar from "./components/TabsBar";
import RequestInput from "./components/RequestInput";
import RequestOptionsMenu from "./components/RequestOptionsMenu";
import RequestOptions from "./components/RequestOptions";
import ResponseOptions from "./components/ResponseOptions";
import Response from "./components/Response";
import { sendRequest } from "../../actions/actions";

const Content = () => {
  const [tabs, setTabs] = useState([
    {
      name: "Get Sentiment Levels",
      type: "GET",
      _id: Math.random(0, 10) * 10,
      URL: "dummy.restapiexample.com/api/v1/employees",
      response: "hello",
    },
  ]);
  const [requestTabs] = useState([
    "Params",
    "Authorization",
    "Headers",
    "Body",
  ]);
  const [responseTabs] = useState([
    "Body",
    "Cookies",
    "Headers",
    "Test Results",
  ]);
  const [tabIndex, setTabIndex] = useState(0);
  const [requestsTabIndex, setRequestsTabIndex] = useState(0);

  const [responseTabIndex, setResponseTabIndex] = useState(0);

  //   Change the current tab
  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  const handleRequestTabChange = (index) => {
    setRequestsTabIndex(index);
  };

  const handleRequestTabChangeResponse = (index) => {
    setResponseTabIndex(index);
  }
  //  Adds a new request tab
  const addNewTab = () => {
    if (tabs.length >= 3) {
      alert("Close the previous tabs.. ! We will implement more tabs soon..");
      return;
    }
    setTabs([
      ...tabs,
      {
        name: "Untitled Request",
        type: "GET",
        _id: Math.random(0, 10) * 10,
        URL: "",
        response: {},
      },
    ]);
    setTabIndex(tabs.length);
  };

  //  Removes a request tab
  const removeTab = (tabToRemove) => {
    var tempTabs = tabs.filter((tab) => {
      return tab._id !== tabToRemove._id;
    });
    setTabs(tempTabs);
  };

  const handleURLChange = (e) => {
    const tempTabs = tabs;
    tempTabs[tabIndex].URL = e.target.value;
    setTabs(tempTabs);
  };

  const handleSubmit = () => {
    sendRequest("GET", tabs[tabIndex].URL, {}, {})
      .then((res) => {
        if (res.status === 200) {
          const tempTabs = tabs;
          tempTabs[tabIndex].response = res.data;
          setTabs(tempTabs);
          addNewTab();
          setTabIndex(tabs.length - 1);
        }
      })
      .catch((err) => {
        const tempTabs = tabs;
        tempTabs[tabIndex].response = err;
        setTabs(tempTabs);
        addNewTab();
        setTabIndex(tabs.length - 1);
      });
  };

  return (
    <div className="content">
      <TabsBar
        tabs={tabs}
        tabIndex={tabIndex}
        handleTabChange={handleTabChange}
        handleNewTab={addNewTab}
        handleRemoveTab={removeTab}
      />
      
      <RequestInput
        tab={tabs[tabIndex]}
        handleChange={handleURLChange}
        handleSubmit={handleSubmit}
      />

      <RequestOptionsMenu
        tabs={requestTabs}
        tabIndex={requestsTabIndex}
        handleTabChange={(index) => handleRequestTabChange(index)}
      />
      
      <RequestOptions tabIndex={requestsTabIndex} />

      <Response 
        tabs={responseTabs}
        tab={tabs[tabIndex]}
        handleTabChangeResponse={(index) => handleRequestTabChangeResponse(index)}
      />

      <ResponseOptions tabIndex={responseTabIndex} />

    </div>
  );
};
export default Content;
