// import React, { useRef } from "react";
import { FaTags } from "react-icons/fa/index";

// const Modal = ({ showModal, setShowModal, data }) => {
//   const modalRef = useRef();
//   const closeModal = (e) => {
//     if (modalRef.current === e.target) {
//       setShowModal(false);
//     }
//   };

//   return (
//     <>
//       {showModal ? (
//         <div
//           className="bg-black bg-opacity-30 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//           ref={modalRef}
//           onClick={closeModal}
//         >
//           <div className="bg-gray-50 dark:bg-gray-700 w-full lg:w-2/4">
//             <div>
//               <div>
//                 <img
//                   className="w-full h-full"
//                   alt={data.title}
//                   src={require("../projects/imgs/" + data.img)}
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-base font-roboto font-medium text-slate-700 mb-2">
//                   {data.title}
//                 </h3>
//                 <p className="text-sm text-slate-600 font-roboto font-normal tracking-wide leading-2 mb-4">
//                   {data.description}
//                 </p>
//                 <span className="flex items-center text-sm font-lato font-light text-slate-500">
//                   <FaTags className="mr-2" />
//                   {data.categories.map((cat, id) => {
//                     return id !== data.categories.length - 1 ? cat + ", " : cat;
//                   })}
//                 </span>
//               </div>
//               <div className="bg-black py-1">
//                 {data.github && (
//                   <a
//                     className="text-white hover:text-slate-300 font-lato text-sm font-normal tracking-wide p-1 cursor-pointer ml-4"
//                     href={data.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Details
//                   </a>
//                 )}
//                 <button
//                   className="text-white hover:text-slate-300 font-lato text-sm font-normal tracking-wide p-1 cursor-pointer ml-4"
//                   onClick={() => setShowModal((prev) => !prev)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default Modal;

import React from 'react'

const Modal = ({ showModal, setShowModal, data }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false)
    }
  }

  const handleEscKeyPress = (e) => {
    if (e.key === 'Escape') {
      setShowModal(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
    }
  })

  return (
    <>
      {showModal &&
        <div
          className="fixed inset-0 bg-[#00000030] bg-opacity-10 flex items-center justify-center backdrop-blur-sm z-[9999]"
          onClick={handleModalClick}
        >
          <div className="bg-white rounded-lg overflow-hidden max-w-2xl">
            <div className='bg-slate-200 border-b border-b-logcream w-full p-4 flex justify-between items-center'>
              <div className='font-light text-2xl font-poppins'>{data.title}</div>
              <button onClick={() => setShowModal(false)} className='bg-red-500 hover:bg-red-400 font-poppins text-white rounded-md px-2 py-1'>ESC</button>
            </div>
            <div className='p-4'>
              <div className="bg-gray-100 w-full">
                <div>
                  <div>
                    <img
                      className="w-full h-full"
                      alt={data.title}
                      src={require("../projects/imgs/" + data.img)}
                    />
                  </div>
                  <div className="p-4">
                    <span className="block text-base text-[#3d4346] font-poppins font-normal tracking-wide leading-2 mb-4">
                      {data.description}
                    </span>
                      <span className="flex items-center text-sm font-mono font-light text-[#3d434680] mb-6">
                        <FaTags className="mr-2" />
                        {data.categories.map((cat, id) => {
                          return id !== data.categories.length - 1 ? cat + ", " : cat;
                        })}
                      </span>
                    {data.github && (
                      <a
                        className="bg-gradient-to-b from-white to-slate-200 shadow-inner shadow-rose-200 px-3 py-2 text-black hover:text-slate-600 rounded-lg font-poppins text-base font-light tracking-wide cursor-pointer"
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Details
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal