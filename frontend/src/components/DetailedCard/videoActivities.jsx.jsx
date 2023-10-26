import "./videoActivity.css"

function YouTubeVideo() {
  return (
    <div className="containerVideo w-100">
    <iframe
      title="Vimeo Video"
      src="https://player.vimeo.com/video/878287866?h=6eee783720&autoplay=1&title=0&byline=0&portrait=0"
      width="100%"
      height="50%"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);
}

export default YouTubeVideo;
