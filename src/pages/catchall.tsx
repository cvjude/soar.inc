const Catchall = () => {
  return (
    <div className="w-full min-h-[40vh] flex flex-col justify-center items-center text-dark-500 relative z-0">
      <h1 className="absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 flex-col items-center text-5xl font-semibold text-dark-500 sm:text-6xl md:text-7xl lg:text-[7.5rem] z-50">
        Coming Soon
      </h1>

      <video
        autoPlay
        playsInline
        loop
        muted
        disablePictureInPicture
        preload="auto"
        poster="https://storage.googleapis.com/soar-inc-landing/videos/particles-poster.webp"
        className="pointer-events-none h-[48rem] max-h-[80vh] w-auto rotate-1 object-contain"
      >
        <source
          src="https://storage.googleapis.com/soar-inc-landing/videos/particles-2x.webm"
          type="video/webm"
          media="(min-resolution: 3x) and (min-width: 1000px)"
        />
        <source
          src="https://storage.googleapis.com/soar-inc-landing/videos/particles.webm"
          type="video/webm"
        />
        <source
          src="https://storage.googleapis.com/soar-inc-landing/videos/particles.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Catchall;
