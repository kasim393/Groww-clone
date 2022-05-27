import "./videotranscoding.css";
import transcode from "../../assets/transcode.jpeg";
const VideoTranscoding = () => {
  return (
    <div className="transcode web-align">
      <h1>Free up to 1080p</h1>
      <img src={transcode} alt="" />
      <p>Transcode your content into HLS and other formats.</p>
    </div>
  );
};
export default VideoTranscoding;
