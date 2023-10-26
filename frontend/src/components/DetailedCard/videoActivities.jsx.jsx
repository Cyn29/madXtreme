
import { Row, Col } from 'react-bootstrap';

function YouTubeVideo() {
  return (
    <header>
      <Row>
        <Col md={12}>
          <video
            autoPlay 
            width="100%"
            height="auto"
          >
            <source
              src="https://res.cloudinary.com/dqj4pvyva/video/upload/v1698277665/video_2160p_ogi7ia.mp4" 
              type="video/mp4"
            />

          </video>
        </Col>
      </Row>
    </header>
  );
}

export default YouTubeVideo;
