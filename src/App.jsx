import React, { useState, useEffect } from 'react'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import AlbumDetail from './Components/Album/AlbumDetail'
import AlbumList from './Components/Album/AlbumList'
import Control from './Components/Control'
import { Container, Row, Col } from 'react-bootstrap'
import { FaUser } from "react-icons/fa";
import fetchJsonp from 'fetch-jsonp'
import './index.scss'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    async function fetchData() {

      await fetchJsonp(process.env.REACT_APP_API_URL_HOME)
        .then(res => res.json())
        .then(data => {
          setPlaylist(data);
        })
    }

    fetchData();


  }, [])

  useEffect(() => {
    async function fetchData() {

      await fetchJsonp(`${process.env.REACT_APP_API_URL_SEARCH}${searchQuery}&limit=10&output=jsonp`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setPlaylist(data);
        })
    }
    if (searchQuery !== '') {
      fetchData();
    }




  }, [searchQuery])

  const handleSearch = searchQuery => {
    setSearchQuery(searchQuery);
  }
  return (
    <Container fluid className="p-0">
      <Row className="min-vh-90 g-0">
        <Col sm={3}>
          <NavBar />
        </Col>
        <Col sm={9}>
          <Container className="p-3">
            <Row className="justify-content-between mb-5">
              <Col sm={6}>
                <SearchBar handleSearch={handleSearch} />
              </Col>
              <Col sm={3} className=" text-center">
                <p><FaUser className="text-primary" /> Francisco M.</p>

              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <AlbumDetail data={playlist} />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <h1 className="text-primary">Resultados</h1>
                <AlbumList data={playlist} />
              </Col>
            </Row>

          </Container>
        </Col>
      </Row>
      <Row className="min-vh-10 g-0">
        <Col sm={12}>
          <Control data={playlist} />
        </Col>
      </Row>

    </Container>
  )
}

export default App
