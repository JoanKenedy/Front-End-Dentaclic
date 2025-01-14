import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";

export const GalleryLocation = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    initialSlide: selectedIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {props.images && props.images.length > 0 ? (
          props.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="cursor-pointer rounded-xl w-42 h-42 object-cover"
              onClick={() => {
                setSelectedIndex(index);
                setModalIsOpen(true);
              }}
            />
          ))
        ) : (
          <p>No hay fotos disponibles</p>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="max-w-4xl mx-auto my-20 bg-white rounded-lg shadow-xl p-4"
        overlayClassName="fixed z-50 inset-0 bg-black bg-opacity-70 flex items-center justify-center"
      >
        <button
          className="absolute top-4 right-4 text-black text-xl"
          onClick={() => setModalIsOpen(false)}
        >
          ✕
        </button>
        <Slider {...settings}>
          {props.images && props.images.length > 0 ? (
            props.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt=""
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            ))
          ) : (
            <p>Error</p>
          )}
        </Slider>
      </Modal>
    </div>
  );
};
