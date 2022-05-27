import "./rendering.css";
import render from "../../assets/render_farm.png";
const Rendering = () => {
  return (
    <div className="rendering web-align">
      <h1>0%lost time</h1>
      <img src={render} alt="" />
      <p>
        Cluster render your Blender, Maya and other work loads. Parallelize up
        to 1000 GPUs. Your own on-demand render farm.
      </p>
    </div>
  );
};
export default Rendering;
