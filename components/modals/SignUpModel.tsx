"use client"

import { Modal } from "@mui/material";
import React, { useState } from "react";

export default function SignUpModel() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm border-2 border-white bg-white rounded-full font-bold hover:bg-gray-100 transition    "
        onClick={handleOpen}
      >
        Sign In
      </button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        className="flex justify-center items-center "
      >
        <div className="w-[200px] h-[400px] bg-white  "> </div>
      </Modal>
    </>
  );
}
