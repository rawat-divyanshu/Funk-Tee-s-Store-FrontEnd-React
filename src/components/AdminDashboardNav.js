import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import TShirtModal from "./TShirtModal";
import "../App.css";
import CollectionModal from "./CollectionModal";

const AdminDashboardNav = () => {
  const [open, setOpen] = useState(false);
  const [isCollectionTab, setIsCollectionTab] = useState(true);

  const onOpenModal = (e) => {
    setIsCollectionTab(e);
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };
  return (
    <header className="text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="hidden lg:flex lg:w-2/5 lg:flex-wrap lg:items-center lg:text-base lg:ml-auto">
          <a className="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900">
            Home
          </a>
          <a className="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900">
            Collections
          </a>
          <a className="mr-5 font-sansita text-lg cursor-pointer hover:text-gray-900">
            Explore
          </a>
          <a className="font-sansita text-lg cursor-pointer hover:text-gray-900">
            Contact Us
          </a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="text-4xl md:text-3xl lg:ml-3 font-chicle">
            {">> "}Funk Tee's Store
          </span>
        </a>
        <div className="lg:w-2/5 inline-flex justify-around md:justify-end ml-5 lg:ml-0">
          <button
            className="bg-black text-white inline-block ml-2 p-2 border-2 border-black hover:text-black hover:bg-white"
            onClick={() => onOpenModal(false)}
          >
            Add T-Shirt <i className="fas fa-plus-circle"></i>
          </button>

          <button
            className="bg-black text-white inline-block ml-2 p-2 border-2 border-black hover:text-black hover:bg-white"
            onClick={onOpenModal}
          >
            Add Collection <i className="fas fa-plus-circle"></i>
          </button>
          <Modal
            open={open}
            onClose={() => onCloseModal(true)}
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
          >
            {isCollectionTab ? <CollectionModal /> : <TShirtModal />}
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default AdminDashboardNav;
