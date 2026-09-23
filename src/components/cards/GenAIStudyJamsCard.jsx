import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { genAiGallery } from "../../data/portfolioData";

export default function GenAIStudyJamsCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeTimerRef = useRef(null);

  const openGallery = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setIsClosing(false);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 220);
  };
  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + genAiGallery.length) % genAiGallery.length);
  };
  const showNext = () => {
    setActiveIndex((index) => (index + 1) % genAiGallery.length);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePrevious = () => {
      setActiveIndex((index) => (index - 1 + genAiGallery.length) % genAiGallery.length);
    };
    const handleNext = () => {
      setActiveIndex((index) => (index + 1) % genAiGallery.length);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, [isOpen]);

  const activeImage = genAiGallery[activeIndex];

  return (
    <>
      <button
        type="button"
        className="gen-ai-card glass glass-hover w-full text-left"
        onClick={openGallery}
        aria-label="Open Gen AI Study Jams memories and certificates"
      >
        <span className="gen-ai-card-content">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-red-400">
            Gen AI Study Jams
          </span>
          <span className="mt-3 block text-3xl font-black">2× Completed</span>
          <span className="mt-1 block text-sm font-semibold text-zinc-400">
            2023 · 2024
          </span>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[.14em] text-zinc-500">
            View memories &amp; certificates <span className="text-red-400">→</span>
          </span>
        </span>
        <span className="gen-ai-card-collage" aria-hidden="true">
          {genAiGallery.slice(0, 3).map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt=""
              className={`gen-ai-thumb gen-ai-thumb-${index + 1}`}
            />
          ))}
          <span className="gen-ai-collage-count">+{genAiGallery.length}</span>
        </span>
      </button>

      {isOpen && (
        <div
          className={`gen-ai-lightbox fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-3 sm:p-6 ${isClosing ? "is-closing" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gen-ai-gallery-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <div className={`gen-ai-modal glass relative flex w-full max-w-4xl flex-col rounded-3xl p-4 sm:p-6 ${isClosing ? "is-closing" : ""}`}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-red-400">
                  Memories &amp; certificates
                </p>
                <h2 id="gen-ai-gallery-title" className="mt-1 text-2xl font-black sm:text-3xl">
                  Gen AI Study Jams
                </h2>
              </div>
              <button
                type="button"
                className="gen-ai-control"
                onClick={closeGallery}
                aria-label="Close Gen AI Study Jams gallery"
              >
                <X size={20} />
              </button>
            </div>

            <div className="gen-ai-preview relative mt-4 flex items-center justify-center rounded-2xl bg-black/30 p-2 sm:mt-5 sm:p-4">
              <button
                type="button"
                className="gen-ai-control absolute left-2 z-10 sm:left-4"
                onClick={showPrevious}
                aria-label="Show previous Gen AI Study Jams image"
              >
                <ChevronLeft size={22} />
              </button>
              <img
                key={activeImage.src}
                className="gen-ai-preview-image"
                src={activeImage.src}
                alt={activeImage.alt}
              />
              <button
                type="button"
                className="gen-ai-control absolute right-2 z-10 sm:right-4"
                onClick={showNext}
                aria-label="Show next Gen AI Study Jams image"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 text-xs text-zinc-400">
              <span>{activeImage.caption}</span>
              <span className="shrink-0 font-semibold text-zinc-300">
                {activeIndex + 1} / {genAiGallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
