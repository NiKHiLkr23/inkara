"use client";

function Preloader() {
  return (
    <>
      <video
        src="https://inkara.s3.ap-south-1.amazonaws.com/logo_final_animation.mp4"
        autoPlay
        muted
        className="w-96 h-96"
      />
    </>
  );
}

export default Preloader;
