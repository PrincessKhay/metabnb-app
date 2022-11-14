import React from "react";

function Modal({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "main_box") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="main_box"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded">
        <div>
          <span>Connect Wallet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 cursor-pointer"
            onClick={onClose}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div>
          <p>Choose your preferred wallet:</p>
          <a href="/">
            <img src="images/metamask.svg" alt="" />
            <span>Metamask</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>

          <a href="/">
            <img src="images/wallet.svg" alt="" />
            <span>Metamask</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
