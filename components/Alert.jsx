import React from "react";

const Alert = ({ type, msg, handleAlert, textColor }) => {
  return (
    <div
      className={`flex justify-between shadow-inner rounded p-3 bg-navy-blue my-4`}
      style={{ color: textColor }}
    >
      <p className="self-center">
        <strong>Message Sent SuccessFully </strong> <br /> I will Get Back soon.
      </p>
      <strong
        className="text-xl align-center cursor-pointer alert-del"
        onClick={handleAlert}
      >
        &times;
      </strong>
    </div>
  );
};

export default Alert;
