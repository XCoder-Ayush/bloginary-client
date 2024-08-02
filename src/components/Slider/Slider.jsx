import videobg from '../../assets/happy.mp4';

function Slider() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videobg} 
          autoPlay 
          loop 
          muted
        ></video>
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-center text-white font-extrabold">
            BLOGINARY
          </h1>
        </div>
      </div>
    </>
  );
}

export default Slider;
