import Spline from '@splinetool/react-spline';

const Ai3D = () => {
  function onLoad(spline) {
    spline.setZoom(1);
  }

  return (
    <Spline
      className="bg-white"
      onLoad={onLoad}
      scene="https://prod.spline.design/NSKDknA0gocVDcZ9/scene.splinecode"
    />
  );
};

export default Ai3D;
