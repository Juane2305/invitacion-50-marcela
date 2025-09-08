import React, { useState, useRef, useEffect } from "react";



const GalleryElegante = ({ buttonStyle = "" , images}) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener("change", update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", update) : mq.removeListener(update);
    };
  }, []);

  const renderedImages = isDesktop ? images.filter((it) => it.index !== 4) : images;

  useEffect(() => {
    if (current >= renderedImages.length) {
      setCurrent(0);
    }
  }, [renderedImages.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? renderedImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === renderedImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4 text-center text-white relative">

      <div
        className="relative border border-[#D4AF37] p-2 rounded-lg overflow-hidden 
                   mx-auto max-w-full 
                   h-[400px] md:h-[500px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {renderedImages.map((item, index) => (
          <div
            key={item.index}
            className={`
              absolute top-0 left-0 w-full h-full
              flex items-center justify-center
              transition-opacity duration-700 ease-in-out
              ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          >
            <img
              src={item.img}
              alt={`Elegante ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <button
          onClick={prevSlide}
          className={`
            absolute left-2 top-1/2 transform -translate-y-1/2 text-white px-2 py-1 rounded z-30
            ${buttonStyle}
          `}
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className={`
            absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-2 py-1 rounded z-30
            ${buttonStyle}
          `}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default GalleryElegante;