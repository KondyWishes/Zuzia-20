import "./Video.css";

const Video = () => {
  return (
    <div className="video__container">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/5BHrC2Cfvpg?si=jQM7bOVLfpbhu8Qu"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
