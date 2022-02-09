import React, { useState } from "react";
import "./Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCaretRight,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [tabs] = useState(["History", "Collections"]);
  const [tabIndex, setTabIndex] = useState(1);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  // handleShowTnc = () => {
  //   this.setState(prevState => ({
  //       setShowTnc: !prevState.setShowTnc
  //   }))
  // };

  return (
    <div className="sidebar">
      <div className="sidebar__searchBarWrapper">
        <input
          type="text"
          placeholder="Filter"
          className="sidebar__searchBar"
        />
        <span className="sidebar__newCollectionLink" >
          <FontAwesomeIcon icon={faPlus} />
        </span>

        <div className="sidebar__row">
          <div className="sidebar__column">
            {/* <span className="sidebar__newCollectionLink">
              <FontAwesomeIcon icon={faPlus} /> New Collection
            </span>
            <span className="sidebar__trashLink">Trash</span> */}
          </div>
        </div>
        {/* Collections List */}
        <div className="sidebar__collectionList">
          {console.log(collections)}
          {collections.map((collection, index) => {
            return (
              <div className="sidebar__collection my-1 mx-2">
                <div className="sidebar__collectionRow">
                  <div className="sidebar__collectionColumn">
                    {
                      collection.method == "PUT" ? 
                        <span className="put">{collection.method}</span>
                      : collection.method == "POST" ?
                        <span className="post">{collection.method}</span>
                      : collection.method == "GET" ?
                        <span className="get">{collection.method}</span>
                      : collection.method == "DELETE" ?
                        <span className="delete">{collection.method}</span>
                      : collection.method == "OPTION" ?
                        <span className="option">{collection.method}</span>
                      : 
                        <span className="patch">{collection.method}</span>
                    }
                  </div>
                  <div className="sidebar__collectionColumn">
                    <span>{collection.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

// Data
const collections = [
  {
    name: "Merumart",
    method: "GET"
  },
  {
    name: "SIH 2020",
    method: "POST",
  },
  {
    name: "Tweezy",
    method: "PUT",
  },
];
