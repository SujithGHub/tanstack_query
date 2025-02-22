import React, { useState } from 'react';
import data from '../api/Folder-json.json'
import RenderFolder from './RenderFolder';

const FolderComponent = () => {

  const [folderData, setFolderData] = useState(data);
  const [isExpanded, setIsExpanded] = useState({});

  const handleExpandToggle = (id) => {
    console.log(id, "id");
    setIsExpanded(prev => ({ ...prev, [id]: !prev.id }))
  }

  return (
    <div className='w-1/4'>
      <RenderFolder
        folderData={folderData}
        isExpanded={isExpanded}
        handleExpandToggle={handleExpandToggle}
      />
    </div>
  )
}

export default FolderComponent