
import logo from '../assets/favicon.svg'
import React from 'react'
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect >
          <Navbar.Brand href="/">
            &nbsp; <img src={logo} width="50px" alt="AI pic" />
            &nbsp; Implement the <strong style={{ color: '#001aff' }}>UseCase </strong> of <strong style={{ color: '#001aff' }}>GPT-3</strong>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav >
              <NavDropdown title="Choose UseCase" id="basic-nav-dropdown">
                <NavDropdown.Item href="AdsforSocialMedia">Ads for Social Media</NavDropdown.Item>
                <NavDropdown.Item href="AdsforGoogleSearch">Ads for Google Search</NavDropdown.Item>
                <NavDropdown.Item href="BusinessIdea">Business Idea</NavDropdown.Item>
                <NavDropdown.Item href="BrandName">Brand Name</NavDropdown.Item>
                <NavDropdown.Item href="coldemails">Cold Emails</NavDropdown.Item>
                <NavDropdown.Item href="JobDescription">Job Description</NavDropdown.Item>
                <NavDropdown.Item href="NotificationSMS">Notification & SMS</NavDropdown.Item>
                <NavDropdown.Item href="ProductDescription">Product Description</NavDropdown.Item>
                <NavDropdown.Item href="ProfileBio">Profile Bio</NavDropdown.Item>
                <NavDropdown.Item href="StoryPlot">Story Plot</NavDropdown.Item>
                <NavDropdown.Item href="SongLyrics">Song Lyrics</NavDropdown.Item>
                <NavDropdown.Item href="Tweets">Tweets</NavDropdown.Item>
                <NavDropdown.Item href="Reviews">Reviews</NavDropdown.Item>
                <NavDropdown.Item href="VideoIdea">Video Idea</NavDropdown.Item>
                <NavDropdown.Item href="VideoDescription">Video Description</NavDropdown.Item>


              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}
export default Navigation
