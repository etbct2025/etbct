

import React, { useState } from 'react';
import img01 from "../../public/Gallery/01.jpg";
import img02 from "../../public/Gallery/02.jpg";
import img03 from "../../public/Gallery/03.jpg";
import img04 from "../../public/Gallery/04.jpg";
import img05 from "../../public/Gallery/05.jpg";
import img06 from "../../public/Gallery/06.jpg";
import img07 from "../../public/Gallery/07.jpg";
import img08 from "../../public/Gallery/08.jpg";
import img09 from "../../public/Gallery/09.jpg";
import img10 from "../../public/Gallery/biotechdep.jpg";
import img11 from "../../public/Gallery/uni2.jpg";
import img12 from "../../public/Gallery/uni3.jpg";
import img13 from "../../public/Gallery/uni4.jpg";
import img14 from "../../public/Gallery/uni5.jpg";
import img15 from "../../public/Gallery/uni6.jpg";
import img16 from "../../public/Gallery/university.jpg";
import img17 from "../../public/Gallery/img10.jpeg";
import img18 from "../../public/Gallery/img11.jpeg";
import img19 from "../../public/Gallery/img12.jpeg";
import img20 from "../../public/Gallery/img13.jpeg";

const GalleryPage = () => {
  const photos = [
    img01, img02, img03, img04, img05, img06, img07, img08, img09,
    img10, img11, img12, img13, img14, img15, img16, img17, img18,
    img19, img20
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <section className="gallery-section px-4 sm:px-8 lg:px-16 py-10 flex justify-center">
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
          {photos.map((item, i) => (
            <div key={i} onClick={() => openModal(item)} className="cursor-pointer">
              <img
                className="w-full h-full object-contain rounded-md"
                src={item}
                alt={`Gallery Image ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-5 rounded shadow-lg max-w-[90vw] max-h-[90vh]">
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-0 right-0 mt-3 mr-3 text-5xl font-extrabold text-gray-800 cursor-pointer">
              &times;
            </button>
            {/* Modal Image */}
            <img
              className="w-full h-auto max-h-[80vh] object-contain"
              src={selectedImage}
              alt="Selected"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryPage;
