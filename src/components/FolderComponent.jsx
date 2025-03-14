import React, { useState } from "react";
import data from "../api/Folder-json.json";
import RenderFolder from "./RenderFolder";

const FolderComponent = () => {
  const [folderData, setFolderData] = useState(data);
  const [isExpanded, setIsExpanded] = useState({});


  const makeChildrenCollapse = (children) => {
    let collapsedObj = {};
    children.forEach((child) => {
      collapsedObj[child.id] = false;
      if (children?.children?.length > 0) {
        Object.assign(collapsedObj, makeChildrenCollapse(children.children))
      }
    })
    setIsExpanded(prev => ({ ...prev, ...collapsedObj }))
  }

  const handleExpandToggle = (id) => {
    const isChildAvailable = folderData.find(item => item.id === id);
    if (isChildAvailable?.children?.length > 0 && isExpanded[isChildAvailable?.id]) {
      makeChildrenCollapse(isChildAvailable?.children)
    }
    setIsExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };


  return (
    <div className="w-1/4">
      <RenderFolder
        folderData={folderData}
        isExpanded={isExpanded}
        handleExpandToggle={handleExpandToggle}
        setFolderData={setFolderData}
      />
    </div>
  );
};

export default FolderComponent;
