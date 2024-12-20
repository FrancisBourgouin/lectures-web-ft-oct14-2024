import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const { FaceLandmarker, FilesetResolver } = vision;



const videoWidth = 480;

// Before we can use HandLandmarker class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment to
// get everything needed to run.

// const client = new pg.Client(...)

// client.connect()
// client.query()
async function createFaceLandmarker() {  
  let faceLandmarker;
  let runningMode = "VIDEO";

  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU"
    },
    outputFaceBlendshapes: true,
    runningMode,
    numFaces: 1
  });

  return faceLandmarker  
}

/********************************************************************
// Demo 2: Continuously grab image from webcam stream and detect it.
********************************************************************/

const video = null // WE NEED TO FIGURE OUT HOW TO GET THE WEBCAM DATA




let lastVideoTime = -1;
let results = undefined;
async function predictWebcam(faceLandmarker, video) {


  // Now let's start detecting the stream.
  // await faceLandmarker.setOptions({ runningMode: runningMode }); (THIS IS HOW TO CHANGE BETWEEN VIDEO/IMAGE DETECTION)
  
  let startTimeMs = performance.now();

  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }

  if (results.faceLandmarks) {
    console.log(results)
  }

  // Call this function again to keep predicting when the browser is ready.
  // if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  // }
}

