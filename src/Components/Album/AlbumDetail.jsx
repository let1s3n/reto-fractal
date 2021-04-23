import React from 'react'
import { Card, Row, Col,Spinner } from 'react-bootstrap'

const AlbumDetail = ({ data }) => {

  if ((typeof data.tracks) === 'undefined') {
    if(Array.isArray(data.data)){
      return (
       <Card className="border-0">
          <Row className="albumDetail border">
            <Col sm={4} className="h-100 px-0">
              <Card.Img variant="top" src={data.data[0].album.cover_medium} />
            </Col>
            <Col sm={8} className="h-100 px-0 o-50" >
              <Card className="border-0 h-100 text-white">
                <Card.Img src={data.data[0].album.cover_medium} alt="Card image"/>
                <Card.ImgOverlay className="bg-gradient">
                  <Card.Title>{data.data[0].artist.name} {data.data[0].title} </Card.Title>
                  <Card.Subtitle className="mb-2 fw-normal">{`Lo mejor de ${data.data[0].artist.name}`} <span className="ms-2 text-secondary">312,123 seguidores</span> </Card.Subtitle>
                  <Card.Text className="mt-sm-4">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Card> 
        
      )
    }
    return (
      <Spinner animation="border" variant="primary" />
      )
  }

  

    return (
      <Card className="border-0">
        <Row className="albumDetail">
          <Col sm={4} className="detail-height h-100 px-0">
            <Card.Img variant="top" src={data.tracks.data[0].album.cover_medium} />
          </Col>
          <Col sm={8} className="detail-height h-100 px-0 o-50" >
            <Card className="border-0 h-100 text-white">
              <Card.Img src={data.tracks.data[0].album.cover_medium} alt="Card image"/>
              <Card.ImgOverlay className="bg-gradient">
                <Card.Title>{data.tracks.data[0].artist.name} {data.tracks.data[0].title} </Card.Title>
                <Card.Subtitle className="mb-2 fw-normal">{`Lo mejor de ${data.tracks.data[0].artist.name}`} <span className="ms-2 text-secondary">312,123 seguidores</span> </Card.Subtitle>
                <Card.Text className="mt-sm-4">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Card>
    )

}

export default AlbumDetail
