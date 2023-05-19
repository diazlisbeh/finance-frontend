import React from "react";
import ReactModal from "react-modal";


function Modal({isOpen, handleClose, children}){
    return (
        <ReactModal isOpen={isOpen} handleClose={handleClose} className={"block text-black  focus:ring-9  bg-slate-500 bg-opacity-80 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>
            {/* <button onClick={handleClose} data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            <ion-icon name="close-circle-outline"></ion-icon>
            </button> */}
            {children}
        </ReactModal>
    );
}

export default Modal;