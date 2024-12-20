import { useRef, useState } from "react";
import "./App.css";
import { createFaceLandmarker, predictWebcam } from "./helpers/facelandmarkHelpers";

import Webcam from "react-webcam";

function App() {
  const [faceInfo, setFaceInfo] = useState({
    eyeLeftOpenPercentage: 1,
    eyeRightOpenPercentage: 1,
    mouthOpenPercentage: 1,
  });

  const webcamRef = useRef(); // We want to refer to something

  const calculateDistance3dPoints = (pos1, pos2) => {
    const posX = Math.pow(pos1.x - pos2.x, 2);
    const posY = Math.pow(pos1.y - pos2.y, 2);
    const posZ = Math.pow(pos1.z - pos2.z, 2);

    const distance = Math.sqrt(posX + posY + posZ);

    return distance;
  };

  const extractPointInformation = (faceLandmarks) => {
    const faceHeight = calculateDistance3dPoints(faceLandmarks[10], faceLandmarks[152]);
    const mouthHeight = calculateDistance3dPoints(faceLandmarks[13], faceLandmarks[14]);
    const eyeLeftHeight = calculateDistance3dPoints(
      faceLandmarks[386],
      faceLandmarks[374]
    );
    const eyeRightHeight = calculateDistance3dPoints(
      faceLandmarks[159],
      faceLandmarks[145]
    );

    const eyeLeftOpenPercentage = (eyeLeftHeight / faceHeight) * 20;
    const eyeRightOpenPercentage = (eyeRightHeight / faceHeight) * 20;
    const mouthOpenPercentage = (mouthHeight / faceHeight) * 10;

    setFaceInfo({ eyeLeftOpenPercentage, eyeRightOpenPercentage, mouthOpenPercentage });
  };

  const onWebcamReady = async () => {
    const faceLandmarker = await createFaceLandmarker();
    predictWebcam(faceLandmarker, webcamRef.current.video, extractPointInformation);
  };

  return (
    <>
      <section className="Face">
        <div
          className="eyeLeft"
          style={{ height: `${100 * faceInfo.eyeLeftOpenPercentage}%` }}
        ></div>
        <div
          className="eyeRight"
          style={{ height: `${100 * faceInfo.eyeRightOpenPercentage}%` }}
        ></div>
        <div className="nose"></div>
        <div
          className="mouth"
          style={{ height: `${100 * faceInfo.mouthOpenPercentage}%` }}
        ></div>
      </section>
      <Webcam ref={webcamRef} style={{ width: 600 }} onUserMedia={onWebcamReady} />
    </>
  );
}

export default App;
