import React from 'react'
import { Container,Row, Col, Card, Spinner } from 'react-bootstrap'
import { FaPlay, FaPause } from "react-icons/fa";

const AlbumList = ({ data }) => {

  const handlePlay = e => {
    let audioCard = document.querySelector(`#c${e.currentTarget.id.substring(1)}`);

    e.currentTarget.classList.toggle("d-none");
    document.getElementById(`p${e.currentTarget.id.substring(1)}`).classList.toggle("d-none");
    audioCard.play();

  }

  const handlePause = e => {
    let audioCard = document.querySelector(`#c${e.currentTarget.id.substring(1)}`);
    e.currentTarget.classList.toggle("d-none");
    document.getElementById(`r${e.currentTarget.id.substring(1)}`).classList.toggle("d-none");
    audioCard.pause();

  }

  if ((typeof data.tracks) === 'undefined') {
    if (Array.isArray(data.data)) {
      return (
        <Row className="row-cols-1 row-cols-md-5 g-4">
          {data.data.map(item => (
            <Col key={item.id}>
              <Card>
                <audio id={`c${item.id}`} src={item.preview}></audio>
                <Card.Img variant="top" src={item.album.cover_small} />
                <div className="text-white fs-1 audioControl" id={`r${item.id}`} onClick={handlePlay}><FaPlay /></div>
                <div className="text-white fs-1 audioControl d-none" id={`p${item.id}`} onClick={handlePause}><FaPause /></div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.artist.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}



        </Row>
      )
    }
    return (
      <Spinner animation="border" variant="primary" />
    )
  }


  return (
    <Container fluid>
    <Row className="row-cols-1 row-cols-md-5 g-4">
      {data.tracks.data.map(item => (
        <Col key={item.id}>
          <Card>
            <audio id={`c${item.id}`} src={item.preview}></audio>
            <Card.Img variant="top" src={item.album.cover_small} />
            <div className="text-white fs-1 audioControl" id={`r${item.id}`} onClick={handlePlay}><FaPlay /></div>
            <div className="text-white fs-1 audioControl d-none" id={`p${item.id}`} onClick={handlePause}><FaPause /></div>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.artist.name}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

    </Row>
    </Container>
  )
}

export default AlbumList
