import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotifyContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      draggable
    />
  );
};

export default NotifyContainer;
