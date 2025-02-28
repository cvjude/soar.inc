import { Chevron } from 'assets/chevron';
import { useState, useRef } from 'react';

// Quick Carousel element, I'd install a full package if it becomes more complex, and in a full project
const Carousel = ({ children }: { children: React.ReactNode[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gap = 4;
  const visibleCount = 3;
  const pageScroll = Math.round(children.length / visibleCount) - 1;

  const next = () => {
    if (!containerRef.current) return;

    if (currentIndex < pageScroll) {
      containerRef.current.style.transform = `translateX(-${
        (currentIndex + 1) * 100
      }%)`;

      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (!containerRef.current) return;

    if (currentIndex > 0) {
      containerRef.current.style.transform = `translateX(-${
        (currentIndex - 1) * 100
      }%)`;

      setCurrentIndex((prev) => prev - 1);
    }
  };

  console.log(currentIndex);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {currentIndex > 0 && (
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white text-pale-blue-500 rounded-full shadow-md z-10 w-[50px] h-[50px] grid place-content-center cursor-pointer rotate-180"
        >
          <Chevron className="stroke-current text-pale-blue-500" />
        </button>
      )}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          ref={containerRef}
        >
          {children.map((child, index) => {
            const isFirst = index === 0;
            const isLast = index === children.length - 1;

            return (
              <div
                key={`carousel_item_${index}`}
                className="flex-shrink-0 text-white text-center rounded-lg"
                style={{
                  width: `${100 / visibleCount}%`,
                  paddingLeft: `${gap / 2}px`,
                  paddingRight: `${gap / 2}px`,
                  marginLeft: isFirst ? `-${gap / 2}px` : undefined,
                  marginRight: isLast ? `-${gap / 2}px` : undefined,
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
      {currentIndex < pageScroll && (
        <button
          onClick={next}
          className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 bg-white text-pale-blue-500 rounded-full shadow-md z-10 w-[50px] h-[50px] grid place-content-center cursor-pointer"
        >
          <Chevron className="stroke-current text-pale-blue-500" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
