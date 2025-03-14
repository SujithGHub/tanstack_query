import React from "react";

const Modal = ({ children, open, close }) => {

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 transition-all" onClick={() => close(false)}></div>
      <dialog open={open} className="z-50 backdrop-blur-sm w-1/3 h-1/3 rounded-md shadow-lg border-b-blue-500 border-r-blue-500 border-2  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0">
        <div className="bg-white p-4 h-full">
          {children}
        </div>
      </dialog>
    </>
  );
}

export default Modal;
