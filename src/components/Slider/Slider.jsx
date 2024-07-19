import videobg from '../../assets/happy.mp4';

function Slider(){
  return (
    <>
    <div className="main">
     <video src={videobg} autoPlay loop muted></video>
     <div className='content'>
      <h1 class="text-8xl text-center">BLOGINARY</h1>
     </div>
    </div>
    </>
  )
}

export default Slider;