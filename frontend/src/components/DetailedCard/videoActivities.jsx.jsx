import video from "../../assets/activitiesImages/activityVideo.mp4";
import "./videoActivities.css";

function YouTubeVideo() {
  return (
    <header>
      <div className="video-background">
        <video autoPlay loop playsInline muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </header>
  );
}

export default YouTubeVideo;
