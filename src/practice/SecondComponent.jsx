import React, { useState } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import data from '../api/Folder-json.json';

const SecondComponent = () => {

  const [folderData, setFolderData] = useState(data);
  const [isExpanded, setIsExpanded] = useState({})

  const handleToggleFolder = (id) => {
    setIsExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const RenderList = ({ items }) => {
    return (
      <div>
        {items?.map((item, index) => (
          <div className='px-6' key={index}>
            <div className='flex items-center px-4 py-2' onClick={() => handleToggleFolder(item?.id)}>
              {item.isFolder && (isExpanded[item.id] ? <VscChevronDown className='flex items-center' /> : <VscChevronRight className='flex items-center' />)}<span>{item?.name}</span>
            </div>
            {isExpanded[item.id] && <RenderList items={item?.children} />}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className='w-1/4'>
        {folderData?.map((item, index) => {
          const { id, name, isFolder, children } = item;
          return (
            <div className='cursor-pointer border-2' key={index}>
              <div className='flex items-center py-2' onClick={() => handleToggleFolder(id)}>
                {isFolder && (isExpanded[id] ? <VscChevronDown className='flex items-center' /> : <VscChevronRight className='flex items-center' />)}<span className='h-fit'>{name}</span>
              </div>
              <div className={`overflow-hidden transition-all duration-150 ease-in-out ${isExpanded[id] ? "max-h-96" : "max-h-0"}`}>
                <RenderList items={children} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SecondComponent