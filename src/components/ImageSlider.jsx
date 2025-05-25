import React, { useState } from 'react';
import './ImageSlider.css';

const images = [
  '/image/a1.png',
  '/image/a2.png',
  '/image/a3.png',
  '/image/a4.png',
  '/image/a5.png',
  '/image/a6.png',
  '/image/a7.png',
  '/image/a8.png',
  '/image/a9.png',
];

const ImageSlider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
    document.body.style.overflow = ''; // Restore scroll
  };

  const handlePrevClick = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (!isPaused) {
      setIsPaused(false);
    }
  };

  return (
    <div className="mt-20 mb-20">
      <h2 className="text-3xl text-center mb-10">Our Services & Features</h2>
      <div 
        className="slider-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="slider-nav-button prev-button" onClick={handlePrevClick}>
          &#10094;
        </button>
        <div 
          className={`slider-track${isPaused ? ' paused' : ''}`}
          style={
            isPaused
              ? {
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
                }
              : {}
          }
        >
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img
                src={image}
                alt={`Service ${index + 1}`}
                className="slider-image cursor-pointer"
                onClick={() => openModal(image)}
              />
            </div>
          ))}
        </div>
        <button className="slider-nav-button next-button" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImg} alt="Enlarged Slide" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;