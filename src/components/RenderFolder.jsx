import React, { useEffect, useRef, useState } from 'react'
import { FaCaretDown, FaCaretRight } from 'react-icons/fa'
import Modal from './Modal.jsx'

const RenderFolder = ({ folderData, isExpanded, handleExpandToggle, setFolderData }) => {

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [fileFolderName, setFileFolderName] = useState('')
  const inputRef = useRef();

  useEffect(() => {
    if (open) {
      inputRef.current.focus()
    }
  }, [open])

  const handleOpenModal = (item) => {
    setOpen(!open); 
    setSelectedItem(item)
  }


  const createChildrenBasedOnType = (key) => {
    if (!fileFolderName) return alert("Enter File/Folder Name")
    let filteredItem = folderData.find(item => item.id === selectedItem.id);
    switch (key) {
      case 'FOLDER':
        setFolderData(prev => {
          filteredItem?.children?.push({ id: Math.ceil(Math.random() * 10_00_000), name: fileFolderName, isFolder: true, children: [] })
          return prev.map(item => item.id === filteredItem.id ? filteredItem : item);
        })
        break;
      case 'FILE':
        setFolderData(prev => {
          filteredItem?.children?.push({ id: Math.ceil(Math.random() * 10_00_000), name: fileFolderName, isFolder: false, children: [] })
          return prev.map(item => item.id === filteredItem.id ? filteredItem : item);
        })
        break;
    }
    setOpen(false)
    setFileFolderName('')
  }

  return (
    <div className='cursor-pointer'>
      {folderData?.map((item, index) => (
        <>
          <div className='flex items-center p-2' key={index}>
            <div className='flex flex-row items-center' onClick={() => handleExpandToggle(item.id)}>
              {item.isFolder && <span>{isExpanded[item.id] ? <FaCaretDown /> : <FaCaretRight />}</span>}
              <span className='text-black'>{item?.name}</span>
            </div>
            {item.isFolder && <button onClick={() => handleOpenModal(item)}
              className='button-normal outline-none bg-black ml-2 px-2 rounded-md focus:outline-none'>+</button>}
          </div>
          <div className='px-4'>
            {isExpanded[item.id] && <RenderFolder
              folderData={item.children}
              handleExpandToggle={handleExpandToggle}
              isExpanded={isExpanded}
              createChildrenBasedOnType={createChildrenBasedOnType}
              setFolderData={setFolderData}
            />}
          </div>
        </>
      ))}
      {open && <Modal open={open} close={setOpen} data={{ title: 'File or Folder Creation', body: "" }}>
        <div className='flex items-center h-full justify-center flex-col'>
          <h3>Choose File or Folder You like to create?</h3>
          <div className='flex gap-2'>
            <input ref={inputRef} className='border-red-500 border-2 rounded-md px-2' type="text" name="name" id="" value={fileFolderName} onChange={(event) => setFileFolderName(event.target.value)} />
            <button onClick={() => createChildrenBasedOnType('FOLDER')} className='button-normal bg-slate-700 p-2 rounded-md w-1/2 text-white'>Folder</button>
            <button onClick={() => createChildrenBasedOnType('FILE')} className='button-normal bg-slate-700 p-2 rounded-md w-1/2 text-white'>File</button>
          </div>
        </div>
      </Modal>}
    </div>
  )
}

export default RenderFolder