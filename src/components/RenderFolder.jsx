import React from 'react'

const RenderFolder = ({ folderData, isExpanded, handleExpandToggle }) => {

  return (
    <div>
      {folderData?.map((item, index) => (
        <>
          <div key={index} onClick={() => handleExpandToggle(item.id)}>
            <span className='text-black'>{item?.name}</span>
          </div>
          <div className='px-4'>
            {isExpanded[item.id] && <RenderFolder folderData={item.children} handleExpandToggle={() => handleExpandToggle(item.id)} isExpanded={isExpanded} />}
          </div>
        </>
      ))}
    </div>
  )
}

export default RenderFolder