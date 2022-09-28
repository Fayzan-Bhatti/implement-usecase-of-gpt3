import React from 'react'
import { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import cartoon from '../assets/cartoon.png'
import '../css/style.css'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#fafafa' }}>
        <div className='container-fluid d-flex'>
          <div className='container' style={{ marginTop: '90px' }}>
            <h1>
              A brilliant, 20X faster way to write
            </h1>
            <p>
              AI Writing Tool is your #1 AI-powered content writing assistant to write high-quality content in a few clicks at only a fraction of the cost!
            </p>
          </div>
          <div className='container' style={{ marginTop: '10px' }}>
            <img
              className="d-block w-100"
              src={cartoon}
              alt="cartoon"
            />
          </div>
        </div>

        <Container >

          <br />
          <br />
          {/* 1st */}
          <Row>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Ads for Social Media</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Ads for Social Media</Card.Title>
                  <Card.Text>
                    AI powered writing tool that helps you create high-quality content, in just a few seconds, at a fraction of the cost!
                  </Card.Text>
                  <Link to="/AdsforSocialMedia">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Ads for Google Search</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Ads for Google Search</Card.Title>
                  <Card.Text>
                    AI powered writing tool that helps you create high-quality content, in just a few seconds, at a fraction of the cost!
                  </Card.Text>
                  <Link to="/AdsforGoogleSearch">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Business Idea</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Business Idea</Card.Title>
                  <Card.Text>
                    AI will help you to Generate your Best Business Idea
                  </Card.Text>
                  <Link to="/BusinessIdea">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          {/* 2nd */}

          <Row>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Brand Name</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Brand Name</Card.Title>
                  <Card.Text>
                    AI will help you to Generate your Best Brand Name
                  </Card.Text>
                  <Link to="/BrandName">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Markeeting Email</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Cold Email Template</Card.Title>
                  <Card.Text>
                    This is perfect for markeeting  companies who need fresh ideas daily on Cold Email content that is created by AI technology.
                  </Card.Text>
                  <Link to="/coldemails">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Job Description</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Job Description</Card.Title>
                  <Card.Text>
                    AI will help you to Generate your Best Job Description
                  </Card.Text>
                  <Link to="/JobDescription">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          {/* 3rd */}
          <Row>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Notification & SMS</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Notification & SMS</Card.Title>
                  <Card.Text>
                    engage users who have not checked out new features of the AI assistant
                  </Card.Text>
                  <Link to="/NotificationSMS">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Product Description</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Generate Product Description</Card.Title>
                  <Card.Text>
                    Generate Product Description for any type of the product, simple enter the name and productdescription to get started.
                  </Card.Text>
                  <Link to="/productdescription">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Profile Bio</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Profile Bio</Card.Title>
                  <Card.Text>
                    Experienced content writer and digital marketing expert with a decade-plus experience of working in startups</Card.Text>
                  <Link to="/ProfileBio">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          {/* 4th */}
          <Row>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Story Plot</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Story Plot</Card.Title>
                  <Card.Text>
                    The time when I could not distinguish AI from humans
                  </Card.Text>
                  <Link to="/StoryPlot">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>

              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Song Lyrics</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Song Lyrics</Card.Title>
                  <Card.Text>
                    Soothing song for a couple in love. Let's AI will help you
                  </Card.Text>
                  <Link to="SongLyrics/">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>

            </Col>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Create Tweets</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Generate Tweets</Card.Title>
                  <Card.Text>
                    Start generating tweets ideas with hashtags for you online social media compaigns on tweeter. </Card.Text>
                  <Link to="/tweets">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          {/* 5th */}

          <Row>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Reviews</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Reviews</Card.Title>
                  <Card.Text>
                    Best AI writer and copywriting assistant in the market
                  </Card.Text>
                  <Link to="/Reviews">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Video Idea</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Video Idea</Card.Title>
                  <Card.Text>
                    AI writting assistant will help you how to write an video Idea about your video.
                  </Card.Text>
                  <Link to="/VideoIdea">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>

            </Col>
            <Col>
              <Card border="dark" style={{ width: '20rem' }}>
                <Card.Header className='headers'><strong>Video Description</strong></Card.Header>
                <Card.Body>
                  <Card.Title>Video Description</Card.Title>
                  <Card.Text>
                    AI assistant will help you how to write an video Description about your latest video.
                  </Card.Text>
                  <Link to="/VideoDescription">
                    <Button variant="dark">Ready To Go..!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </div >
    )
  }
}
export default Home
